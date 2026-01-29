import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRight, Wifi, Coffee, Users, Map } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        {/* Unsplash: Luxury hotel lobby dark modern interior */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 container-custom h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block text-sm">Welcome to Ubunthu Lodge</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
              Refined Luxury in the <br /> Heart of Salima
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Experience the perfect blend of Malawian warmth and sophisticated comfort. A sanctuary for business and leisure travelers seeking tranquility away from the shore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/accommodation">
                <button className="btn-primary">View Rooms</button>
              </Link>
              <Link href="/contact">
                <button className="bg-transparent border border-white text-white px-8 py-3 rounded-none font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader 
                subtitle="About Us"
                title="A Sanctuary of Elegance"
                description="Nestled in the quiet, verdant landscapes of Salima, Ubunthu Lodge offers a sophisticated retreat designed for the discerning traveler. Far from the crowds, we focus on delivering impeccable service, exquisite dining, and world-class conference facilities in a serene garden setting."
                centered={false}
              />
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg">High-Speed Wi-Fi</h4>
                  <p className="text-sm text-muted-foreground">Stay connected with fiber-optic internet throughout the property.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg">Premium Dining</h4>
                  <p className="text-sm text-muted-foreground">Culinary excellence featuring local and international cuisine.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg">Conference Halls</h4>
                  <p className="text-sm text-muted-foreground">State-of-the-art facilities for up to 200 delegates.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Map className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg">Lush Gardens</h4>
                  <p className="text-sm text-muted-foreground">Manicured landscapes perfect for relaxation and reflection.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Unsplash: Modern architecture building with greenery */}
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                  alt="Ubunthu Lodge Exterior" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/10 -z-0 hidden md:block" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/5 -z-0 hidden md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader 
            subtitle="Accommodation"
            title="Rooms & Suites"
            description="Designed with a harmonious blend of contemporary luxury and African aesthetics, our rooms offer the ultimate retreat."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Room 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="luxury-card group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* Unsplash: Elegant hotel bedroom */}
                <img 
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop" 
                  alt="Executive Suite" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-widest uppercase text-primary">
                  From $150
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl mb-2">Executive Suite</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">Spacious living area, king-sized bed, and private balcony overlooking the gardens.</p>
                <Link href="/accommodation">
                  <span className="inline-flex items-center text-secondary font-medium text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Room 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="luxury-card group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* Unsplash: Modern bedroom interior */}
                <img 
                  src="https://images.unsplash.com/photo-1590490360182-f33efe80a713?q=80&w=2070&auto=format&fit=crop" 
                  alt="Deluxe Room" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-widest uppercase text-primary">
                  From $100
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl mb-2">Deluxe Room</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">Contemporary design with work desk, plush bedding, and modern amenities.</p>
                <Link href="/accommodation">
                  <span className="inline-flex items-center text-secondary font-medium text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Room 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="luxury-card group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* Unsplash: Minimalist bedroom */}
                <img 
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Standard Room" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-widest uppercase text-primary">
                  From $80
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl mb-2">Standard Room</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">Comfortable and stylish, perfect for short business stays or solo travelers.</p>
                <Link href="/accommodation">
                  <span className="inline-flex items-center text-secondary font-medium text-sm tracking-widest uppercase hover:text-primary transition-colors cursor-pointer">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Focus */}
      <section className="py-0 flex flex-col md:flex-row">
        {/* Unsplash: Conference room meeting table */}
        <div className="w-full md:w-1/2 h-[500px] md:h-auto relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" 
            alt="Conference Center" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
        <div className="w-full md:w-1/2 bg-primary text-white p-12 lg:p-24 flex flex-col justify-center">
          <span className="uppercase tracking-[0.2em] text-secondary text-xs font-bold mb-4">Corporate Events</span>
          <h2 className="text-4xl lg:text-5xl font-serif mb-6">World-Class Conference Facilities</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From board meetings to large seminars, our conference center is equipped with cutting-edge technology and supported by a dedicated events team to ensure your business function is a resounding success.
          </p>
          <Link href="/conferences">
            <button className="self-start border border-white/30 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all">
              Plan Your Event
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
