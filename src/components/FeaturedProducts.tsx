import { motion } from "motion/react";
import { Plus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Oversized Heavyweight Hoodie",
    price: "$120.00",
    category: "Essentials",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Raw Cut Hem Chinos",
    price: "$85.00",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1473963441145-834483d46ee7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Tech Cargo Vest",
    price: "$145.00",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
    tag: "New Arrival"
  },
  {
    id: 4,
    name: "Architectural Graphic Tee",
    price: "$55.00",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800"
  }
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-32 px-10 bg-brand-offwhite border-b border-brand-charcoal/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="label-xs text-brand-stone mb-4 block">Curated Selection / Drop 004</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.85] tracking-tighter">
              SEASONAL <br/>
              <span className="italic-serif ml-4">Architecture</span>
            </h2>
          </div>
          <a href="#" className="label-xs border-b border-brand-charcoal pb-1 font-bold hover:opacity-50 transition-opacity whitespace-nowrap">
            View All Series
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-charcoal/10 border border-brand-charcoal/10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-offwhite p-6 group cursor-pointer border-brand-charcoal/10"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-beige mb-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/5 transition-colors duration-500" />
                
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-brand-charcoal text-white px-3 py-1 label-xs !text-[8px]">
                    {product.tag}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-stone">
                    {product.category}
                  </span>
                  <span className="text-[10px] font-mono text-brand-charcoal font-bold">
                    {product.price}
                  </span>
                </div>
                <h3 className="text-xs uppercase font-bold tracking-widest leading-relaxed">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
