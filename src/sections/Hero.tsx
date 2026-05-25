import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const words = ["Your", "Premium", "Study", "Space", "in", "Bilaspur"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{ backgroundColor: "hsl(222 47% 7%)" }}>
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(217 91% 60% / 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Live seat badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 px-4 py-2 rounded-full flex items-center gap-2.5 border border-white/10"
          style={{ backgroundColor: "hsl(222 47% 11% / 0.8)", backdropFilter: "blur(12px)" }}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ boxShadow: "0 0 8px #22c55e" }} />
          <span className="text-sm font-medium text-white/90">36 / 120 Seats Available</span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className={`inline-block mr-3 mb-1 ${
                word === "Premium"
                  ? "text-primary drop-shadow-[0_0_16px_rgba(59,130,246,0.6)]"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 tracking-wide"
        >
          AC &bull; WiFi &bull; Silent Environment &bull; 120 Seats &bull; Open 24/7
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#seats"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-xl text-center transition-all duration-200 hover:bg-primary/90"
            style={{ boxShadow: "0 0 24px hsl(217 91% 60% / 0.4)" }}
          >
            Check Seat Availability
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 text-white font-semibold rounded-xl text-center transition-colors duration-200 hover:border-white/30 border border-white/10"
            style={{ backgroundColor: "hsl(255 255% 255% / 0.05)" }}
          >
            View Plans
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </motion.a>
    </section>
  );
}
