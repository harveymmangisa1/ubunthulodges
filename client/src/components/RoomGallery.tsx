import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight, Scan } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoomGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  title: string;
}

export function RoomGallery({ images, title }: RoomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + images.length) % images.length
      : (selectedImage + 1) % images.length;
    setSelectedImage(newIndex);
  }, [selectedImage, images.length]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage('prev');
      if (e.key === "ArrowRight") navigateImage('next');
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, navigateImage]);

  const currentImage = selectedImage !== null ? images[selectedImage] : null;

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {/* Featured Main Image (8 Columns) */}
        <div className="col-span-12 lg:col-span-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div 
              className="relative aspect-[16/10] overflow-hidden bg-stone-100 group cursor-none"
              onClick={() => openLightbox(0)}
            >
              <motion.img 
                src={images[0]?.src} 
                alt={images[0]?.alt || title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              />
              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <div className="w-10 h-[1px] bg-white/50" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium">View Collection</span>
              </div>
              
              {/* Custom Hover Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-full">
                  <Scan className="w-6 h-6 text-stone-900 stroke-1" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Thumbnail Stack (4 Columns) */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
          {images.slice(1, 3).map((image, index) => (
            <ScrollReveal key={index} direction="left" delay={0.2 + (index * 0.1)}>
              <div 
                className="relative aspect-[16/10] lg:aspect-auto lg:h-[calc(50%-8px)] overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index + 1)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Implementation */}
      <AnimatePresence>
        {selectedImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A]/98 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close UI */}
            <button className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">Close</span>
              <X className="w-8 h-8 stroke-1" />
            </button>

            {/* Navigation UI */}
            <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              <NavButton direction="prev" onClick={() => navigateImage('prev')} />
              <NavButton direction="next" onClick={() => navigateImage('next')} />
            </div>

            {/* Image Container */}
            <motion.div
              layoutId={`img-${selectedImage}`}
              className="relative w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img 
                key={selectedImage}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                src={currentImage.src} 
                className="max-h-[75vh] w-auto shadow-2xl"
              />
              
              <div className="mt-8 text-center space-y-2 max-w-xl">
                <h4 className="text-white text-xs uppercase tracking-[0.4em] font-light">
                  {title} &mdash; 0{selectedImage + 1}
                </h4>
                {currentImage.caption && (
                  <p className="text-stone-400 font-serif italic text-sm leading-relaxed">
                    {currentImage.caption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavButton({ direction, onClick }: { direction: 'prev' | 'next', onClick: () => void }) {
  return (
    <button 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className="pointer-events-auto w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-stone-900 transition-all"
    >
      {direction === 'prev' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}

function ScrollReveal({ children, direction = "up", delay = 0, className = "" }: { children: React.ReactNode, direction?: any, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === "up" ? 30 : 0, x: direction === "left" ? 30 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}