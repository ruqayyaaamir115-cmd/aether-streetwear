import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-brand-charcoal/10 ${
        isScrolled ? "bg-brand-offwhite/95 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center text-brand-charcoal">
        <div className="flex items-center gap-12">
          <button 
            id="mobile-menu-btn"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="hidden md:flex gap-12 text-[10px] tracking-[0.2em] font-medium uppercase">
            <a href="#" className="hover:opacity-50 transition-opacity">Collections</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Lookbook</a>
            <a href="#" className="hover:opacity-50 transition-opacity">The Journal</a>
          </div>
        </div>

        <a href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <span className="text-xs tracking-[0.4em] font-bold uppercase italic font-display">
            ÆTHER STUDIO
          </span>
        </a>

        <div className="flex items-center gap-10 text-[10px] tracking-[0.2em] uppercase font-medium">
          <button id="search-btn" className="hover:opacity-50 transition-opacity hidden sm:block">
            Search
          </button>
          <button id="cart-btn" className="flex items-center gap-1 hover:opacity-50 transition-opacity">
            Cart (0)
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        className={`absolute top-full left-0 w-full bg-brand-offwhite border-t border-black/5 p-6 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-6 text-xl font-display font-medium">
          <a href="#" onClick={() => setIsMenuOpen(false)}>Collections</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>New Arrivals</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Lookbook</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Our Story</a>
        </div>
      </motion.div>
    </nav>
  );
}
