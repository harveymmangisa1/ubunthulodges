import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { BookingForm } from "@/components/BookingForm";
import { Check, User, Square } from "lucide-react";

export default function Accommodation() {
  const rooms = [
    {
      title: "Executive Suite",
      description: "Our premier accommodation offering unrivaled luxury and space. The Executive Suite features a separate living area, a king-sized four-poster bed, and a private balcony overlooking the manicured gardens.",
      amenities: ["King Size Bed", "Private Balcony", "Separate Living Area", "Work Desk", "55-inch Smart TV", "Mini Bar"],
      size: "65 m²",
      occupancy: "2 Adults",
      // Unsplash: Luxury hotel suite living room
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Deluxe Room",
      description: "Elegant and spacious, the Deluxe Room is designed for comfort and style. Featuring contemporary decor with Malawian accents, it provides a serene environment for relaxation or work.",
      amenities: ["Queen Size Bed", "En-suite Bathroom", "Work Station", "40-inch TV", "Tea & Coffee Maker", "Garden View"],
      size: "45 m²",
      occupancy: "2 Adults",
      // Unsplash: Bright hotel room interior
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Standard Room",
      description: "Perfect for the business traveler, our Standard Rooms offer functionality without compromising on style. Enjoy a restful night's sleep in sophisticated surroundings.",
      amenities: ["Double Bed", "Shower", "Writing Desk", "High-speed Wi-Fi", "Climate Control", "In-room Safe"],
      size: "32 m²",
      occupancy: "2 Adults",
      // Unsplash: Cozy modern bedroom
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Accommodation</h1>
          <p className="text-white/70 max-w-2xl mx-auto">Experience refined comfort in our thoughtfully designed rooms and suites.</p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="space-y-24">
          {rooms.map((room, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm group shadow-lg">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Luxury Living</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">{room.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {room.description}
                </p>
                
                <div className="flex gap-6 mb-8 border-b border-border pb-6">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Square className="w-4 h-4 text-secondary" />
                    {room.size}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <User className="w-4 h-4 text-secondary" />
                    {room.occupancy}
                  </div>
                </div>

                <h4 className="font-serif text-lg mb-4">Room Amenities</h4>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {room.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      {item}
                    </div>
                  ))}
                </div>
                
                <a href="#booking-form">
                  <button className="btn-primary">Book This Room</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form Section */}
      <div id="booking-form" className="bg-muted/30 py-20">
        <div className="container-custom">
          <SectionHeader 
            subtitle="Reservations"
            title="Secure Your Stay"
            description="Ready to experience Ubunthu Lodge? Send us an inquiry and our team will confirm availability."
          />
          <div className="max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
