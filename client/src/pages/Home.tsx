import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal, ScrollRevealStaggered } from "@/components/ScrollReveal";
import { Link } from "wouter";
import { ArrowRight, Star, Shield, Flower2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-stone-900 selection:bg-stone-200">
      <Navigation />
      
      {/* Hero Section - Static & Majestic */}
      <section className="relative h-screen w-full overflow-hidden bg-stone-950">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <img 
            src="/hero.jpg"
            alt="Ubunthu Lodge Aerial"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-transparent to-stone-950/60" />
        </motion.div>

        <div className="relative z-10 container-custom h-full flex flex-col justify-center items-center text-center">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.span 
              className="text-white/80 font-bold uppercase mb-8 block text-[10px] tracking-[0.6em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              The Salima Collection
            </motion.span>
            <motion.h1 
              className="text-6xl md:text-8xl font-serif text-white mb-10 leading-none italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            >
              The Art of <br /> Stillness
            </motion.h1>
            
            <motion.div 
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <motion.div 
                className="w-[1px] h-16 bg-white/30"
                initial={{ height: 0 }}
                animate={{ height: 64 }}
                transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
              />
              <Link href="/accommodation">
                <motion.button 
                  className="text-white text-xs font-bold uppercase tracking-[0.3em] hover:text-stone-300 transition-colors flex items-center gap-3"
                  whileHover={{ gap: "1.25rem", scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Enter The Lodge 
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section - Editorial Layout */}
      <section className="py-32 lg:py-40 bg-[#FDFCFB]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            
            <ScrollReveal className="w-full lg:w-5/12 pt-8" direction="left" delay={0.2}>
              <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-stone-900 leading-tight">
                Where Malawian warmth meets <span className="italic text-stone-500">curated design.</span>
              </h2>
              <p className="text-stone-500 text-lg leading-relaxed font-light mb-12">
                Ubunthu Lodge is not merely a destination; it is a meticulously crafted experience. Nestled away from the energetic shores of Salima, we offer a sanctuary of stunning pool and architectural grace, designed for those who seek the luxury of privacy.
              </p>
              
              <motion.a 
                href="/about" 
                className="inline-flex items-center text-xs font-bold uppercase tracking-[0.3em] text-stone-900 border-b border-stone-200 pb-2 hover:border-stone-900 transition-all"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Read Our Story
              </motion.a>
            </ScrollReveal>
            
            <ScrollReveal className="w-full lg:w-7/12" direction="right" delay={0.4}>
              <div className="relative aspect-[4/3] bg-stone-100 p-2">
                <motion.div 
                  className="absolute inset-0 border border-stone-100 transform translate-x-4 translate-y-4 -z-10"
                  whileHover={{ translateX: 16, translateY: 16 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                />
                <img 
                  src="/pool.jpg" 
                  alt="Ubunthu Lodge Architecture" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Pillars of Service - Minimalist Grid */}
      <section className="border-y border-stone-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100">
            
            <ScrollReveal direction="up" delay={0.1}>
              <motion.div 
                className="py-16 md:pr-12 group hover:bg-stone-50 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Star strokeWidth={1} className="w-6 h-6 text-stone-400 mb-6" />
                </motion.div>
                <h3 className="font-serif text-xl text-stone-800 mb-4 group-hover:text-stone-600 transition-colors">Culinary Excellence</h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  Seasonal menus curated by our executive chef, utilizing local Salima produce to create international flavors.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <motion.div 
                className="py-16 md:px-12 group hover:bg-stone-50 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Shield strokeWidth={1} className="w-6 h-6 text-stone-400 mb-6" />
                </motion.div>
                <h3 className="font-serif text-xl text-stone-800 mb-4 group-hover:text-stone-600 transition-colors">Unrivaled Privacy</h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  Exclusive access to the lodge grounds ensures your stay remains undisturbed by the outside world.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <motion.div 
                className="py-16 md:pl-12 group hover:bg-stone-50 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Flower2 strokeWidth={1} className="w-6 h-6 text-stone-400 mb-6" />
                </motion.div>
                <h3 className="font-serif text-xl text-stone-800 mb-4 group-hover:text-stone-600 transition-colors">Botanical Grounds</h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  Four acres of indigenous flora provide a natural sound barrier and a visual feast for the weary traveler.
                </p>
              </motion.div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Accommodation Teaser - Gallery Style */}
      <section className="py-32 bg-stone-900 text-stone-100">
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <motion.h2 
                className="text-5xl font-serif italic"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              >
                The Residence
              </motion.h2>
              <Link href="/accommodation">
                <motion.a 
                  className="hidden md:flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-bold text-stone-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  View All Suites <ArrowRight className="w-3 h-3" />
                </motion.a>
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { title: "The Presidential", img: "/standardroom.jpg" },
              { title: "Pool Terrace", img: "/kitchenfront.jpg" },
              { title: "Atrium Suite", img: "/pool.jpg" }
            ].map((room, i) => (
              <ScrollReveal key={i} direction="up" delay={0.3 + i * 0.15}>
                <Link href="/accommodation">
                  <motion.div 
                    className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <img 
                      src={room.img} 
                      alt={room.title} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-all duration-500 group-hover:from-black/95" />
                    <motion.div 
                      className="absolute bottom-10 left-10"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">Suite 0{i+1}</span>
                      <h3 className="text-2xl font-serif text-white italic group-hover:text-stone-200 transition-colors">{room.title}</h3>
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <motion.button 
                        className="bg-white/90 backdrop-blur-sm text-stone-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Book Suite
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="mt-12 text-center md:hidden">
              <Link href="/accommodation">
                <motion.button 
                  className="text-xs tracking-[0.3em] uppercase font-bold text-white border-b border-stone-700 pb-2 hover:border-stone-400 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  View All Suites
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pool & Bar Interactive CTA */}
      <section className="py-32 bg-gradient-to-br from-stone-100 to-stone-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Exclusive Amenities</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-stone-900 leading-tight italic">
              Poolside <span className="text-stone-500">Perfection</span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed font-light mb-12 max-w-2xl mx-auto">
              Immerse yourself in our stunning infinity pool while enjoying artisanal cocktails from our elegant poolside bar. An exclusive oasis designed for ultimate relaxation and sophisticated leisure.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
              <div className="group relative">
                <div className="absolute inset-0 bg-stone-900 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300" />
                <Link href="/accommodation">
                  <button className="relative bg-stone-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-stone-800 transition-all duration-300 rounded-full group-hover:shadow-2xl">
                    Reserve Pool Access
                  </button>
                </Link>
              </div>
              <div className="group">
                <Link href="/accommodation">
                  <button className="text-stone-700 text-xs font-bold uppercase tracking-[0.3em] border-b-2 border-stone-300 pb-2 hover:border-stone-700 transition-all duration-300 group-hover:text-stone-900">
                    View Pool & Bar Gallery
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-40 bg-[#FDFCFB] text-center px-4 border-t border-stone-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight text-stone-800">
            "Luxury is not a matter of excess, but of the absence of vulgarity."
          </h2>
          <div className="w-12 h-[1px] bg-stone-200 mx-auto mt-12 mb-6" />
          <p className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-bold">Ubunthu Philosophy</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}