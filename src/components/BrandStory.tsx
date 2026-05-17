import { motion } from "motion/react";

export default function BrandStory() {
  return (
    <section id="brand-story" className="py-32 px-10 border-b border-brand-charcoal/10 bg-brand-paper">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="label-xs text-brand-stone mb-6 block font-bold">Concept / Methodology</span>
            <h2 className="text-6xl md:text-8xl font-display font-light leading-[0.8] tracking-tighter mb-12">
              MINIMALISM <br/>
              AS A <span className="italic-serif">Statement</span>.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed text-brand-olive font-medium">
              <p>
                ÆTHER was born from the intersection of urban utility and refined aesthetics. 
                Our methodology relies on sculptural silhouettes and intentional lack of excess. 
              </p>
              <p>
                Each piece in our collection is crafted with durability and versatility at its core, 
                designed to coexist within a modular wardrobe for the modern generation.
              </p>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-12 border-t border-brand-charcoal/10 pt-12">
              {[
                { val: "100%", label: "Org. Cotton" },
                { val: "MMXXVI", label: "Foundation" },
                { val: "Global", label: "Aesthetics" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-2xl font-display font-bold tracking-tighter uppercase">{stat.val}</span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-stone font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[16/10] bg-brand-beige overflow-hidden relative shadow-[40px_40px_0_0_rgba(140,137,132,0.1)]"
          >
            <img 
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200" 
              alt="Brand Look"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
