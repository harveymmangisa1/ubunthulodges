import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Maximize2, ArrowLeft, ArrowRight, Camera, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Custom Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const gallerySections = [
    {
      category: "rooms",
      images: [
        { src: "/standardroom.jpg", alt: "The Executive Suite", caption: "Spacious master bedroom with premium linens" },
        { src: "/kitchenfront.jpg", alt: "En-suite Elegance", caption: "Modern bathroom fixtures and rainfall shower" },
        { src: "/pool.jpg", alt: "Room Perspective", caption: "Curated furniture and local art pieces" },
      ]
    },
    {
      category: "facilities",
      images: [
        { src: "/pool.jpg", alt: "Rooftop Infinity", caption: "Uninterrupted views of the city skyline" },
        { src: "/kitchenfront.jpg", alt: "Culinary Space", caption: "Modern kitchen producing world-class fusion" },
      ]
    }
  ];

  const allImages = gallerySections.flatMap(section => 
    section.images.map(img => ({ ...img, category: section.category }))
  );

  const filteredImages = selectedCategory === "all" 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  const currentImage = selectedImage !== null ? filteredImages[selectedImage] : null;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-stone-900 overflow-x-hidden">
      <Navigation />

      {/* Hero Section: High Editorial */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 opacity-50"
        >
          <img src="/hero.jpg" className="w-full h-full object-cover" alt="Gallery Hero" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <ScrollReveal direction="up">
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/60 font-bold block mb-6">
              Visual Archives — Vol. I
            </span>
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 italic font-light">
              Atmosphere
            </h1>
            <p className="text-white/50 text-xs uppercase tracking-[0.3em] max-w-md mx-auto leading-loose">
              Capturing the interplay of light, luxury, and Malawian heritage.
            </p>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" 
        />
      </section>

      {/* Navigation Filter: Minimalist Underline */}
      <div className="sticky top-[72px] z-[45] bg-[#F9F8F6]/80 backdrop-blur-xl border-b border-stone-200">
        <div className="container-custom flex justify-center gap-12 py-6">
          {["all", "rooms", "facilities", "exterior"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "text-[10px] uppercase tracking-[0.3em] font-bold transition-colors relative pb-1",
                selectedCategory === cat ? "text-stone-900" : "text-stone-400 hover:text-stone-600"
              )}
            >
              {cat}
              {selectedCategory === cat && (
                <motion.div layoutId="navActive" className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-900" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid with Custom Hover Logic */}
      <section className="py-24 container-custom">
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src + index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="relative group overflow-hidden bg-stone-200 cursor-none"
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                
                {/* Subtle Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 mb-2">{image.category}</span>
                  <h3 className="text-xl font-serif italic text-white">{image.alt}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Smart Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 rounded-full border border-stone-400 pointer-events-none z-[60] flex items-center justify-center mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
      >
        <span className="text-[8px] uppercase tracking-widest text-white font-bold">View</span>
      </motion.div>

      {/* Lightbox: Cinematic Mode */}
      <AnimatePresence>
        {selectedImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950 flex flex-col items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute top-10 right-10 flex gap-6">
               <button className="text-white/40 hover:text-white transition-colors" onClick={() => setSelectedImage(null)}>
                  <X size={32} strokeWidth={1} />
               </button>
            </div>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              src={currentImage.src}
              className="max-w-[85vw] max-h-[70vh] object-contain"
            />

            <div className="absolute bottom-20 text-center max-w-2xl px-6">
              <h2 className="text-white font-serif text-4xl italic mb-4">{currentImage.alt}</h2>
              <p className="text-stone-500 font-light text-sm tracking-wide leading-relaxed">
                {currentImage.caption}
              </p>
            </div>

            {/* Nav Arrows */}
            <div className="absolute inset-x-10 flex justify-between pointer-events-none">
                <button onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }} className="pointer-events-auto text-white/20 hover:text-white transition-colors">
                  <ArrowLeft size={48} strokeWidth={1} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); navigateImage('next'); }} className="pointer-events-auto text-white/20 hover:text-white transition-colors">
                  <ArrowRight size={48} strokeWidth={1} />
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}