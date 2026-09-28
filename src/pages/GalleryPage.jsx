import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Footer } from '../sections/Footer';
import InfiniteSpiral from '../components/ui/InfiniteSpiral';

// Only authentic Sabari Hospital photographs (all AI generated images removed)
const ALL_WEBSITE_IMAGES = [
  // Hospital Campus & External Architecture
  { src: '/hero_image.png', alt: 'Sabari Multispeciality Hospital Main Campus', title: 'Sabari Multispeciality Hospital Main Campus' },
  { src: '/gallery/image-5.png', alt: 'Hospital Main Entrance & 24/7 Facade', title: 'Hospital Main Entrance & 24/7 Facade' },
  { src: '/hero/image-10.png', alt: 'Hospital Main Entrance', title: 'Hospital Main Entrance' },

  // Hospital Ceremonies, Doctors & Healthcare Team
  { src: '/hero/image-11.png', alt: 'Hospital Opening Ceremony', title: 'Hospital Opening Ceremony' },
  { src: '/hero/image-12.png', alt: 'Lamp Lighting Ceremony', title: 'Lamp Lighting Ceremony' },
  { src: '/hero/image-13.png', alt: 'Sabari Hospital Medical Staff & Healthcare Team', title: 'Sabari Hospital Medical Staff & Healthcare Team' },
  { src: '/hero/image-17.png', alt: 'Dedicated Nursing & Patient Care Team', title: 'Dedicated Nursing & Patient Care Team' },

  // Clinical Facilities, Operation Theatre & Consultation Rooms
  { src: '/hero/image-14.png', alt: 'Executive Consultation Suite', title: 'Executive Consultation Suite' },
  { src: '/hero/image-15.png', alt: 'Surgical Team in Operation Theatre', title: 'Surgical Team in Operation Theatre' },
  { src: '/hero/image-16.png', alt: 'Critical Care & Patient Recovery Infrastructure', title: 'Critical Care & Patient Recovery Infrastructure' },
  { src: '/gallery/image-18.png', alt: 'Consultation Room 4 - Dr. R. Rashmi', title: 'Consultation Room 4 - Dr. R. Rashmi' },
  { src: '/gallery/image-19.png', alt: 'Consultant Gynecologist & Urologist Chambers', title: 'Consultant Gynecologist & Urologist Chambers' },
  { src: '/gallery/image-20.png', alt: 'Specialist Consultation Suites', title: 'Specialist Consultation Suites' },
  { src: '/gallery/image-21.png', alt: 'Outpatient Consultation Room', title: 'Outpatient Consultation Room' },
  { src: '/gallery/image-22.png', alt: 'Doctor Consultation Chamber', title: 'Doctor Consultation Chamber' },
  { src: '/gallery/image-23.png', alt: 'In-House Pharmacy Counter', title: 'In-House Pharmacy Counter' },
  { src: '/gallery/image-24.png', alt: 'Main Hospital Reception Desk', title: 'Main Hospital Reception Desk' },
  { src: '/gallery/image-25.png', alt: 'Outpatient Waiting Lounge', title: 'Outpatient Waiting Lounge' },
  { src: '/gallery/image-26.png', alt: 'Hospital Consultants Directory Board', title: 'Hospital Consultants Directory Board' },
  { src: '/gallery/image-27.png', alt: 'Inpatient Ward Corridor & Consultation Chambers', title: 'Inpatient Ward Corridor & Consultation Chambers' },

  // Hospital Leadership & Medical Specialists
  { src: '/dr-mangaleeswari.png', alt: 'Dr. Mangaleeswari - Founder & Consultant Gynecologist', title: 'Dr. Mangaleeswari - Founder & Consultant Gynecologist' },
  { src: '/dr-saravana-kumar.png', alt: 'Dr. Saravana Kumar S - Managing Director & Surgeon', title: 'Dr. Saravana Kumar S - Managing Director & Surgeon' },
  { src: '/rashmi.png', alt: 'Dr. Rashmi Saravanakumar - Consultant Diabetologist', title: 'Dr. Rashmi Saravanakumar - Consultant Diabetologist' },
  { src: '/doctors/doctor-4.png', alt: 'Dr. Deepika Mohankumar PT - Physiotherapy Specialist', title: 'Dr. Deepika Mohankumar PT - Physiotherapy Specialist' },
  { src: '/doctors/doctor-5.png', alt: 'Dr. Uthara Vijai Kumar - Pulmonologist', title: 'Dr. Uthara Vijai Kumar - Pulmonologist' },
  { src: '/doctors/dr-deepika.png', alt: 'Dr. Deepika - Obstetrician & Gynaecologist', title: 'Dr. Deepika - Obstetrician & Gynaecologist' }
];

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [spiralConfig, setSpiralConfig] = useState({
    radius: 200,
    cardWidth: 160,
    cardHeight: 150,
    verticalSpacing: 70,
    perspective: 1000,
    cardsPerTurn: 7
  });

  useEffect(() => {
    document.title = "Gallery | Sabari Multispeciality Hospital";
    window.scrollTo(0, 0);

    const updateConfig = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile phones
        setSpiralConfig({
          radius: 140,
          cardWidth: 120,
          cardHeight: 110,
          verticalSpacing: 55,
          perspective: 850,
          cardsPerTurn: 6
        });
      } else if (width < 1024) {
        // Tablet / Small Laptop
        setSpiralConfig({
          radius: 175,
          cardWidth: 140,
          cardHeight: 130,
          verticalSpacing: 65,
          perspective: 950,
          cardsPerTurn: 7
        });
      } else {
        // Standard & Large Desktop
        setSpiralConfig({
          radius: 220,
          cardWidth: 175,
          cardHeight: 160,
          verticalSpacing: 75,
          perspective: 1050,
          cardsPerTurn: 7
        });
      }
    };

    updateConfig();
    window.addEventListener('resize', updateConfig);
    return () => window.removeEventListener('resize', updateConfig);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#111827] text-white flex flex-col justify-between selection:bg-neutral-800">
      
      {/* 
        Full Page InfiniteSpiral Section
        Takes full height below navbar (88px desktop / 72px mobile)
      */}
      <section className="relative w-full h-[calc(100dvh-72px)] sm:h-[calc(100vh-88px)] min-h-[620px] mt-[72px] sm:mt-[88px] overflow-hidden bg-[#111827]">
        
        {/* Ambient Top Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00A99D]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* InfiniteSpiral 3D Stage */}
        <div className="w-full h-full relative overflow-hidden">
          <InfiniteSpiral
            items={ALL_WEBSITE_IMAGES}
            animationMode="auto"
            speed={0.55}
            radius={spiralConfig.radius}
            cardWidth={spiralConfig.cardWidth}
            cardHeight={spiralConfig.cardHeight}
            verticalSpacing={spiralConfig.verticalSpacing}
            perspective={spiralConfig.perspective}
            cardRadius={12}
            centerScale={1.25}
            edgeBlur={5}
            cardsPerTurn={spiralConfig.cardsPerTurn}
            pauseOnHover={false}
            direction="up"
            rotation={0}
            cardTilt={0}
            edgeFade={0.35}
            imageFit="cover"
            grayscale={0}
            onItemClick={(item) => setSelectedImage(item)}
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
              <div className="w-full max-h-[80vh] flex flex-col items-center justify-center p-2">
                <img
                  src={selectedImage.src || selectedImage.image}
                  alt={selectedImage.title || selectedImage.alt || 'Hospital Gallery'}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
                />
                {(selectedImage.title || selectedImage.alt) && (
                  <p className="mt-3 text-[14px] text-white/80 font-medium text-center">
                    {selectedImage.title || selectedImage.alt}
                  </p>
                )}
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
