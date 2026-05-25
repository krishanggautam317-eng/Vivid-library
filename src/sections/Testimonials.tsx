import { motion } from "framer-motion";

const testimonials = [
  { name: "Priya Sharma",  role: "CA Finalist",         initial: "P", color: "#3b82f6", quote: "Best library in Bilaspur! Got my CA rank here. The silent zone is strictly maintained." },
  { name: "Rahul Verma",   role: "UPSC Aspirant",       initial: "R", color: "#8b5cf6", quote: "AC, WiFi, peace — the perfect combo for UPSC prep. Worth every rupee." },
  { name: "Anjali Sahu",   role: "NEET Aspirant",       initial: "A", color: "#ec4899", quote: "Monthly pass is worth every rupee. Comfortable chairs built for long hours." },
  { name: "Deepak Kumar",  role: "Engineering Student", initial: "D", color: "#10b981", quote: "Live seat tracker is genius. I check it every morning before leaving home." },
  { name: "Neha Patel",    role: "PG Student",          initial: "N", color: "#f97316", quote: "Comfortable seats, great lighting. 10/10 study experience. Safe for everyone." },
  { name: "Arjun Singh",   role: "Bank PO",             initial: "A", color: "#6366f1", quote: "I cleared my banking exams studying here. Highly recommend this place!" },
];

const duped = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 relative border-t border-white/5 overflow-hidden" style={{ backgroundColor: "hsl(222 47% 7%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Hear from Our Achievers
            </h2>
            <p className="text-white/50 text-base sm:text-lg">
              Join a community of serious, focused students.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll track */}
      <div className="relative w-full overflow-hidden">
        {/* Edge fade */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(222 47% 7%), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(222 47% 7%), transparent)" }} />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="flex gap-4 sm:gap-6 w-max"
          style={{ paddingLeft: "1.5rem" }}
        >
          {duped.map((t, idx) => (
            <div
              key={idx}
              className="w-72 sm:w-80 shrink-0 p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              style={{ backgroundColor: "hsl(222 47% 11%)" }}
            >
              {/* Stars */}
              <div className="mb-4">
                <div className="flex gap-0.5 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/75 text-sm leading-relaxed italic">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
