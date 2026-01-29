import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Utensils, Wine, Clock } from "lucide-react";

export default function Dining() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Unsplash: Fine dining restaurant interior dark moody */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center container-custom">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Culinary Excellence</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">The Harvest Table</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            A celebration of local flavors and international techniques.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-primary mb-6">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Exquisite Cuisine</h3>
              <p className="text-muted-foreground text-sm">Seasonally inspired menus crafted by our executive chefs using locally sourced ingredients.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-primary mb-6">
                <Wine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">Curated Cellar</h3>
              <p className="text-muted-foreground text-sm">An extensive selection of international wines and premium spirits to complement your meal.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-primary mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif mb-3">All Day Dining</h3>
              <p className="text-muted-foreground text-sm">Breakfast: 06:30 - 10:00<br/>Lunch: 12:00 - 14:30<br/>Dinner: 18:30 - 22:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section className="bg-muted/30 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Unsplash: Gourmet plated food */}
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                  alt="Plated Dish" 
                  className="w-full aspect-square object-cover rounded-sm"
                />
                {/* Unsplash: Chef plating food */}
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                  alt="Chef Preparation" 
                  className="w-full aspect-square object-cover rounded-sm mt-8"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader 
                subtitle="The Experience"
                title="A Symphony of Flavors"
                description="At The Harvest Table, dining is more than just a meal—it is an experience. Our restaurant offers a sophisticated yet relaxed atmosphere, perfect for romantic dinners, business lunches, or family celebrations. We pride ourselves on using the freshest organic produce from nearby farms in Salima."
                centered={false}
              />
              <div className="space-y-6 mt-8">
                <div className="border-b border-border/50 pb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg text-primary">Chambo Fillet</h4>
                    <span className="text-secondary font-bold">$24</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">Pan-seared Lake Malawi Chambo, lemon butter sauce, seasonal greens.</p>
                </div>
                <div className="border-b border-border/50 pb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg text-primary">Malawian Beef Tenderloin</h4>
                    <span className="text-secondary font-bold">$32</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">Aged beef fillet, wild mushroom reduction, potato fondant.</p>
                </div>
                <div className="border-b border-border/50 pb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg text-primary">Vegetable Curry</h4>
                    <span className="text-secondary font-bold">$18</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">Roasted local vegetables, coconut cream, aromatic spices, basmati rice.</p>
                </div>
              </div>
              <div className="mt-10">
                <button className="btn-primary">Download Full Menu</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
