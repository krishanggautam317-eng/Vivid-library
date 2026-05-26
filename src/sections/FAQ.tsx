import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What are the library timings?",       a: "We are open 24/7, 365 days a year. Study at any time that suits your schedule — day or night." },
  { q: "How do I check seat availability?",   a: "Our live tracker on this page updates in real-time. Check the Seat Availability section before visiting." },
  { q: "Can I bring food inside?",            a: "No food is allowed inside the main study hall. Only sealed water bottles are permitted to maintain cleanliness." },
  { q: "Is WiFi available for all plans?",    a: "Yes — high-speed WiFi is included in every plan at no additional cost." },
  { q: "Can I reserve a specific seat?",      a: "Weekly and Monthly pass holders get a dedicated, fixed reserved seat. Daily pass holders choose any available seat." },
  { q: "Is there CCTV surveillance?",         a: "Yes, 24/7 CCTV coverage across all areas ensures your safety and peace of mind at all times." },
  { q: "How do I pay for a pass?",            a: "Payment via UPI, cash, or bank transfer accepted at the front desk. WhatsApp us to pre-book your seat." },
  { q: "Is there a student discount?",        a: "Yes! Show a valid college or school ID for ₹50 off on our Monthly pass." },
];

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.04, duration: 0.4 }}
      className="rounded-2xl border overflow-hidden bg-white transition-all duration-200"
      style={{
        borderColor: open ? "#BFDBFE" : "#E2E8F0",
        boxShadow: open ? "0 4px 16px rgba(10,77,173,0.08)" : "0 1px 3px rgba(6,43,99,0.05)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4 group"
      >
        <span
          className="text-sm sm:text-base font-semibold transition-colors"
          style={{ color: open ? "#0A4DAD" : "#062B63" }}
        >
          {q}
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
          style={{
            backgroundColor: open ? "#EBF2FF" : "#F1F5F9",
            color: open ? "#0A4DAD" : "#6B7280",
          }}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "#EBF2FF", color: "#0A4DAD" }}
          >
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#062B63" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg" style={{ color: "#6B7280" }}>
            Everything you need to know about Gyan Sarovar.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
