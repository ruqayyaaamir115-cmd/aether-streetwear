import { motion } from "motion/react";

const Marquee = () => {
  return (
    <div className="bg-brand-charcoal py-4 overflow-hidden border-y border-white/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            <span className="text-white text-2xl font-display font-black italic tracking-tighter">LIMITED DROP — SS26</span>
            <span className="text-white/30 text-2xl font-mono">✦</span>
            <span className="text-white text-2xl font-display font-black italic tracking-tighter">ÆTHER STREETWEAR</span>
            <span className="text-white/30 text-2xl font-mono font-bold">///</span>
            <span className="text-white text-2xl font-display font-black italic tracking-tighter">NEW ORIGINALS</span>
            <span className="text-white/30 text-2xl font-mono">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
