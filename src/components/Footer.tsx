import { motion } from "motion/react";
import { Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-brand-offwhite text-brand-charcoal pt-32 pb-12 px-10 border-t border-brand-charcoal/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <a href="/" className="inline-block mb-10">
              <span className="text-xs tracking-[0.4em] font-bold uppercase italic font-display">ÆTHER STUDIO</span>
            </a>
            <p className="text-brand-olive text-xs font-medium max-w-sm mb-16 uppercase tracking-widest leading-relaxed">
              Define your narrative. Join our inner circle for exclusive drop notifications and archival content previews.
            </p>
            <form className="relative max-w-md">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-brand-charcoal/20 pb-4 text-[10px] uppercase font-bold tracking-[0.2em] focus:outline-none focus:border-brand-charcoal transition-colors placeholder:text-brand-stone/50"
              />
              <button className="absolute right-0 bottom-4 text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
                JOIN
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h4 className="label-xs text-brand-stone mb-10">Explore</h4>
            <div className="flex flex-col gap-5 text-[10px] uppercase font-bold tracking-widest">
              <a href="#" className="hover:opacity-50 transition-colors">Archive</a>
              <a href="#" className="hover:opacity-50 transition-colors">Collections</a>
              <a href="#" className="hover:opacity-50 transition-colors">Lookbook</a>
              <a href="#" className="hover:opacity-50 transition-colors">Editorial</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="label-xs text-brand-stone mb-10">Support</h4>
            <div className="flex flex-col gap-5 text-[10px] uppercase font-bold tracking-widest">
              <a href="#" className="hover:opacity-50 transition-colors">Assistance</a>
              <a href="#" className="hover:opacity-50 transition-colors">Materials</a>
              <a href="#" className="hover:opacity-50 transition-colors">Care Guide</a>
              <a href="#" className="hover:opacity-50 transition-colors">Shipping</a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="label-xs text-brand-stone mb-10">Social</h4>
            <div className="flex flex-col gap-5 text-[10px] uppercase font-bold tracking-widest">
              <a href="#" className="hover:opacity-50 transition-colors">Instagram</a>
              <a href="#" className="hover:opacity-50 transition-colors">TikTok</a>
              <a href="#" className="hover:opacity-50 transition-colors">Pinterest</a>
              <a href="#" className="hover:opacity-50 transition-colors">Spotify</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-brand-charcoal/10 gap-6">
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-stone">
            © 2026 ARCHIVE STUDIO CO. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-12 text-[9px] uppercase tracking-[0.2em] font-bold text-brand-stone">
            <a href="#" className="hover:text-brand-charcoal transition-colors">Private</a>
            <a href="#" className="hover:text-brand-charcoal transition-colors">Protocol</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
