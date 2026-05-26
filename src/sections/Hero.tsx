import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(160deg, #F5F7FB 0%, #EBF0FB 50%, #F5F7FB 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(10,77,173,0.07) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(10,77,173,0.05) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2.5 mb-8">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
            style={{
              backgroundColor: "#EBF2FF",
              borderColor: "#BFDBFE",
              color: "#0A4DAD",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
            36 / 120 Seats Available Today
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-4xl sm:text-5xl md:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-6"
          style={{ color: "#062B63" }}
        >
          Your Premium
          <span
            className="block"
            style={{
              backgroundImage: "linear-gradient(135deg, #062B63 0%, #0A4DAD 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Study Space
          </span>
          in Bilaspur
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#6B7280" }}
        >
          AC &bull; High-Speed WiFi &bull; Silent Environment &bull; 120 Seats &bull; Open 24/7
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="#seats"
            className="flex items-center gap-2 px-7 py-4 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            style={{
              backgroundColor: "#0A4DAD",
              boxShadow: "0 4px 14px rgba(10,77,173,0.35)",
            }}
          >
            Check Seat Availability
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#pricing"
            className="flex items-center gap-2 px-7 py-4 rounded-2xl text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 border w-full sm:w-auto justify-center"
            style={{
              color: "#062B63",
              borderColor: "#CBD5E1",
              backgroundColor: "#fff",
              boxShadow: "0 1px 3px rgba(6,43,99,0.08)",
            }}
          >
            View Pricing Plans
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { num: "120", label: "Total Seats" },
            { num: "24/7", label: "Open Always" },
            { num: "500+", label: "Students Served" },
            { num: "4.9★", label: "Avg Rating" },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center">
              <span className="text-2xl font-bold" style={{ color: "#0A4DAD" }}>{b.num}</span>
              <span className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity hover:opacity-70"
        style={{ color: "#9CA3AF" }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
