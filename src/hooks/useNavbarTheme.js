import { useState, useEffect } from 'react';

export function useNavbarTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleIntersection = (entries) => {
      // Find the first intersecting section that takes up a significant portion of the top viewport
      const activeEntry = entries.find(entry => entry.isIntersecting && entry.intersectionRect.top <= 88);
      
      if (activeEntry) {
        const sectionTheme = activeEntry.target.getAttribute('data-nav-theme');
        if (sectionTheme === 'dark' || sectionTheme === 'light') {
          setTheme(sectionTheme);
        }
      }
    };

    const observerOptions = {
      root: null,
      // Trigger when the element crosses the top of the viewport
      rootMargin: '-88px 0px 0px 0px',
      // High threshold or array of thresholds to catch transitions smoothly
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0]
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = document.querySelectorAll('[data-nav-theme]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return {
    theme,
    isDark: theme === 'dark'
  };
}
