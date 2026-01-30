import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { RoomGallery } from "@/components/RoomGallery";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Wifi, Wind, Coffee, Maximize, User, ArrowRight } from "lucide-react";

export default function Accommodation() {
  const rooms = [
    {
      title: "Executive Suite",
      subtitle: "Premium • K60,000 Single / K75,000 Double",
      description: "Our Executive Suite is the pinnacle of luxury accommodation. This self-contained suite features premium air conditioning, large-screen TV, private geyser system, and elegant furnishings. Perfect for executives and discerning travelers seeking the ultimate comfort and privacy.",
      amenities: [
        "King Bed", 
        "Air Conditioning", 
        "Smart TV", 
        "Private Geyser", 
        "Mini Bar", 
        "Workspace",
        "En-suite Bathroom",
        "Modern Toilet",
        "Rain Shower",
        "Hot Water System"
      ],
      size: "65 m²",
      occupancy: "2 Adults",
      images: [
        { src: "/standardroom.jpg", alt: "Executive Suite Main View", caption: "Spacious living area with king bed" },
        { src: "/kitchenfront.jpg", alt: "Executive Suite Bathroom", caption: "Modern bathroom with premium fixtures" },
        { src: "/pool.jpg", alt: "Executive Suite Workspace", caption: "Dedicated workspace with city view" },
        { src: "/standardroom.jpg", alt: "Executive Suite Details", caption: "Elegant furnishings and decor" },
        { src: "/kitchenfront.jpg", alt: "Executive Suite Balcony", caption: "Private balcony with panoramic views" }
      ]
    },
    {
      title: "Standard Room",
      subtitle: "Comfort • K50,000 Single / K65,000 Double",
      description: "Our Standard Rooms offer exceptional value with modern amenities. Each self-contained room features efficient air conditioning, entertainment system, and reliable hot water from your private geyser. Ideal for business travelers and tourists seeking comfort and convenience.",
      amenities: [
        "Double/Twin Beds", 
        "Air Conditioning", 
        "Smart TV", 
        "Private Geyser", 
        "Work Desk", 
        "Wi-Fi",
        "En-suite Bathroom",
        "Modern Toilet",
        "Hot Shower",
        "Hot Water System"
      ],
      size: "45 m²",
      occupancy: "2 Adults",
      images: [
        { src: "/kitchenfront.jpg", alt: "Standard Room Comfort", caption: "Comfortable sleeping area with modern decor" },
        { src: "/pool.jpg", alt: "Standard Room Bathroom", caption: "Clean bathroom with shower facilities" },
        { src: "/standardroom.jpg", alt: "Standard Room Workspace", caption: "Functional work area" },
        { src: "/kitchenfront.jpg", alt: "Standard Room Amenities", caption: "Complete with TV and mini bar" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-stone-900 selection:bg-stone-200">
      <Navigation />
      
      {/* Static Editorial Hero */}
      <section className="relative h-[65vh] w-full">
        <div 
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/standardroom.jpg')" }}
>

          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
        <div className="relative h-full container-custom flex flex-col justify-center items-center text-center z-10">
          <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.4em] mb-6">The Private Collection</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white italic">Sleep in Serenity</h1>
        </div>
      </section>

      {/* The Collection List */}
      <div className="container-custom py-32">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Room Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Luxury <span className="italic text-stone-500">Accommodation</span></h2>
            <p className="text-stone-500 text-lg max-w-3xl mx-auto leading-relaxed font-light">
              Experience our premium self-contained rooms featuring modern amenities, private geysers, and elegant furnishings designed for discerning travelers
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {rooms.map((room, index) => (
            <div key={index} className="group">
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>
                
                {/* Image Side - Room Gallery */}
                <div className="w-full lg:w-1/2">
                  <RoomGallery 
                    images={room.images} 
                    title={room.title}
                  />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-stone-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                    {room.subtitle}
                  </span>
                  <h2 className="text-4xl font-serif text-stone-900 mb-8">{room.title}</h2>
                  
                  {/* Technical Specs - Fine Lines */}
                  <div className="flex items-center gap-8 border-y border-stone-200 py-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Maximize strokeWidth={1} className="w-4 h-4 text-stone-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-stone-600">{room.size}</span>
                    </div>
                    <div className="w-[1px] h-4 bg-stone-200" />
                    <div className="flex items-center gap-3">
                      <User strokeWidth={1} className="w-4 h-4 text-stone-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-stone-600">{room.occupancy}</span>
                    </div>
                  </div>

                  <p className="text-stone-500 leading-relaxed font-light mb-10 text-lg">
                    {room.description}
                  </p>
                  
                  <div className="mb-10">
                    <ScrollReveal direction="up" delay={0.4}>
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest block mb-4">Luxury Features</span>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                        {room.amenities.map((item, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-2 h-2 bg-stone-400 rounded-full" />
                            <span className="text-sm font-medium text-stone-700">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>

                  <a href="#booking-form" className="inline-flex items-center self-start text-xs font-bold uppercase tracking-[0.3em] text-stone-900 border-b border-stone-300 pb-2 hover:border-stone-900 hover:text-stone-600 transition-all duration-300">
                    Check Availability <ArrowRight className="ml-4 w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form - Stationary Style */}
      <div id="booking-form" className="bg-stone-50 border-t border-stone-100 py-32">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-serif text-stone-800 mb-6">Reservation Enquiry</h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8">
                To maintain the privacy and exclusivity of our guests, we process all reservations personally. Please detail your requirements, and our concierge will secure your allocation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-stone-600">
                  <Wifi strokeWidth={1} className="w-4 h-4" />
                  <span>High-Speed Fiber Included</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-stone-600">
                  <Wind strokeWidth={1} className="w-4 h-4" />
                  <span>Climate Controlled Suites</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-stone-600">
                  <Coffee strokeWidth={1} className="w-4 h-4" />
                  <span>Breakfast Service Included</span>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 bg-white p-10 border border-stone-100 shadow-sm">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}