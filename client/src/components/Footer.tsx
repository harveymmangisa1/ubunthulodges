import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] text-white pt-24 pb-12 overflow-hidden">
      <div className="container-custom">
        {/* Top Section: Brand & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-4xl font-serif tracking-tight italic">Ubunthu</h3>
              <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-bold block mt-1">
                Lodge & Conference Center
              </span>
            </motion.div>
            <p className="text-stone-400 text-sm leading-relaxed font-light italic">
              "Experience the pinnacle of Malawian hospitality. A sanctuary of luxury, sophistication, and refined comfort in the heart of Salima."
            </p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[400px]">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 mb-6">
              Mailing List
            </h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-transparent border-b border-stone-800 w-full py-4 text-xs tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-stone-700 uppercase font-medium"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[9px] text-stone-600 mt-4 tracking-widest uppercase">
              Be the first to know about seasonal retreats.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-y border-stone-900 py-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-200">
              The Estate
            </h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm font-light text-stone-400">
              <li><Link href="/accommodation" className="hover:text-white transition-colors">Suites</Link></li>
              <li><Link href="/dining" className="hover:text-white transition-colors">Cuisine</Link></li>
              <li><Link href="/conferences" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-200">
              Reach Us
            </h4>
            <div className="space-y-4 text-sm font-light text-stone-400">
              <div className="flex gap-4">
                <MapPin className="w-4 h-4 text-stone-600 shrink-0" />
                <p>
                  Salima, Malawi <br />
                  <span className="text-[10px] text-stone-600 uppercase tracking-tighter">
                    Off M5 Lakeshore Road
                  </span>
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-4 h-4 text-stone-600 shrink-0" />
                <a href="tel:+265995879030" className="hover:text-white">
                  +265 995 87 90 30
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-4 h-4 text-stone-600 shrink-0" />
                <a href="mailto:info@ubunthulodge.com" className="hover:text-white">
                  hello@ubunthulodge.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6 lg:text-right">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-200">
              Follow Our Journey
            </h4>
            <div className="flex gap-6 lg:justify-end">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-stone-600 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-[10px] text-stone-700 uppercase tracking-[0.2em] mt-8">
              #ExperienceUbunthu
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-stone-700">
            &copy; {currentYear} Ubunthu Lodge. Powered by{" "}
            <a
              href="https://octet-systems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-white font-bold"
            >
              Octet Systems
            </a>
          </p>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-stone-600">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div> {/* ✅ FIX: closes container-custom */}
    </footer>
  );
}
