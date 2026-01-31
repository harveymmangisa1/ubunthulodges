import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Maximize2, ArrowLeft, ArrowRight } from "lucide-react";
import { assets } from "@/lib/assets";

interface FoodImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
}

interface FoodGalleryProps {
  className?: string;
}

export function FoodGallery({ className = "" }: FoodGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const foodSections = [
    {
      category: "appetizers",
      title: "Starters & Appetizers",
      description: "Delicate beginnings to awaken your palate",
      images: [
        { src: assets.food[0], alt: "Chambo Carpaccio", caption: "Fresh Lake Malawi Chambo with citrus dressing and microgreens" },
        { src: assets.food[1], alt: "Bruschetta Selection", caption: "Artisanal bread with locally sourced toppings and herbs" },
      ]
    },
    {
      category: "mains",
      title: "Main Courses",
      description: "Signature dishes showcasing Malawian flavors",
      images: [
        { src: assets.food[2], alt: "Grilled Chambo", caption: "Whole grilled Chambo with lemon butter and seasonal vegetables" },
        { src: assets.food[3], alt: "Beef Wellington", caption: "Tender beef wrapped in pastry with mushroom duxelles" },
      ]
    },
    {
      category: "desserts",
      title: "Desserts & Sweets",
      description: "Sweet endings to memorable meals",
      images: [
        { src: assets.gallery[5], alt: "Chocolate Soufflé", caption: "Warm chocolate soufflé with vanilla ice cream" },
        { src: assets.gallery[6], alt: "Fruit Tartelette", caption: "Seasonal fruit tart with pastry cream and glazed finish" },
      ]
    },
    {
      category: "beverages",
      title: "Beverages & Drinks",
      description: "Premium selections to complement your meal",
      images: [
        { src: assets.bar[0], alt: "Cocktail Menu", caption: "Signature cocktails inspired by Malawian ingredients" },
        { src: assets.bar[1], alt: "Wine Selection", caption: "Curated wine list featuring local and international vintages" },
        { src: assets.bar[2], alt: "Lounge Ambiance", caption: "Relax in our sophisticated gentleman's bar" }
      ]
    }
  ];

  const allImages = foodSections.flatMap(section =>
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
    <div className={`w-full ${className}`}>
      {/* Category Filter */}
      <section className="py-8 border-b border-stone-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "all", label: "All Dishes" },
              { id: "appetizers", label: "Appetizers" },
              { id: "mains", label: "Main Courses" },
              { id: "desserts", label: "Desserts" },
              { id: "beverages", label: "Beverages" }
            ].map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] border-b-2 transition-all duration-300 ${selectedCategory === category.id
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
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-stone-100"
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  delay: index * 0.05
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
          </div>
        </div>
      </section>

      {/* Section Descriptions */}
      <section className="py-20 border-y border-stone-200 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {foodSections.map((section, index) => (
              <motion.div
                key={section.category}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-serif text-stone-900 mb-4">{section.title}</h3>
                <p className="text-stone-600 font-light leading-relaxed mb-6">{section.description}</p>
                <div className="text-stone-500 text-sm">
                  {section.images.length} Images
                </div>
              </motion.div>
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
    </div>
  );
}