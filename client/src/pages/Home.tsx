import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Star, Shield, Flower2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-stone-900 selection:bg-stone-200">
      <Navigation />
      
      {/* Hero Section - Static & Majestic */}
      <section className="relative h-screen w-full overflow-hidden bg-stone-950">
        <div className="absolute inset-0">
          <img 
            src="/hero.jpg"
            alt="Ubunthu Lodge Aerial"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-transparent to-stone-950/60" />
        </div>

        <div className="relative z-10 container-custom h-full flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl">
            <span className="text-white/80 font-bold uppercase mb-8 block text-[10px] tracking-[0.6em]">
              The Salima Collection
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-10 leading-none italic">
              The Art of <br /> Stillness
            </h1>
            
            <div className="flex flex-col items-center gap-8">
              <div className="w-[1px] h-16 bg-white/30" />
              <Link href="/accommodation">
                <button className="text-white text-xs font-bold uppercase tracking-[0.3em] hover:text-stone-300 transition-colors flex items-center gap-3">
                  Enter The Lodge <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Editorial Layout */}
      <section className="py-32 lg:py-40 bg-[#FDFCFB]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            
            <div className="w-full lg:w-5/12 pt-8">
              <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-stone-900 leading-tight">
                Where Malawian warmth meets <span className="italic text-stone-500">curated design.</span>
              </h2>
              <p className="text-stone-500 text-lg leading-relaxed font-light mb-12">
                Ubunthu Lodge is not merely a destination; it is a meticulously crafted experience. Nestled away from the energetic shores of Salima, we offer a sanctuary of manicured gardens and architectural grace, designed for those who seek the luxury of privacy.
              </p>
              
              <Link href="/about">
                <a className="inline-flex items-center text-xs font-bold uppercase tracking-[0.3em] text-stone-900 border-b border-stone-200 pb-2 hover:border-stone-900 transition-all">
                  Read Our Story
                </a>
              </Link>
            </div>
            
            <div className="w-full lg:w-7/12">
              <div className="relative aspect-[4/3] bg-stone-100 p-2">
                <div className="absolute inset-0 border border-stone-100 transform translate-x-4 translate-y-4 -z-10" />
                <img 
                  src="/pool.jpg" 
                  alt="Ubunthu Lodge Architecture" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pillars of Service - Minimalist Grid */}
      <section className="border-y border-stone-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100">
            
            <div className="py-16 md:pr-12 group hover:bg-stone-50 transition-colors duration-500">
              <Star strokeWidth={1} className="w-6 h-6 text-stone-400 mb-6" />
              <h3 className="font-serif text-xl text-stone-800 mb-4">Culinary Excellence</h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed">
                Seasonal menus curated by our executive chef, utilizing local Salima produce to create international flavors.
              </p>
            </div>

            <div className="py-16 md:px-12 group hover:bg-stone-50 transition-colors duration-500">
              <Shield strokeWidth={1} className="w-6 h-6 text-stone-400 mb-6" />
              <h3 className="font-serif text-xl text-stone-800 mb-4">Unrivaled Privacy</h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed">
                Exclusive access to the lodge grounds ensures your stay remains undisturbed by the outside world.
              </p>
            </div>

            <div className="py-16 md:pl-12 group hover:bg-stone-50 transition-colors duration-500">
              <Flower2 strokeWidth={1} className="w-6 h-6 text-stone-400 mb-6" />
              <h3 className="font-serif text-xl text-stone-800 mb-4">Botanical Grounds</h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed">
                Four acres of indigenous flora provide a natural sound barrier and a visual feast for the weary traveler.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Accommodation Teaser - Gallery Style */}
      <section className="py-32 bg-stone-900 text-stone-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="text-5xl font-serif italic">The Residence</h2>
            <Link href="/accommodation">
              <a className="hidden md:flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-bold text-stone-400 hover:text-white transition-colors">
                View All Suites <ArrowRight className="w-3 h-3" />
              </a>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { title: "The Presidential", img: "/standardroom.jpg" },
              { title: "Garden Terrace", img: "/kitchenfront.jpg" },
              { title: "Atrium Suite", img: "/pool.jpg" }
            ].map((room, i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                <img 
                  src={room.img} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 block">Suite 0{i+1}</span>
                  <h3 className="text-2xl font-serif text-white italic">{room.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/accommodation">
              <button className="text-xs tracking-[0.3em] uppercase font-bold text-white border-b border-stone-700 pb-2">
                View All Suites
              </button>
            </Link>
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