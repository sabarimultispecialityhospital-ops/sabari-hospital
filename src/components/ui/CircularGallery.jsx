import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef, useState } from 'react';

import './CircularGallery.css';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach(key => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance);
    }
  });
}

const DEFAULT_FONT = 'bold 30px Figtree';
const DEFAULT_FONT_URL = 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap';

function deriveFontFamilyFromUrl(url) {
  const fileName = (url.split('/').pop() || 'custom-font').split('?')[0];
  const base = fileName.replace(/\.(woff2?|ttf|otf|eot)$/i, '');
  return base.replace(/[^a-zA-Z0-9-_ ]/g, '').trim() || 'CircularGalleryFont';
}

async function loadFontFromStylesheet(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch font stylesheet (${response.status})`);
  const cssText = await response.text();
  const faceBlocks = cssText.match(/@font-face\s*{[^}]*}/g) || [];
  let family = null;
  const fontFaces = [];
  for (const block of faceBlocks) {
    const familyMatch = block.match(/font-family:\s*['"]?([^;'"]+)['"]?/);
    const urlMatch = block.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
    if (!familyMatch || !urlMatch) continue;
    family = familyMatch[1].trim();
    const descriptors = {};
    const weightMatch = block.match(/font-weight:\s*([^;]+);/);
    const styleMatch = block.match(/font-style:\s*([^;]+);/);
    const rangeMatch = block.match(/unicode-range:\s*([^;]+);/);
    if (weightMatch) descriptors.weight = weightMatch[1].trim();
    if (styleMatch) descriptors.style = styleMatch[1].trim();
    if (rangeMatch) descriptors.unicodeRange = rangeMatch[1].trim();
    fontFaces.push(new FontFace(family, `url(${urlMatch[1]})`, descriptors));
  }
  if (!family) throw new Error('No @font-face rule found in the stylesheet');
  await Promise.allSettled(
    fontFaces.map(async face => {
      await face.load();
      document.fonts.add(face);
    })
  );
  return family;
}

async function loadFontFromFile(url) {
  const family = deriveFontFamilyFromUrl(url);
  const fontFace = new FontFace(family, `url(${url})`);
  await fontFace.load();
  document.fonts.add(fontFace);
  return family;
}

async function loadCustomFont(fontUrl) {
  const isStylesheet = fontUrl.includes('fonts.googleapis.com') || /\.css(\?.*)?$/i.test(fontUrl);
  return isStylesheet ? loadFontFromStylesheet(fontUrl) : loadFontFromFile(fontUrl);
}

async function resolveFont(font, fontUrl) {
  const effectiveUrl = fontUrl || (font === DEFAULT_FONT ? DEFAULT_FONT_URL : null);
  if (!effectiveUrl) {
    if (document.fonts && document.fonts.load) {
      try {
        await document.fonts.load(font);
        await document.fonts.ready;
      } catch {
        // Ignore
      }
    }
    return font;
  }
  try {
    const family = await loadCustomFont(effectiveUrl);
    const sizeMatch = font.match(/^\s*(.*?\d+px)/);
    const prefix = sizeMatch ? sizeMatch[1].trim() : 'bold 30px';
    const resolved = `${prefix} "${family}", "Plus Jakarta Sans", Manrope, Inter, sans-serif`;
    if (document.fonts && document.fonts.load) {
      try {
        await document.fonts.load(resolved);
        await document.fonts.ready;
      } catch {
        // Ignore
      }
    }
    return resolved;
  } catch (error) {
    console.error('CircularGallery: unable to load font from', fontUrl, error);
    return font.includes('sans-serif') ? font : `${font}, "Plus Jakarta Sans", Manrope, Inter, sans-serif`;
  }
}

function getFontSize(font) {
  const match = font.match(/(\d+)px/);
  return match ? parseInt(match[1], 10) : 30;
}

function createTextTexture(gl, text, font = '600 22px "Plus Jakarta Sans", Manrope, Inter, sans-serif', color = '#ffffff') {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const safeFont = font.includes('sans-serif') ? font : `${font}, "Plus Jakarta Sans", Manrope, Inter, sans-serif`;
  const scale = 2;
  
  context.font = safeFont;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(getFontSize(safeFont) * 1.3);
  
  canvas.width = (textWidth + 50) * scale;
  canvas.height = (textHeight + 24) * scale;
  
  context.scale(scale, scale);
  context.font = safeFont;
  context.fillStyle = color;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, (textWidth + 50) / 2, (textHeight + 24) / 2);
  
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: textWidth + 50, height: textHeight + 24 };
}

class Title {
  constructor({ gl, plane, renderer, text, textColor = '#545050', font = '30px sans-serif' }) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
    this.createMesh();
  }
  createMesh() {
    const { texture, width, height } = createTextTexture(this.gl, this.text, this.font, this.textColor);
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true
    });
    this.mesh = new Mesh(this.gl, { geometry, program });
    const aspect = width / height;
    const textHeight = this.plane.scale.y * 0.15;
    const textWidth = textHeight * aspect;
    this.mesh.scale.set(textWidth, textHeight, 1);
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05;
    this.mesh.setParent(this.plane);
  }
}

class Media {
  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font
  }) {
    this.extra = 0;
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }
  createShader() {
    const texture = new Texture(this.gl, {
      generateMipmaps: true
    });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          // Smooth antialiasing for edges
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius }
      },
      transparent: true
    });
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
    };
  }
  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.plane.setParent(this.scene);
  }
  createTitle() {
    this.title = new Title({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      text: this.text,
      textColor: this.textColor,
      font: this.font
    });
  }
  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = this.speed;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }
  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) {
      this.viewport = viewport;
      if (this.plane.program.uniforms.uViewportSizes) {
        this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
      }
    }
    this.scale = this.screen.height / 1500;
    this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width;
    this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
    this.padding = 2;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

class App {
  constructor(
    container,
    {
      items,
      bend,
      textColor = '#ffffff',
      borderRadius = 0,
      font = 'bold 30px Figtree',
      scrollSpeed = 2,
      scrollEase = 0.05,
      autoScroll = true,
      autoScrollSpeed = 0.025,
      onItemClick
    } = {}
  ) {
    document.documentElement.classList.remove('no-js');
    this.container = container;
    this.onItemClick = onItemClick;
    this.scrollSpeed = scrollSpeed;
    this.autoScroll = autoScroll;
    this.autoScrollSpeed = autoScrollSpeed;
    this.isHovered = false;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck, 200);
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
  }
  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    this.gl = this.renderer.gl;
    if (!this.gl) {
      throw new Error('WebGL context is not available');
    }
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }
  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }
  createScene() {
    this.scene = new Transform();
  }
  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 1,
      widthSegments: 1
    });
  }
  createMedias(items, bend = 1, textColor, borderRadius, font) {
    const defaultItems = [
      { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'Bridge' },
      { image: `https://picsum.photos/seed/2/800/600?grayscale`, text: 'Desk Setup' },
      { image: `https://picsum.photos/seed/3/800/600?grayscale`, text: 'Waterfall' },
      { image: `https://picsum.photos/seed/4/800/600?grayscale`, text: 'Strawberries' },
      { image: `https://picsum.photos/seed/5/800/600?grayscale`, text: 'Deep Diving' },
      { image: `https://picsum.photos/seed/16/800/600?grayscale`, text: 'Train Track' },
      { image: `https://picsum.photos/seed/17/800/600?grayscale`, text: 'Santorini' },
      { image: `https://picsum.photos/seed/8/800/600?grayscale`, text: 'Blurry Lights' },
      { image: `https://picsum.photos/seed/9/800/600?grayscale`, text: 'New York' },
      { image: `https://picsum.photos/seed/10/800/600?grayscale`, text: 'Good Boy' },
      { image: `https://picsum.photos/seed/21/800/600?grayscale`, text: 'Coastline' },
      { image: `https://picsum.photos/seed/12/800/600?grayscale`, text: 'Palm Trees' }
    ];
    const galleryItems = items && items.length ? items : defaultItems;
    this.originalItems = galleryItems;
    this.mediasImages = galleryItems.concat(galleryItems);
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.text,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font
      });
    });
  }
  onTouchDown(e) {
    if (!this.container) return;
    const target = e.target;
    if (!this.container.contains(target) && target !== this.renderer?.gl?.canvas) {
      return;
    }
    this.isDown = true;
    this.hasMoved = false;
    this.hasMovedHorizontally = false;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientX : e.clientX;
    this.startY = e.touches ? e.touches[0].clientY : e.clientY;
    this.startTime = Date.now();
  }
  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaX = Math.abs(this.start - x);
    const deltaY = Math.abs(this.startY - y);

    // If on mobile touch and dominant motion is vertical page scrolling, release horizontal drag
    if (e.touches && deltaY > deltaX * 1.2 && deltaY > 12 && !this.hasMovedHorizontally) {
      this.isDown = false;
      return;
    }

    if (deltaX > 15 || deltaY > 15) {
      this.hasMoved = true;
    }
    if (deltaX > 15) {
      this.hasMovedHorizontally = true;
    }
    const distance = (this.start - x) * (this.scrollSpeed * 0.025);
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp(e) {
    if (!this.isDown) return;
    this.isDown = false;
    if (!this.autoScroll) {
      this.onCheck();
    }

    if (!this.container) return;
    const rect = this.container.getBoundingClientRect();
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const endY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    
    const isInside = (
      endX >= rect.left &&
      endX <= rect.right &&
      endY >= rect.top &&
      endY <= rect.bottom
    );
    if (!isInside) return;

    const distanceX = Math.abs(this.start - endX);
    const distanceY = Math.abs(this.startY - endY);
    const tapDistance = Math.hypot(distanceX, distanceY);
    const time = Date.now() - this.startTime;

    // Detect intentional tap/click: small movement and under 700ms
    const isTap = (!this.hasMoved || tapDistance < 22) && time < 700;

    if (isTap && this.originalItems && this.originalItems.length > 0) {
      const now = Date.now();
      if (now - (this.lastTapTime || 0) < 400) return;
      this.lastTapTime = now;

      // Project tap position into WebGL viewport coordinates
      const tapX_px = endX - (rect.left + rect.width / 2);
      const tapY_px = (rect.top + rect.height / 2) - endY;
      
      const tapX_gl = (tapX_px / rect.width) * this.viewport.width;
      const tapY_gl = (tapY_px / rect.height) * this.viewport.height;

      let bestMedia = null;
      let minDistance = Infinity;

      if (this.medias && this.medias.length > 0) {
        // Priority 1: Check cards directly under tap coordinates
        for (const media of this.medias) {
          const posX = media.plane.position.x;
          const posY = media.plane.position.y;
          const halfW = (media.plane.scale.x / 2) + 0.6;
          const halfH = (media.plane.scale.y / 2) + 1.2;

          const inBounds = (
            Math.abs(tapX_gl - posX) <= halfW &&
            Math.abs(tapY_gl - posY) <= halfH
          );

          if (inBounds) {
            const dist = Math.abs(tapX_gl - posX);
            if (dist < minDistance) {
              minDistance = dist;
              bestMedia = media;
            }
          }
        }

        // Priority 2: Fallback to closest visible card on screen
        if (!bestMedia) {
          for (const media of this.medias) {
            const dist = Math.abs(tapX_gl - media.plane.position.x);
            if (dist < minDistance) {
              minDistance = dist;
              bestMedia = media;
            }
          }
        }
      }

      if (bestMedia) {
        const actualIndex = ((bestMedia.index % this.originalItems.length) + this.originalItems.length) % this.originalItems.length;
        const clickedItem = this.originalItems[actualIndex];
        if (this.onItemClick && clickedItem) {
          this.onItemClick(clickedItem, actualIndex);
        }
      }
    }
  }
  onWheel(e) {
    if (!this.container) return;
    const delta = e.deltaY || e.wheelDelta || e.detail;
    this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
    this.onCheckDebounce();
  }
  onKeyDown(e) {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        this.scroll.target += this.scrollSpeed * 5;
        this.onCheckDebounce();
        break;

      case 'ArrowLeft':
        e.preventDefault();
        this.scroll.target -= this.scrollSpeed * 5;
        this.onCheckDebounce();
        break;

      case 'Home':
        e.preventDefault();
        this.scroll.target = 0;
        this.onCheckDebounce();
        break;

      default:
        break;
    }
  }

  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }
  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height
    });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.medias) {
      this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
    }
  }
  update() {
    if (this.autoScroll && !this.isDown && !this.isHovered) {
      this.scroll.target += this.autoScrollSpeed;
    }
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current >= this.scroll.last ? 'right' : 'left';
    if (this.medias) {
      this.medias.forEach(media => media.update(this.scroll, direction));
    }
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }
  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);
    this.boundOnKeyDown = this.onKeyDown.bind(this);
    this.boundOnMouseEnter = () => { this.isHovered = true; };
    this.boundOnMouseLeave = () => { this.isHovered = false; };

    window.addEventListener('resize', this.boundOnResize);

    if (this.container) {
      this.container.addEventListener('mouseenter', this.boundOnMouseEnter);
      this.container.addEventListener('mouseleave', this.boundOnMouseLeave);
      this.container.addEventListener('wheel', this.boundOnWheel, { passive: true });
      this.container.addEventListener('mousedown', this.boundOnTouchDown);
      this.container.addEventListener('touchstart', this.boundOnTouchDown, { passive: true });
      this.container.addEventListener('keydown', this.boundOnKeyDown);
    }

    window.addEventListener('mousemove', this.boundOnTouchMove);
    window.addEventListener('mouseup', this.boundOnTouchUp);
    window.addEventListener('touchmove', this.boundOnTouchMove);
    window.addEventListener('touchend', this.boundOnTouchUp);
  }
  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.boundOnResize);
    window.removeEventListener('mousemove', this.boundOnTouchMove);
    window.removeEventListener('mouseup', this.boundOnTouchUp);
    window.removeEventListener('touchmove', this.boundOnTouchMove);
    window.removeEventListener('touchend', this.boundOnTouchUp);

    if (this.container) {
      this.container.removeEventListener('mouseenter', this.boundOnMouseEnter);
      this.container.removeEventListener('mouseleave', this.boundOnMouseLeave);
      this.container.removeEventListener('wheel', this.boundOnWheel);
      this.container.removeEventListener('mousedown', this.boundOnTouchDown);
      this.container.removeEventListener('touchstart', this.boundOnTouchDown);
      this.container.removeEventListener('keydown', this.boundOnKeyDown);
    }

    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

function FallbackGallery({ items = [], onItemClick, autoScroll = true }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [autoScroll]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center relative select-none">
      {/* Scroll Navigation Buttons */}
      <div className="absolute -top-12 sm:-top-16 right-4 lg:right-0 hidden sm:flex items-center gap-2 z-20">
        <button
          type="button"
          onClick={() => scroll('left')}
          className="w-9 h-9 rounded-full border border-neutral-700 bg-neutral-800/90 hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          aria-label="Previous specialist"
        >
          &larr;
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="w-9 h-9 rounded-full border border-neutral-700 bg-neutral-800/90 hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          aria-label="Next specialist"
        >
          &rarr;
        </button>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="w-full flex items-center gap-5 sm:gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 py-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            onClick={() => onItemClick && onItemClick(item)}
            className="group relative flex-shrink-0 w-[240px] sm:w-[280px] lg:w-[300px] aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700/60 hover:border-neutral-500 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark gradient overlay & doctor typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 mb-1">
                SPECIALIST
              </span>
              <h3 className="text-[17px] sm:text-[19px] font-medium text-white tracking-tight leading-tight group-hover:text-emerald-400 transition-colors">
                {item.text}
              </h3>
              <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-white/60 group-hover:text-white transition-colors">
                <span>View Profile</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  font = 'bold 30px Figtree',
  fontUrl,
  scrollSpeed = 2,
  scrollEase = 0.05,
  autoScroll = true,
  autoScrollSpeed = 0.025,
  onItemClick
}) {
  const containerRef = useRef(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    // 1. Pre-flight check: does browser support WebGL?
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglFailed(true);
        return;
      }
    } catch {
      setWebglFailed(true);
      return;
    }

    if (!containerRef.current) return;
    let app;
    let isMounted = true;

    resolveFont(font, fontUrl)
      .then(resolvedFont => {
        if (!isMounted || !containerRef.current) return;
        try {
          app = new App(containerRef.current, {
            items,
            bend,
            textColor,
            borderRadius,
            font: resolvedFont,
            scrollSpeed,
            scrollEase,
            autoScroll,
            autoScrollSpeed,
            onItemClick
          });
        } catch (err) {
          console.warn('CircularGallery WebGL initialization error, falling back to CSS carousel:', err);
          if (isMounted) setWebglFailed(true);
        }
      })
      .catch(err => {
        console.warn('CircularGallery font resolve error, falling back to CSS carousel:', err);
        if (isMounted) setWebglFailed(true);
      });

    return () => {
      isMounted = false;
      if (app) {
        try {
          app.destroy();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, [items, bend, textColor, borderRadius, font, fontUrl, scrollSpeed, scrollEase, autoScroll, autoScrollSpeed, onItemClick]);

  if (webglFailed) {
    return <FallbackGallery items={items} onItemClick={onItemClick} />;
  }

  return (
    <div
      className="circular-gallery"
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Circular image gallery. Use left and right arrow keys to navigate."
    />
  );
}
