import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What are the library timings?",          a: "We are open 24/7, 365 days a year. Study at any time that suits your schedule." },
  { q: "How do I check seat availability?",      a: "Our live tracker on this website updates in real-time. Check the Seat Availability section above before visiting." },
  { q: "Can I bring food inside?",               a: "No food or drinks (except water in sealed bottles) are allowed inside to maintain cleanliness and a distraction-free environment." },
  { q: "Is WiFi available for all members?",     a: "Yes, high-speed WiFi is included in all plans at no extra cost." },
  { q: "Can I reserve a specific seat?",         a: "Weekly and Monthly pass holders get a reserved, fixed seat. Daily pass holders may choose any available unreserved seat." },
  { q: "Is there CCTV surveillance?",            a: "Yes, 24/7 CCTV coverage across all areas ensures your safety and security at all times." },
  { q: "How do I pay for a plan?",               a: "You can pay via UPI, cash, or online bank transfer at the front desk. WhatsApp us to pre-book your seat." },
  { q: "Is there a student discount?",           a: "Yes! Show a valid college or school ID for ₹50 off on monthly plans." },
];

function FAQItem({ faq, idx }: { faq: { q: string; a: string }; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05, duration: 0.4 }}
      className="rounded-xl border overflow-hidden transition-colors duration-200"
      style={{
        backgroundColor: "hsl(222 47% 11%)",
        borderColor: open ? "hsl(217 91% 60% / 0.4)" : "hsl(222 47% 18% / 0.8)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4 group"
      >
        <span className={`text-sm sm:text-base font-medium transition-colors ${open ? "text-primary" : "text-white"}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-white/40 group-hover:text-white/70 transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 text-sm text-white/55 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 relative border-t border-white/5" style={{ backgroundColor: "hsl(222 47% 7%)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/50 text-base sm:text-lg">
              Everything you need to know about Gyan Sarovar.
            </p>
          </motion.div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
