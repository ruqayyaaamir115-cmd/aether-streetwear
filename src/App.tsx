import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Marquee from "./components/Marquee.tsx";
import FeaturedProducts from "./components/FeaturedProducts.tsx";
import BrandStory from "./components/BrandStory.tsx";
import Lookbook from "./components/Lookbook.tsx";
import Footer from "./components/Footer.tsx";
import ShopCategories from "./components/ShopCategories.tsx";
import SizeGuide from "./components/SizeGuide.tsx";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative font-sans antialiased overflow-x-hidden">
      {/* Custom Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-charcoal z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        
        <ShopCategories />

        <section className="bg-white">
          <BrandStory />
        </section>

        <FeaturedProducts />

        <section className="bg-brand-charcoal py-40 px-10 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:grid lg:grid-cols-12 items-center gap-20">
            <div className="lg:col-span-6 z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6 block font-bold">Limited Collaboration</span>
              <h2 className="text-6xl md:text-[100px] text-white font-display font-light tracking-tighter leading-[0.8] mb-12">
                THE <br/>
                VOICE OF <br/>
                <span className="italic-serif text-white/30">Silence</span>.
              </h2>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest leading-relaxed mb-16 max-w-md">
                An exploration of hollow silhouettes and negative space. Drop 012 features our proprietary synthetic wool blend. 
              </p>
              <button className="px-12 py-6 bg-white text-brand-charcoal text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-offwhite transition-all">
                Access Archive
              </button>
            </div>
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-[500px] aspect-[4/5] bg-brand-stone/10 border border-white/10 relative overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                  alt="Collective Drop"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 right-0 p-10">
                   <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Abstract background text */}
          <div className="absolute bottom-0 left-0 text-[20vw] font-display font-black text-white/[0.02] tracking-tighter select-none leading-none -mb-32">
            ÆTHER
          </div>
        </section>

        <SizeGuide />
        
        <Lookbook />

        {/* Fashion Blog Teaser */}
        <section id="blog-teaser" className="py-32 bg-brand-offwhite px-10 border-y border-brand-charcoal/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20">
              <span className="label-xs text-brand-stone mb-4 block">The Discourse</span>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter uppercase">Fashion Journal</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-charcoal/10 border border-brand-charcoal/10">
              {[
                {
                  date: "MAY 2026",
                  cat: "Silhouettes",
                  title: "Defining the perfect architectural hoodie",
                  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600"
                },
                {
                  date: "APR 2026",
                  cat: "Method",
                  title: "Sustainability beyond marketing speak",
                  image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600"
                },
                {
                  date: "APR 2026",
                  cat: "Archive",
                  title: "Looking back at foundation 001",
                  image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=600"
                }
              ].map((post, idx) => (
                <div key={idx} className="bg-brand-offwhite p-10 group cursor-pointer group">
                  <div className="aspect-[4/3] overflow-hidden mb-10 bg-brand-beige">
                    <img 
                      src={post.image} 
                      className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[2s]" 
                      alt="Blog cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-bold tracking-widest text-brand-stone uppercase">{post.cat}</span>
                    <span className="text-[9px] font-bold tracking-widest text-brand-stone uppercase">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold leading-tight group-hover:underline underline-offset-8 transition-all uppercase tracking-tight">
                    {post.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews Spotlight */}
        <section className="py-40 px-10 bg-brand-paper border-b border-brand-charcoal/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif italic text-brand-charcoal leading-tight mb-16"
            >
              "The quality of the heavyweight jersey is unmatched. Finally, a brand that understands the balance between minimal design and premium construction."
            </motion.div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-brand-stone/20 overflow-hidden mb-6 filter grayscale">
                <img src="https://i.pravatar.cc/150?u=fashion" alt="Reviewer" referrerPolicy="no-referrer" />
              </div>
              <span className="label-xs !text-[9px]">Alex R. / Verified Collector</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Elements for Premium Feel */}
      <div className="fixed bottom-10 right-10 z-40 hidden lg:block">
        <button className="bg-brand-charcoal text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
          <span className="sr-only">Assistance</span>
          <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:animate-ping" />
        </button>
      </div>
    </div>
  );
}

