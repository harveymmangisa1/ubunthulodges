import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter text-white">UBUNTHU</h3>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-secondary font-medium">Lodge & Conference</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Experience the pinnacle of Malawian hospitality. A sanctuary of luxury, sophistication, and refined comfort in the heart of Salima.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/accommodation"><span className="hover:text-secondary transition-colors cursor-pointer">Luxury Rooms</span></Link></li>
              <li><Link href="/dining"><span className="hover:text-secondary transition-colors cursor-pointer">Fine Dining</span></Link></li>
              <li><Link href="/conferences"><span className="hover:text-secondary transition-colors cursor-pointer">Events & Meetings</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-secondary transition-colors cursor-pointer">Contact Us</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Salima, Malawi<br />Off M5 Lakeshore Road</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+265999123456" className="hover:text-white transition-colors">+265 999 123 456</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:info@ubunthulodge.com" className="hover:text-white transition-colors">info@ubunthulodge.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Stay Updated</h4>
            <p className="text-white/70 text-sm mb-4">Subscribe for exclusive offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-secondary text-white"
              />
              <button className="bg-secondary text-white px-4 py-2 hover:bg-secondary/80 transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Ubunthu Lodge. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
