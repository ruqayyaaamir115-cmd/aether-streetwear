import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1523381235212-d7b2d7281456?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800"
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-32 px-10 border-b border-brand-charcoal/10 bg-brand-paper">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="label-xs text-brand-stone mb-4 block">Visual Narrative / SS26</span>
            <h2 className="text-5xl md:text-7xl font-display font-light leading-[0.85] tracking-tighter">
              CONCRETE <br/>
              <span className="italic-serif ml-4">Atmosphere</span>
            </h2>
          </div>
          <p className="max-w-sm text-xs font-medium uppercase tracking-[0.2em] leading-relaxed text-brand-olive text-right hidden lg:block">
            A study in silhouette and urban movement. Capturing the essence of the modern concrete landscape.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-charcoal/10 border border-brand-charcoal/10">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`bg-brand-offwhite p-2 group overflow-hidden ${
                i % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="w-full h-full overflow-hidden bg-brand-beige">
                <img 
                  src={img} 
                  className="w-full h-full object-cover grayscale transition-all duration-[3s] group-hover:scale-110 group-hover:grayscale-0" 
                  alt={`Lookbook ${i}`}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
