import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "wouter";
import { ArrowRight, Star, Shield, Car, Calendar, Users, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { assets } from "@/lib/assets";

// --- Sub-components for cleaner code ---

const BookingBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > 600);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-stone-950 text-white border-t border-stone-800 p-4 md:py-6"
        >
          <div className="container-custom flex justify-between items-center">
            <div className="hidden md:flex gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-stone-400">Check In</span>
                <span className="font-serif italic text-lg">Select Date</span>
              </div>
              <div className="w-[1px] h-10 bg-stone-800" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-stone-400">Guests</span>
                <span className="font-serif italic text-lg">2 Adults</span>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <span className="md:hidden font-serif italic">Book Your Stay</span>
              <Link href="/contact">
                <button className="bg-white text-stone-950 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors">
                  Check Availability
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  // Parallax effect for Hero Text
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-stone-900 selection:bg-stone-900 selection:text-white overflow-x-hidden">
      <Navigation />
      <BookingBar />

      {/* Hero Section - Cinematic Parallax */}
      <section className="relative h-screen w-full overflow-hidden bg-stone-950">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <img
            src={assets.hero}
            alt="Ubunthu Lodge Aerial View"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>

        <div className="relative z-10 container-custom h-full flex flex-col justify-center items-center text-center">
          <motion.div style={{ y: y1, opacity }} className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-white/50" />
              <span className="text-white/90 font-bold uppercase text-[11px] tracking-[0.6em]">The Salima Collection</span>
              <div className="h-[1px] w-12 bg-white/50" />
            </motion.div>

            <motion.h1
              className="text-7xl md:text-9xl font-serif text-white mb-12 leading-[0.9] italic tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            >
              The Art of <br /> <span className="not-italic font-light tracking-wide">Stillness</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <div className="animate-bounce mt-12">
                <ArrowRight className="text-white w-6 h-6 rotate-90 mx-auto opacity-50" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section - Overlapping Layout */}
      <section className="py-24 lg:py-40 bg-[#FDFCFB]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">

            <ScrollReveal className="w-full lg:w-5/12 order-2 lg:order-1" direction="up">
              <div className="relative pl-8 border-l border-stone-200">
                <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Our Heritage</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-stone-900 leading-[1.1]">
                  Where Malawian warmth meets <span className="italic text-stone-500">curated design.</span>
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed font-light mb-12">
                  Ubunthu Lodge is not merely a destination; it is a meticulously crafted experience. Nestled away from the energetic shores of Salima, we offer a sanctuary of architectural grace.
                </p>

                <Link href="/about">
                  <a className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-stone-900">
                    Read Our Story
                    <span className="block w-8 h-[1px] bg-stone-900 group-hover:w-16 transition-all duration-300" />
                  </a>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal className="w-full lg:w-7/12 order-1 lg:order-2" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden">

                  <img
                    src={assets.gallery[0]}
                    alt="Ubunthu Lodge Architecture"
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -left-10 hidden md:flex items-center justify-center w-40 h-40 bg-white rounded-full p-2 animate-[spin_10s_linear_infinite]">
                  <svg viewBox="0 0 100 100" width="100" height="100">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text fontSize="11" fill="#1c1917" letterSpacing="2px">
                      <textPath xlinkHref="#circlePath">
                        EST. 2024 • UBUNTHU LODGE •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Pillars of Service - Elegant Interaction */}
      <section className="border-t border-stone-200 bg-stone-50/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            {[
              { icon: Star, title: "Culinary Excellence", desc: "Seasonal menus curated by our executive chef." },
              { icon: Shield, title: "Unrivaled Privacy", desc: "Exclusive access ensuring an undisturbed stay." },
              { icon: Car, title: "Premium Facilities", desc: "Modern gym, infinity pool, and conference halls." }
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="py-20 px-8 group hover:bg-white transition-colors duration-500 cursor-default">
                  <item.icon strokeWidth={1} className="w-8 h-8 text-stone-400 mb-8 group-hover:text-stone-900 group-hover:scale-110 transition-all duration-500" />
                  <h3 className="font-serif text-2xl text-stone-800 mb-4">{item.title}</h3>
                  <p className="text-sm text-stone-500 font-light leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation - Horizontal Scroll Snap */}
      <section className="py-32 bg-stone-900 text-stone-100 overflow-hidden">
        <div className="container-custom mb-16 flex justify-between items-end">
          <div>
            <span className="text-stone-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">The Residence</span>
            <h2 className="text-5xl font-serif italic">Rest in <span className="text-stone-500">Luxury</span></h2>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="p-4 border border-stone-700 rounded-full hover:bg-stone-800 transition"><ArrowRight className="w-4 h-4 rotate-180" /></button>
            <button className="p-4 border border-stone-700 rounded-full hover:bg-stone-800 transition"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-[5vw] pb-12 scrollbar-hide">
          {[
            { title: "Executive Suite", img: assets.gallery[2], price: "From K60,000" },
            { title: "Standard Room", img: assets.gallery[3], price: "From K50,000" }
          ].map((room, i) => (
            <motion.div
              key={i}
              className="snap-center shrink-0 w-[85vw] md:w-[40vw] relative aspect-[3/4] md:aspect-[4/3] group cursor-pointer"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <img src={room.img} alt={room.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end border-t border-white/20 pt-6">
                  <div>
                    <h3 className="text-3xl font-serif italic mb-2">{room.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-stone-400">{room.price}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities - Minimalist Grid */}
      <section className="py-32 bg-stone-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Amenities</span>
              <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-8 leading-none">Designed for <br /><span className="italic text-stone-500">Business & Leisure</span></h2>
              <p className="text-stone-500 font-light text-lg mb-8 max-w-md">Our facilities are crafted to provide a seamless transition between work and relaxation.</p>
              <Link href="/facilities">
                <a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-stone-900 border-b border-stone-300 pb-2 hover:border-stone-900 transition-colors">
                  Explore All Amenities
                </a>
              </Link>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-px bg-stone-900 border border-stone-900">
              {[
                { icon: "Gym", title: "Fitness Center", img: assets.gallery[5] },
                { icon: "Pool", title: "Pool", img: assets.poolNight[0] },
                { icon: "Conf", title: "Conference", img: assets.gallery[10] },
                { icon: "Bar", title: " Bar", img: assets.bar[0] }
              ].map((fac, i) => (
                <div key={i} className="relative aspect-square flex flex-col justify-between p-10 group overflow-hidden">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${fac.img})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-stone-900/60 group-hover:bg-stone-900/40 transition-colors duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">0{i + 1}</span>
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-serif text-2xl text-white">{fac.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-40 bg-[#FDFCFB] text-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif italic leading-tight text-stone-900 mb-12">
            "Luxury is the absence of vulgarity."
          </h2>
          <Link href="/accommodation">
            <button className="bg-stone-900 text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-stone-800 hover:shadow-2xl hover:shadow-stone-900/20 transition-all duration-300 transform hover:-translate-y-1">
              Begin Your Journey
            </button>
          </Link>
        </div>
        {/* Background Texture/Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>

      <Footer />
    </div>
  );
}