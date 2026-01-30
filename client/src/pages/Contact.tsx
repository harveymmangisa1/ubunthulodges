import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

export default function Contact() {
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-stone-900 selection:bg-stone-200">
      <Navigation />
      
      {/* Header - The Arrival */}
      <section className="relative h-[50vh] flex items-center justify-center bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/gate.jpg" 
            className="w-full h-full object-cover" 
            alt="Lodge Entrance"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FDFCFB]" />
        </div>
        <div className="relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-stone-400 font-bold uppercase text-[10px] mb-6 block"
          >
            Personalized Service
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-serif italic text-stone-800"
          >
            The Concierge
          </motion.h1>
        </div>
      </section>

      <div className="container-custom pb-32 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Details - Elegant Directory Style */}
          <motion.div {...reveal} className="lg:col-span-5 space-y-16">
            <div className="bg-white p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.03)] border border-stone-100">
              <h2 className="text-3xl font-serif italic mb-12 text-stone-800">Direct Channels</h2>
              
              <div className="space-y-10">
                <div className="group cursor-default">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin strokeWidth={1} className="w-5 h-5 text-stone-400" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-300 group-hover:text-stone-800 transition-colors">Location</span>
                  </div>
                  <p className="text-stone-500 font-light leading-relaxed pl-9">
                    Off M5 Lakeshore Road, <br />
                    Salima, Malawi — <span className="italic text-stone-400">The Senga Bay Precinct</span>
                  </p>
                </div>

                <div className="group cursor-default">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone strokeWidth={1} className="w-5 h-5 text-stone-400" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-300 group-hover:text-stone-800 transition-colors">Voice</span>
                  </div>
                  <div className="pl-9 space-y-1">
                    <p className="text-stone-500 font-light">+265 999 123 456 <span className="text-[9px] uppercase ml-2 text-stone-300 tracking-tighter">(Reservations)</span></p>
                    <p className="text-stone-500 font-light">+265 888 123 456 <span className="text-[9px] uppercase ml-2 text-stone-300 tracking-tighter">(Direct)</span></p>
                  </div>
                </div>

                <div className="group cursor-default">
                  <div className="flex items-center gap-4 mb-4">
                    <Mail strokeWidth={1} className="w-5 h-5 text-stone-400" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-300 group-hover:text-stone-800 transition-colors">Correspondence</span>
                  </div>
                  <p className="text-stone-500 font-light pl-9 italic">concierge@ubunthulodge.com</p>
                </div>
              </div>
            </div>

            {/* Map - Visual Integration */}
            <div className="relative aspect-video overflow-hidden grayscale opacity-80 hover:opacity-100 transition-all duration-1000 border border-stone-100 shadow-sm">
              <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
               
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.54!2d34.4!3d-13.7!" 
                className="w-full h-full border-0" 
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Inquiry Form - Card Style */}
          <motion.div 
            {...reveal} 
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-12 md:p-16 shadow-[30px_30px_80px_rgba(0,0,0,0.04)] border border-stone-100">
              <div className="mb-12">
                <h2 className="text-4xl font-serif mb-4 text-stone-800">Enquiry Registry</h2>
                <p className="text-stone-400 font-light italic text-sm">Please provide your details for a bespoke proposal.</p>
              </div>
              
              <BookingForm />
              
              <div className="mt-12 pt-12 border-t border-stone-50">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300">Est. Response Time: 1-2 Hours</span>
                  <div className="flex gap-4">
                    <div className="w-1 h-1 bg-stone-200 rounded-full" />
                    <div className="w-1 h-1 bg-stone-200 rounded-full" />
                    <div className="w-1 h-1 bg-stone-800 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}