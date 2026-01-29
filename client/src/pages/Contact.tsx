import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-white/70 max-w-2xl mx-auto">We are here to assist you with your booking and answer any questions.</p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-primary mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Off M5 Lakeshore Road<br />
                    Salima, Malawi
                  </p>
                  <p className="text-sm text-secondary mt-2">15km from Salima Town Center</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground">Reservations: +265 999 123 456</p>
                  <p className="text-muted-foreground">Reception: +265 888 123 456</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">info@ubunthulodge.com</p>
                  <p className="text-muted-foreground">events@ubunthulodge.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Reception Hours</h4>
                  <p className="text-muted-foreground">24 Hours / 7 Days a week</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-200 rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                <span className="text-muted-foreground font-medium">Map Integration Placeholder</span>
              </div>
              {/* In a real app, embed Google Maps iframe here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6766024623126!2d34.4267!3d-13.7804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ2JzQ5LjQiUyAzNMKwMjUnMzYuMSJF!5e0!3m2!1sen!2smw!4v1620000000000!5m2!1sen!2smw" 
                className="w-full h-full border-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div>
            <BookingForm />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
