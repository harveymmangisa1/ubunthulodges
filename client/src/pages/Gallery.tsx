import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal, ScrollRevealStaggered } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Maximize2, ArrowLeft, ArrowRight } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const gallerySections = [
    {
      category: "rooms",
      title: "Luxury Accommodation",
      description: "Experience the elegance and comfort of our premium rooms and suites",
      images: [
        { src: "/standardroom.jpg", alt: "Executive Suite Interior", caption: "Spacious Executive Suite with king bed and modern amenities" },
        { src: "/kitchenfront.jpg", alt: "Standard Room Comfort", caption: "Comfortable Standard Room with twin beds" },
        { src: "/pool.jpg", alt: "Room View", caption: "Beautiful room view with modern furnishings" },
        { src: "/standardroom.jpg", alt: "Bathroom Facilities", caption: "Modern bathroom with private geyser system" },
        { src: "/kitchenfront.jpg", alt: "Workspace", caption: "Dedicated workspace in Executive Suite" },
        { src: "/pool.jpg", alt: "Room Details", caption: "Attention to detail in every room" }
      ]
    },
    {
      category: "facilities",
      title: "World-Class Facilities",
      description: "Discover our premium facilities designed for business and leisure",
      images: [
        { src: "/pool.jpg", alt: "Infinity Pool", caption: "Stunning rooftop infinity pool with panoramic views" },
        { src: "/kitchenfront.jpg", alt: "Modern Gym", caption: "State-of-the-art fitness equipment" },
        { src: "/standardroom.jpg", alt: "Conference Hall", caption: "Spacious conference hall for corporate events" },
        { src: "/pool.jpg", alt: "Pool Bar", caption: "Elegant poolside bar serving refreshments" },
        { src: "/kitchenfront.jpg", alt: "Lounge Area", caption: "Comfortable lounge for relaxation" },
        { src: "/standardroom.jpg", alt: "Parking Area", caption: "Secure parking with 24/7 surveillance" }
      ]
    },
    {
      category: "exterior",
      title: "Stunning Architecture",
      description: "Admire the beautiful exterior design and grounds of Ubunthu Lodge",
      images: [
        { src: "/hero.jpg", alt: "Lodge Exterior", caption: "Majestic exterior of Ubunthu Lodge" },
        { src: "/pool.jpg", alt: "Main Entrance", caption: "Welcoming main entrance with modern design" },
        { src: "/kitchenfront.jpg", alt: "Garden Area", caption: "Beautifully maintained outdoor spaces" },
        { src: "/standardroom.jpg", alt: "Night View", caption: "Spectacular night illumination" },
        { src: "/pool.jpg", alt: "Terrace View", caption: "Scenic terrace with overlooking views" },
        { src: "/kitchenfront.jpg", alt: "Architectural Details", caption: "Fine architectural craftsmanship" }
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

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-stone-900 selection:bg-stone-200">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero.jpg"
            alt="Ubunthu Lodge Gallery"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-transparent to-stone-900/70" />
        </div>
        
        <div className="relative z-10 container-custom h-full flex flex-col justify-center items-center text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <span className="text-white/80 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Virtual Tour</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-8">
              Experience <span className="text-stone-300">Ubunthu Lodge</span>
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Take a visual journey through our luxurious accommodations, world-class facilities, and stunning architecture
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-stone-200 sticky top-20 z-40 bg-[#FDFCFB]/95 backdrop-blur-sm">
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "all", label: "All Images" },
                { id: "rooms", label: "Rooms" },
                { id: "facilities", label: "Facilities" },
                { id: "exterior", label: "Exterior" }
              ].map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] border-b-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "border-stone-900 text-stone-900"
                      : "border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          <ScrollRevealStaggered 
            direction="up" 
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-stone-100"
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-serif text-xl mb-2">{image.alt}</h3>
                  <p className="text-white/80 text-sm font-light line-clamp-2">{image.caption}</p>
                </div>
                
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Maximize2 className="w-4 h-4 text-stone-900" />
                </motion.div>
              </motion.div>
            ))}
          </ScrollRevealStaggered>
        </div>
      </section>

      {/* Section Descriptions */}
      <section className="py-20 border-y border-stone-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {gallerySections.map((section, index) => (
              <ScrollReveal key={section.category} direction="up" delay={0.5 + index * 0.2}>
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-stone-900 mb-4">{section.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed mb-6">{section.description}</p>
                  <div className="text-stone-500 text-sm">
                    {section.images.length} Images
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-6 text-white/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <ArrowLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute right-6 text-white/80 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <ArrowRight className="w-8 h-8" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl max-h-[80vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentImage.src} 
                alt={currentImage.alt}
                className="w-full h-full object-contain"
              />
              <div className="text-center mt-6 text-white">
                <h3 className="text-2xl font-serif mb-2">{currentImage.alt}</h3>
                <p className="text-white/80 font-light">{currentImage.caption}</p>
                <div className="text-white/60 text-sm mt-4">
                  {selectedImage + 1} / {filteredImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}