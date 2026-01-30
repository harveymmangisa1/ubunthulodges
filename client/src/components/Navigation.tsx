import { Link, useLocation } from "wouter";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();

  // Optimized scroll handler using Framer Motion
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 50;
    if (scrolled !== isScrolled) setIsScrolled(scrolled);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/accommodation", label: "Suites" }, // Renamed for luxury appeal
    { href: "/dining", label: "Dining" },
    { href: "/gallery", label: "Gallery" },
    { href: "/conferences", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-stone-200/50 py-3 shadow-sm" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          
          {/* Logo Area */}
          <Link href="/">
            <motion.div 
              className="flex items-center gap-3 cursor-pointer group z-50 relative"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/logoubunthu.png" 
                alt="Ubunthu Lodge Logo" 
                className={cn(
                  "transition-all duration-500",
                  isScrolled ? "h-10 w-auto" : "h-12 w-auto"
                )}
              />
              <div className={cn(
                "flex flex-col transition-colors duration-300",
                isOpen ? "text-white" : "text-stone-900"
              )}>
                <span className="text-lg font-bold tracking-tighter leading-none">UBUNTHU</span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] font-medium opacity-70">Lodge</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn(
                  "relative text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-stone-500",
                  location === link.href ? "text-stone-900" : "text-stone-600",
                  isScrolled ? "text-stone-900" : "text-white/90 drop-shadow-sm md:text-stone-900" // Handles hero overlap visibility
                )}>
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 right-0 h-[1px] bg-stone-900"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                    />
                  )}
                </a>
              </Link>
            ))}
            
            <div className="w-[1px] h-4 bg-stone-300 mx-2" />

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-stone-900 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors flex items-center gap-2"
            >
              <CalendarCheck className="w-3 h-3" />
              Book Now
            </motion.button>
          </nav>

          {/* Mobile Toggle */}
          <motion.button
            className={cn(
              "lg:hidden p-2 z-50 transition-colors duration-300",
              isOpen ? "text-white" : "text-stone-900"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </header>

      {/* Full Screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-stone-950 text-white flex flex-col justify-center items-center"
          >
             {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-stone-900/40 rounded-full blur-3xl" />
            </div>

            <nav className="flex flex-col items-center space-y-8 relative z-10">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  <Link href={link.href}>
                    <span 
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-4xl md:text-5xl font-serif italic cursor-pointer transition-all duration-300 hover:text-stone-400 block text-center",
                        location === link.href ? "text-white" : "text-stone-500"
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                className="pt-12 flex flex-col items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-12 h-[1px] bg-stone-800" />
                
                <a href="tel:+265995879030" className="flex items-center gap-3 text-sm tracking-widest uppercase hover:text-stone-400 transition-colors">
                  <Phone className="h-4 w-4" />
                  +265 995 87 90 30
                </a>

                <button className="bg-white text-stone-950 w-full px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] mt-4 hover:bg-stone-200 transition-colors">
                  Book Your Stay
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}