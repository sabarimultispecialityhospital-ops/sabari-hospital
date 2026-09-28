import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Footer } from '../sections/Footer';
import DriftWall from '../components/ui/DriftWall';

// Only authentic Sabari Hospital photographs (all AI generated images removed)
const ALL_WEBSITE_IMAGES = [
  // Hospital Campus & External Architecture
  { image: '/hero_image.png', title: 'Sabari Multispeciality Hospital Main Campus' },
  { image: '/gallery/image-5.png', title: 'Hospital Main Entrance & 24/7 Facade' },
  { image: '/hero/image-10.png', title: 'Hospital Main Entrance' },

  // Hospital Ceremonies, Doctors & Healthcare Team
  { image: '/hero/image-11.png', title: 'Hospital Opening Ceremony' },
  { image: '/hero/image-12.png', title: 'Lamp Lighting Ceremony' },
  { image: '/hero/image-13.png', title: 'Sabari Hospital Medical Staff & Healthcare Team' },
  { image: '/hero/image-17.png', title: 'Dedicated Nursing & Patient Care Team' },

  // Clinical Facilities, Operation Theatre & Consultation Rooms
  { image: '/hero/image-14.png', title: 'Executive Consultation Suite' },
  { image: '/hero/image-15.png', title: 'Surgical Team in Operation Theatre' },
  { image: '/hero/image-16.png', title: 'Critical Care & Patient Recovery Infrastructure' },
  { image: '/gallery/image-18.png', title: 'Consultation Room 4 - Dr. R. Rashmi' },
  { image: '/gallery/image-19.png', title: 'Consultant Gynecologist & Urologist Chambers' },
  { image: '/gallery/image-20.png', title: 'Specialist Consultation Suites' },
  { image: '/gallery/image-21.png', title: 'Outpatient Consultation Room' },
  { image: '/gallery/image-22.png', title: 'Doctor Consultation Chamber' },
  { image: '/gallery/image-23.png', title: 'In-House Pharmacy Counter' },
  { image: '/gallery/image-24.png', title: 'Main Hospital Reception Desk' },
  { image: '/gallery/image-25.png', title: 'Outpatient Waiting Lounge' },
  { image: '/gallery/image-26.png', title: 'Hospital Consultants Directory Board' },
  { image: '/gallery/image-27.png', title: 'Inpatient Ward Corridor & Consultation Chambers' },

  // Hospital Leadership & Medical Specialists
  { image: '/dr-mangaleeswari.png', title: 'Dr. Mangaleeswari - Founder & Consultant Gynecologist' },
  { image: '/dr-saravana-kumar.png', title: 'Dr. Saravana Kumar S - Managing Director & Surgeon' },
  { image: '/rashmi.png', title: 'Dr. Rashmi Saravanakumar - Consultant Diabetologist' },
  { image: '/doctors/doctor-4.png', title: 'Dr. Deepika Mohankumar PT - Physiotherapy Specialist' },
  { image: '/doctors/doctor-5.png', title: 'Dr. Uthara Vijai Kumar - Pulmonologist' },
  { image: '/doctors/dr-deepika.png', title: 'Dr. Deepika - Obstetrician & Gynaecologist' }
];

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [wallConfig, setWallConfig] = useState({
    columns: 6,
    tileWidth: 230,
    tileHeight: 148,
    gap: 20,
    tilt: 15,
    turn: -13,
    perspective: 1300,
    depth: 120,
    lift: 72,
    speed: 40,
    offsetX: -70
  });

  useEffect(() => {
    document.title = "Gallery | Sabari Multispeciality Hospital";
    window.scrollTo(0, 0);

    const updateConfig = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile phones
        setWallConfig({
          columns: 3,
          tileWidth: 145,
          tileHeight: 96,
          gap: 12,
          tilt: 12,
          turn: -10,
          perspective: 850,
          depth: 70,
          lift: 36,
          speed: 32,
          offsetX: -40
        });
      } else if (width < 1024) {
        // Tablet / Small Laptop
        setWallConfig({
          columns: 4,
          tileWidth: 185,
          tileHeight: 122,
          gap: 16,
          tilt: 14,
          turn: -12,
          perspective: 1100,
          depth: 95,
          lift: 52,
          speed: 36,
          offsetX: -80
        });
      } else if (width < 1440) {
        // Standard Desktop
        setWallConfig({
          columns: 5,
          tileWidth: 215,
          tileHeight: 140,
          gap: 18,
          tilt: 15,
          turn: -13,
          perspective: 1250,
          depth: 110,
          lift: 65,
          speed: 40,
          offsetX: -130
        });
      } else {
        // Large Displays / 4K
        setWallConfig({
          columns: 6,
          tileWidth: 235,
          tileHeight: 150,
          gap: 20,
          tilt: 15,
          turn: -13,
          perspective: 1300,
          depth: 120,
          lift: 72,
          speed: 40,
          offsetX: -160
        });
      }
    };

    updateConfig();
    window.addEventListener('resize', updateConfig);
    return () => window.removeEventListener('resize', updateConfig);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#060010] text-white flex flex-col justify-between selection:bg-neutral-800">
      
      {/* 
        Full Page DriftWall Section
        Takes 100% of remaining screen height below navbar (88px desktop / 72px mobile)
        Uses dynamic viewport units (dvh) for seamless mobile browsing
      */}
      <section className="relative w-full h-[calc(100dvh-72px)] sm:h-[calc(100vh-88px)] min-h-[480px] sm:min-h-[620px] mt-[72px] sm:mt-[88px] overflow-hidden bg-[#060010]">
        
        {/* Ambient Top Subtle Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-950/20 rounded-full blur-[120px] pointer-events-none" />

        {/* 3D DriftWall Canvas filling 100% width and height */}
        <div className="w-full h-full">
          <DriftWall
            items={ALL_WEBSITE_IMAGES}
            columns={wallConfig.columns}
            tileWidth={wallConfig.tileWidth}
            tileHeight={wallConfig.tileHeight}
            gap={wallConfig.gap}
            tilt={wallConfig.tilt}
            turn={wallConfig.turn}
            perspective={wallConfig.perspective}
            depth={wallConfig.depth}
            speed={wallConfig.speed}
            direction="up"
            variance={0.45}
            parallax={0.65}
            lift={wallConfig.lift}
            fade={0.55}
            dim={0.6}
            overlayColor="#060010"
            radius={14}
            roll={0}
            pauseOnHover={false}
            grayscale={false}
            offsetX={wallConfig.offsetX}
            onTileClick={(item) => setSelectedImage(item)}
          />
        </div>
      </section>

      {/* Image Lightbox Inspection Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-6 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-[#0e0e18] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/95 text-white/90 hover:text-white border border-white/20 transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Image */}
              <div className="w-full max-h-[85vh] flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title || 'Hospital Gallery'}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hospital Footer */}
      <Footer />
    </div>
  );
}
export default GalleryPage;
