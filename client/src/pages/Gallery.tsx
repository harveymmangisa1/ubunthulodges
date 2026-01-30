import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal, ScrollRevealStaggered } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Maximize2, ArrowLeft, ArrowRight, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const gallerySections = [
    {
      category: "rooms",
      title: "Luxury Accommodation",
      description: "Sophisticated interiors designed for the modern traveler.",
      images: [
        { src: "/standardroom.jpg", alt: "The Executive Suite", caption: "Spacious master bedroom with premium linens", featured: true },
        { src: "/kitchenfront.jpg", alt: "En-suite Elegance", caption: "Modern bathroom fixtures and rainfall shower" },
        { src: "/pool.jpg", alt: "Room Perspective", caption: "Curated furniture and local art pieces" },
        { src: "/standardroom.jpg", alt: "Standard Comfort", caption: "Efficiency meets elegance in our standard collection" },
        { src: "/kitchenfront.jpg", alt: "Executive Workspace", caption: "Dedicated fiber-optic connected workstation" },
      ]
    },
    {
      category: "facilities",
      title: "The Experience",
      description: "From rooftop views to culinary excellence.",
      images: [
        { src: "/pool.jpg", alt: "Rooftop Infinity", caption: "Uninterrupted views of the city skyline", featured: true },
        { src: "/kitchenfront.jpg", alt: "Culinary Space", caption: "Our modern kitchen producing world-class fusion" },
        { src: "/standardroom.jpg", alt: "The Boardroom", caption: "Professional spaces for high-level meetings" },
        { src: "/pool.jpg", alt: "Golden Hour", caption: "Poolside ambiance during the sunset hours" },
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

  // Navigation Logic
  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    setSelectedImage(newIndex);
  };

  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-white">
      <Navigation />
      
      {/* Editorial Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-stone-900">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src="/hero.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent" />
        
        <div className="absolute inset-0 container-custom flex flex-col justify-center items-center text-center">
          <ScrollReveal direction="up">
            <div className="flex items-center justify-center gap-3 mb-6">
                <Camera className="w-4 h-4 text-white/60" />
                <span className="text-white/80 font-bold uppercase tracking-[0.4em] text-[10px]">The Visual Journal</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8">
              Lodge <span className="italic font-light">Gallery</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto font-light leading-relaxed">
              A curated window into the Ubunthu experience. Explore our spaces, from the serenity of our suites to the energy of our social areas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Dynamic Filter Bar */}
      <nav className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-stone-200">
        <div className="container-custom flex justify-center overflow-x-auto no-scrollbar py-2">
          <div className="flex gap-8">
            {[
              { id: "all", label: "All Works" },
              { id: "rooms", label: "Suites" },
              { id: "facilities", label: "Spaces" },
              { id: "exterior", label: "Exterior" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative group",
                  selectedCategory === cat.id ? "text-stone-900" : "text-stone-400 hover:text-stone-600"
                )}
              >
                {cat.label}
                {selectedCategory === cat.id && (
                  <motion.div layoutId="catUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Masonry Style Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  layout
                  key={image.src + index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-none overflow-hidden bg-stone-200"
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Custom Cursor Overlay on Hover */}
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <Maximize2 className="text-white w-5 h-5" />
                    </div>
                  </div>

                  {/* Caption Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">{image.category}</p>
                    <h3 className="text-white font-serif text-lg italic">{image.alt}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Cinematic Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950 flex flex-col"
            onClick={() => setSelectedImage(null)}
          >
            {/* Header */}
            <div className="p-6 flex justify-between items-center text-white relative z-10">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">
                    {selectedImage + 1} / {filteredImages.length}
                </span>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="hover:rotate-90 transition-transform duration-300"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Main Image Container */}
            <div className="flex-1 relative flex items-center justify-center p-4 md:p-12">
                <motion.button
                  className="absolute left-8 z-20 p-4 text-white/30 hover:text-white transition-colors hidden md:block"
                  onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                >
                  <ArrowLeft className="w-10 h-10 stroke-1" />
                </motion.button>

                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  src={currentImage.src}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />

                <motion.button
                  className="absolute right-8 z-20 p-4 text-white/30 hover:text-white transition-colors hidden md:block"
                  onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                >
                  <ArrowRight className="w-10 h-10 stroke-1" />
                </motion.button>
            </div>

            {/* Footer / Captions */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="p-12 text-center text-white"
            >
                <h3 className="text-3xl font-serif italic mb-2">{currentImage.alt}</h3>
                <p className="text-stone-400 font-light max-w-xl mx-auto">{currentImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}