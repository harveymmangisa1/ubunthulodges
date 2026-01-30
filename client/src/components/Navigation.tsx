import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/accommodation", label: "Accommodation" },
    { href: "/dining", label: "Dining" },
    { href: "/gallery", label: "Gallery" },
    { href: "/conferences", label: "Conferences" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-border/50 py-3" : "bg-white border-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <motion.img 
                src="/logoubunthu.png" 
                alt="Ubunthu Lodge Logo" 
                className="h-10 w-auto transition-opacity"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col">
                <motion.h1 
                  className="text-xl font-bold tracking-tighter text-primary transition-colors"
                  whileHover={{ letterSpacing: "0.05em" }}
                >
                  UBUNTHU
                </motion.h1>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-secondary font-medium">Lodge & Conference</span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link href={link.href}>
                <span className={cn(
                  "text-sm uppercase tracking-widest font-medium cursor-pointer transition-colors relative pb-1 group",
                  location === link.href 
                    ? "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary" 
                    : "text-muted-foreground hover:text-primary"
                )}>
                  <motion.span
                    className="relative"
                    whileHover={{ letterSpacing: "0.05em" }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                    {location !== link.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          ))}
          <motion.a 
            href="tel:+265999123456" 
            className="ml-4 flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }}>
              <Phone className="h-4 w-4" />
            </motion.div>
            <span className="text-sm font-medium">+265 999 123 456</span>
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link href={link.href}>
                    <motion.span 
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block text-lg font-serif cursor-pointer py-2 transition-colors",
                        location === link.href ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                      )}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                className="pt-4 border-t border-border mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="text-xs uppercase text-muted-foreground mb-2">Reservations</p>
                <motion.a 
                  href="tel:+265999123456" 
                  className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-4 w-4" />
                  +265 999 123 456
                </motion.a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
