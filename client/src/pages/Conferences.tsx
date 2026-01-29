import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Check } from "lucide-react";

export default function Conferences() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Meetings & Events</h1>
          <p className="text-white/70 max-w-2xl mx-auto">The premier destination for corporate events in Salima.</p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <SectionHeader 
              subtitle="Corporate Facilities"
              title="Elevate Your Business"
              description="Ubunthu Lodge provides a professional yet inspiring environment for your business needs. Our conference center is fully air-conditioned and equipped with the latest audio-visual technology. Whether you are hosting a board meeting, a training workshop, or an annual general meeting, our dedicated team will ensure seamless execution."
              centered={false}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "High-speed Fiber Internet",
                "HD Projectors & Screens",
                "Professional Sound System",
                "Dedicated Event Coordinator",
                "Catering Packages",
                "Break-out Rooms",
                "Business Center Services",
                "Backup Power Generator"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             {/* Unsplash: Corporate conference room */}
            <img 
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop" 
              alt="Conference Room" 
              className="w-full h-auto shadow-xl rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg border border-border hidden md:block max-w-xs">
              <p className="font-serif text-primary text-lg mb-1">"The perfect venue for our strategic planning session."</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">— CEO, Malawi Tech</p>
            </div>
          </div>
        </div>

        {/* Venues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-border p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-serif text-primary mb-2">The Grand Hall</h3>
            <p className="text-sm text-muted-foreground mb-4">Our largest venue, perfect for conferences, banquets, and large presentations.</p>
            <div className="space-y-2 text-sm border-t border-border pt-4">
              <div className="flex justify-between">
                <span>Theatre Style:</span>
                <span className="font-bold">200 Pax</span>
              </div>
              <div className="flex justify-between">
                <span>Banquet Style:</span>
                <span className="font-bold">150 Pax</span>
              </div>
              <div className="flex justify-between">
                <span>Classroom Style:</span>
                <span className="font-bold">120 Pax</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-serif text-primary mb-2">Executive Boardroom</h3>
            <p className="text-sm text-muted-foreground mb-4">An intimate, sophisticated space designed for high-level decision making.</p>
            <div className="space-y-2 text-sm border-t border-border pt-4">
              <div className="flex justify-between">
                <span>Boardroom Style:</span>
                <span className="font-bold">16 Pax</span>
              </div>
              <div className="flex justify-between">
                <span>Video Conferencing:</span>
                <span className="font-bold">Yes</span>
              </div>
              <div className="flex justify-between">
                <span>Privacy:</span>
                <span className="font-bold">High</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-serif text-primary mb-2">Garden Pavilion</h3>
            <p className="text-sm text-muted-foreground mb-4">A semi-outdoor venue surrounded by lush gardens, ideal for networking events.</p>
            <div className="space-y-2 text-sm border-t border-border pt-4">
              <div className="flex justify-between">
                <span>Cocktail Style:</span>
                <span className="font-bold">100 Pax</span>
              </div>
              <div className="flex justify-between">
                <span>Banquet Style:</span>
                <span className="font-bold">80 Pax</span>
              </div>
              <div className="flex justify-between">
                <span>Atmosphere:</span>
                <span className="font-bold">Relaxed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary text-white py-16 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-6">Plan Your Event With Us</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">Contact our events team to discuss your requirements and receive a customized proposal.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:events@ubunthulodge.com">
              <button className="bg-secondary text-white hover:bg-white hover:text-primary px-8 py-3 uppercase tracking-widest text-sm font-medium transition-colors w-full sm:w-auto">
                Email Events Team
              </button>
            </a>
            <a href="tel:+265999123456">
              <button className="border border-white text-white hover:bg-white hover:text-primary px-8 py-3 uppercase tracking-widest text-sm font-medium transition-colors w-full sm:w-auto">
                Call Us Now
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
