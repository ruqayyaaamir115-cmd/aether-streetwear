import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col border-b border-brand-charcoal/10">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0 relative">
        {/* Left Branding Section */}
        <div className="md:col-span-6 lg:col-span-5 p-10 md:p-20 flex flex-col justify-between border-r border-brand-charcoal/10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] uppercase tracking-[0.4em] mb-4 text-brand-stone font-bold">Drop 004 / Seasonal</p>
            <h1 className="text-7xl md:text-9xl font-light leading-[0.8] tracking-tighter mb-8">
              URBAN<br/>
              <span className="italic-serif ml-4 text-brand-charcoal/90">Elegance</span>
            </h1>
            <p className="mt-8 text-sm leading-relaxed max-w-[340px] text-brand-olive font-medium">
              A curated collection of essential streetwear defined by sculptural silhouettes and sustainable raw cotton fabrics. Designed for the modern wanderer.
            </p>
            <div className="mt-12">
              <button className="px-10 py-5 bg-brand-charcoal text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-charcoal/90 transition-all hover:px-12">
                Explore Collection
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-end gap-16 mt-20"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[9px] uppercase tracking-widest text-brand-stone font-bold">Featured</span>
              <span className="text-xs border-b border-brand-charcoal pb-1 uppercase font-medium">Heavy Box Tee</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[9px] uppercase tracking-widest text-brand-stone font-bold">Est.</span>
              <span className="text-xs uppercase font-medium">MMXXVI</span>
            </div>
          </motion.div>
        </div>

        {/* Central Visual Aspect */}
        <div className="md:col-span-6 lg:col-span-4 relative overflow-hidden bg-brand-beige flex items-center justify-center min-h-[500px]">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[85%] h-[85%] bg-white/20 shadow-2xl relative overflow-hidden"
          >
             <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" 
              alt="Streetwear Detail"
              className="w-full h-full object-cover grayscale-[0.3]"
              referrerPolicy="no-referrer"
            />
             <div className="absolute bottom-8 right-[-20px] bg-brand-charcoal text-white px-6 py-4 text-[10px] tracking-[0.3em] uppercase font-bold vertical-rl rotate-180">
               SS26 PREVIEW / DROPPING SOON
             </div>
          </motion.div>
        </div>

        {/* Right Section / Info */}
        <div className="hidden lg:col-span-3 lg:flex flex-col border-l border-brand-charcoal/10 pt-32">
           <div className="flex-1 p-10 border-b border-brand-charcoal/10 bg-brand-paper">
             <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Quick Look</h2>
             <div className="space-y-10">
               {[
                 { name: "Nylon Coach", price: "$185", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=200" },
                 { name: "Pleated Trousers", price: "$140", img: "https://images.unsplash.com/photo-1473963441145-834483d46ee7?auto=format&fit=crop&q=80&w=200" },
                 { name: "Heavy Hoodie", price: "$120", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=200" }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-center group cursor-pointer hover:opacity-70 transition-all">
                   <div className="w-16 h-20 bg-brand-beige overflow-hidden">
                     <img src={item.img} className="w-full h-full object-cover grayscale brightness-110" alt={item.name} />
                   </div>
                   <div>
                     <p className="text-[10px] uppercase font-bold tracking-widest">{item.name}</p>
                     <p className="text-[10px] text-brand-stone font-mono mt-1">{item.price}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
           <div className="p-10">
             <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 italic-serif">Community</h2>
             <p className="text-[11px] text-brand-olive leading-relaxed mb-8 uppercase tracking-wider">
               Join our inner circle for early access to limited edition drops.
             </p>
             <div className="flex gap-4">
                <button className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-charcoal py-2 w-full text-left">
                  Subscribe
                </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
