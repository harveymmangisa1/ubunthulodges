import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Utensils, Wine, Clock } from "lucide-react";

export default function Dining() {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-stone-900">
      <Navigation />
      
      {/* Hero - Cinematic Scale */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/kitchenfront.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </motion.div>
        
        <div className="relative z-10 text-center container-custom">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1 }}
            className="text-white/70 font-light uppercase mb-6 block text-xs"
          >
            The Gastronomic Residence
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 italic">The Harvest Table</h1>
          <div className="w-12 h-[1px] bg-white/40 mx-auto" />
        </div>
      </section>

      {/* Philosophy & Schedule - Minimalist Editorial */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h2 {...reveal} className="text-3xl md:text-5xl font-serif leading-tight text-stone-800 mb-8">
              A celebration of provenance, <br /> harvested from the soil of Salima.
            </motion.h2>
            <motion.p {...reveal} className="text-stone-500 text-lg font-light italic leading-relaxed">
              Our kitchen operates on the rhythm of the seasons. We collaborate with local artisans and 
              fishermen to ensure every plate tells a story of Malawian terroir.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-stone-100 pt-16">
            {[
              { title: "The Kitchen", desc: "Chef-led seasonal tasting menus.", icon: <Utensils strokeWidth={1} /> },
              { title: "The Cellar", desc: "Rare vintages and artisanal spirits.", icon: <Wine strokeWidth={1} /> },
              { title: "The Hours", desc: "B: 06:30 • L: 12:00 • D: 18:30", icon: <Clock strokeWidth={1} /> }
            ].map((item, i) => (
              <motion.div key={i} {...reveal} transition={{ delay: i * 0.1 }} className="text-center group">
                <div className="text-stone-300 mb-6 flex justify-center group-hover:text-stone-900 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-3">{item.title}</h3>
                <p className="text-stone-500 font-light italic text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Menu - Asymmetrical Luxury Grid */}
      <section className="pb-32 bg-[#FDFCFB]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-1/2 grid grid-cols-12 grid-rows-6 h-[600px] gap-4">
              <motion.div {...reveal} className="col-span-7 row-span-4 overflow-hidden shadow-xl">
                <img src="/kitchenfront.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              <motion.div {...reveal} transition={{ delay: 0.2 }} className="col-span-5 row-span-3 col-start-8 row-start-2 overflow-hidden shadow-xl">
                <img src="/pool.jpg" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div {...reveal} transition={{ delay: 0.4 }} className="col-span-5 row-span-2 col-start-2 row-start-5 overflow-hidden shadow-xl">
                <img src="/gate.jpg" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="max-w-md mx-auto">
                <span className="text-stone-400 text-[10px] uppercase tracking-[0.5em] block mb-6">Signature Selection</span>
                <h3 className="text-4xl font-serif italic mb-12 border-b border-stone-100 pb-8 text-stone-800">The Evening Menu</h3>
                
                <div className="space-y-12">
                  {[
                    { name: "Chambo Fillet", price: "24", desc: "Pan-seared Lake Malawi Chambo, lemon butter, wild greens." },
                    { name: "Beef Tenderloin", price: "32", desc: "Aged fillet, mushroom reduction, silk potato fondant." },
                    { name: "Saffron Risotto", price: "20", desc: "Hand-harvested vegetables, parmesan reggiano, gold oil." }
                  ].map((dish, i) => (
                    <motion.div key={i} {...reveal} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-lg font-serif group-hover:italic transition-all duration-300">{dish.name}</h4>
                        <div className="flex-grow mx-4 border-b border-dotted border-stone-200" />
                        <span className="text-sm font-light text-stone-400">{dish.price}</span>
                      </div>
                      <p className="text-stone-400 text-xs font-light italic tracking-wide">{dish.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 flex items-center gap-6">
                  <button className="text-xs font-bold uppercase tracking-[0.3em] text-stone-900 border-b border-stone-900 pb-2 hover:text-stone-400 hover:border-stone-400 transition-all">
                    Download Full Menu
                  </button>
                  <div className="w-12 h-[1px] bg-stone-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}