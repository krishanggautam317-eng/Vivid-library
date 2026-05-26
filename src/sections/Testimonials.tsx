import { motion } from "framer-motion";

const testimonials = [
  { name: "Priya Sharma",  role: "CA Finalist",         initial: "P", color: "#0A4DAD", quote: "Best library in Bilaspur! Got my CA rank here. Silent zone is strictly maintained." },
  { name: "Rahul Verma",   role: "UPSC Aspirant",       initial: "R", color: "#7C3AED", quote: "AC, WiFi, peace — the perfect combo for UPSC prep. Worth every rupee." },
  { name: "Anjali Sahu",   role: "NEET Aspirant",       initial: "A", color: "#DB2777", quote: "Monthly pass is absolutely worth it. Chairs built for long study sessions." },
  { name: "Deepak Kumar",  role: "Engineering Student", initial: "D", color: "#059669", quote: "Live seat tracker is genius. I check it every morning before leaving home." },
  { name: "Neha Patel",    role: "PG Student",          initial: "N", color: "#D97706", quote: "Great lighting, comfortable seats, very safe for girls. 10/10 experience." },
  { name: "Arjun Singh",   role: "Bank PO",             initial: "A", color: "#DC2626", quote: "I cleared my banking exam studying here. Highly recommend this place!" },
];

const duped = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "#F5F7FB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "#EBF2FF", color: "#0A4DAD" }}
          >
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#062B63" }}>
            Hear from Our Achievers
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Join hundreds of students who've built their careers here.
          </p>
        </motion.div>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F5F7FB, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F5F7FB, transparent)" }} />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex gap-4 sm:gap-5 w-max"
          style={{ paddingLeft: "1.5rem" }}
        >
          {duped.map((t, idx) => (
            <div
              key={idx}
              className="w-[300px] sm:w-[340px] shrink-0 p-6 rounded-2xl border bg-white flex flex-col justify-between"
              style={{
                borderColor: "#E2E8F0",
                boxShadow: "0 1px 4px rgba(6,43,99,0.06)",
              }}
            >
              <div className="mb-5">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#F59E0B">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#062B63" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
