import { motion } from "motion/react";

const categories = [
  {
    name: "ESSENTIALS",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    count: "24 ITEMS"
  },
  {
    name: "OUTERWEAR",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
    count: "12 ITEMS"
  },
  {
    name: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1618354721013-23101d18838b?auto=format&fit=crop&q=80&w=800",
    count: "08 ITEMS"
  }
];

export default function ShopCategories() {
  return (
    <section id="categories" className="py-24 px-10 border-b border-brand-charcoal/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-16">
           <div>
             <span className="label-xs text-brand-stone mb-2 block">The Spectrum</span>
             <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter uppercase">Shop Series</h2>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-charcoal/10 border border-brand-charcoal/10">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              className="relative aspect-[4/5] group cursor-pointer overflow-hidden bg-brand-offwhite"
            >
              <img 
                src={cat.image} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                alt={cat.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {cat.count}
                </span>
                <h3 className="text-2xl font-display font-bold tracking-widest uppercase">{cat.name}</h3>
                <div className="w-8 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
