import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
        <Link href="/">
          <div className="flex flex-col cursor-pointer group">
            <h1 className="text-2xl font-bold tracking-tighter text-primary group-hover:text-primary/80 transition-colors">
              UBUNTHU
            </h1>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-secondary font-medium">Lodge & Conference</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "text-sm uppercase tracking-widest font-medium cursor-pointer transition-colors relative pb-1",
                location === link.href 
                  ? "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary" 
                  : "text-muted-foreground hover:text-primary"
              )}>
                {link.label}
              </span>
            </Link>
          ))}
          <a href="tel:+265999123456" className="ml-4 flex items-center gap-2 text-secondary hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">+265 999 123 456</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl animate-in slide-in-from-top-5 fade-in duration-200">
          <nav className="flex flex-col p-6 space-y-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-lg font-serif cursor-pointer",
                    location === link.href ? "text-primary font-bold" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-4">
              <p className="text-xs uppercase text-muted-foreground mb-2">Reservations</p>
              <a href="tel:+265999123456" className="text-primary font-medium">+265 999 123 456</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
