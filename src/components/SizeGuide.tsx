import { motion } from "motion/react";
import { Ruler, Info } from "lucide-react";

export default function SizeGuide() {
  return (
    <section id="size-guide" className="py-32 px-10 border-b border-brand-charcoal/10 bg-brand-paper">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="border border-brand-charcoal/10 p-10 md:p-16 bg-brand-offwhite relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-charcoal/5" />
            
            <div className="flex items-center gap-4 mb-12">
              <Ruler size={18} className="text-brand-stone" />
              <h3 className="label-xs font-bold">Anatomy of Fit</h3>
            </div>
            
            <div className="space-y-10">
              {[
                { name: "Oversized series", detail: "Relaxed shoulder, wide body", rule: "TRUE TO SIZE" },
                { name: "Archival essentials", detail: "Standard fit, horizontal alignment", rule: "SIZE UP FOR VOID" },
                { name: "Technical series", detail: "Adjustable, composite fit", rule: "TRUE TO SIZE" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-end border-b border-brand-charcoal/5 pb-6">
                  <div>
                    <h4 className="text-[11px] uppercase font-bold tracking-widest">{item.name}</h4>
                    <p className="text-[10px] text-brand-stone tracking-wide mt-1">{item.detail}</p>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em]">{item.rule}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 flex items-start gap-4 p-8 border border-brand-charcoal/5 bg-brand-charcoal/5">
              <Info size={16} className="shrink-0 mt-0.5 text-brand-stone" />
              <p className="text-[10px] uppercase font-medium tracking-widest leading-loose text-brand-olive italic">
                Model is 185cm wearing Size Large. Precise measurements available via digital atelier support.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <span className="label-xs text-brand-stone mb-4 block">Precision</span>
          <h2 className="text-5xl md:text-7xl font-display font-light leading-[0.8] tracking-tighter mb-10">
            THE <span className="italic-serif">Architectural</span> <br/>
            FIT.
          </h2>
          <p className="text-brand-olive text-sm font-medium uppercase tracking-widest leading-relaxed mb-10 max-w-lg">
            We believe that silhouette is the foundation of luxury. Each garment is drafted with mathematical precision to achieve the perfect urban drape.
          </p>
          <button className="label-xs border-b border-brand-charcoal pb-1 font-bold inline-flex items-center gap-2 group">
            View Measure Chart <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
