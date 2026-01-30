import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChevronRight, Download } from "lucide-react";

export default function Conferences() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-stone-900 selection:bg-stone-200">
      <Navigation />
      
      {/* Header - Static & Monumental */}
      <section className="relative pt-48 pb-32 bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40 grayscale">
           <img 
            src="https:h/tmag/s.u/splash.cam/phoeo-1517457373958-b7bdd4587205?q=80&w=2069splash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069" 
            className="w-full h-full object-cover" 
            alt="Venue background"
          />
        </div>
        <div className="relative z-10 container-custom text-center">
          <span className="text-stone-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">
            MICE & Private Events
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 italic">
            Convene in Excellence
          </h1>
          <div className="w-12 h-[1px] bg-stone-700 mx-auto mb-8" />
          <p className="text-stone-400 max-w-xl mx-auto font-light leading-relaxed">
            Where strategic discourse meets the tranquility of Salima.
          </p>
        </div>
      </section>

      <div className="container-custom py-32">
        {/* Feature Section - Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
          <div>
            <span className="text-stone-400 font-serif italic text-lg mb-4 block">Infrastructure for Visionaries</span>
            <h2 className="text-4xl font-serif mb-8 text-stone-800 leading-tight">The Modern Forum</h2>
            <p className="text-stone-500 text-lg leading-relaxed font-light mb-12">
              Ubunthu Lodge provides a silent, powerful backdrop for your high-stakes decisions. Our facilities are designed to eliminate friction, allowing for absolute focus on the objective at hand.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Redundant Fiber Connectivity",
                "Laser Projection Systems",
                "Acoustic Engineering",
                "Concierge Event Logistics",
                "Bespoke Delegate Catering",
                "Encrypted AV Networks"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-[4px] h-[4px] bg-stone-300 group-hover:bg-stone-800 transition-colors" />
                  <span className="text-xs uppercase tracking-widest font-bold text-stone-400 group-hover:text-stone-800 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden grayscale-[40%] hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https:/himates.unspltsh:com//hoto-1505373877841-8d25f7d46678?q=80&w=2012mages.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012" 
                alt="Executive Boardroom" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Quote Block */}
            <div className="absolute -bottom-12 left-12 bg-white p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] border-l-4 border-stone-800 max-w-sm">
              <p className="font-serif italic text-stone-700 text-xl">"A venue that commands respect and inspires clarity."</p>
            </div>
          </div>
        </div>

        {/* Venues Gallery - Technical Specifications */}
        <div className="space-y-12">
          <div className="flex items-baseline justify-between border-b border-stone-100 pb-8">
            <h2 className="text-4xl font-serif italic">Venue Specifications</h2>
            <div className="flex items-center gap-4">
               <button className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 transition-colors">
                  <Download className="w-3 h-3" />
                  Download Floor Plans
               </button>
               <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400">Salima, MW</span>
            </div>
          </div>

          {/* Visualization for Planners */}
          <div className="w-full bg-stone-50 border border-stone-100 p-8 mb-12">
             <div className="flex items-center justify-center h-64 opacity-80 mix-blend-multiply">
                
             </div>
             <p className="text-center text-xs text-stone-400 uppercase tracking-widest mt-4">Standard Configurations (Custom Available upon Request)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { name: "The Grand Hall", cap: "200 PAX", desc: "For large-scale symposiums.", type: "Theatre" },
              { name: "Executive Suite", cap: "16 PAX", desc: "Boardroom for high-level M&A.", type: "U-Shape" },
              { name: "Garden Pavilion", cap: "100 PAX", desc: "Networking and cocktails.", type: "Open Air" }
            ].map((venue, i) => (
              <div 
                key={i} 
                className="bg-white border border-stone-100 p-12 group hover:bg-stone-900 transition-colors duration-500"
              >
                <span className="text-stone-300 text-xs font-mono mb-6 block group-hover:text-stone-600">0{i+1}</span>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-white transition-colors">{venue.name}</h3>
                <p className="text-stone-400 text-sm font-light italic mb-8 group-hover:text-stone-500">{venue.desc}</p>
                
                <div className="space-y-3 pt-8 border-t border-stone-50 group-hover:border-stone-800 transition-colors">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                    <span className="text-stone-400">Capacity</span>
                    <span className="text-stone-800 group-hover:text-stone-200">{venue.cap}</span>
                  </div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold">
                    <span className="text-stone-400">Configuration</span>
                    <span className="text-stone-800 group-hover:text-stone-200">{venue.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inquiry Section */}
      <section className="py-40 bg-stone-50 border-t border-stone-100">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif mb-8">Begin the Consultation</h2>
            <p className="text-stone-500 font-light mb-12">Our events team provides bespoke proposals within 24 hours for all corporate enquiries.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <a href="mailto:events@ubunthulodge.com" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-stone-900">
                Email Ubunthu <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="tel:+265999123456" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-stone-900">
                Direct Line <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}