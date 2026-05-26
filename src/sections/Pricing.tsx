import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Daily Pass",
    price: "₹50",
    period: "/ day",
    desc: "Perfect for occasional visits",
    features: ["8 hours of access", "WiFi included", "Any available seat", "Drinking water"],
    popular: false,
    cta: "Get Day Pass",
  },
  {
    name: "Weekly Pass",
    price: "₹250",
    period: "/ week",
    desc: "Ideal for consistent study",
    features: ["7 days full access", "Reserved fixed seat", "High-speed WiFi", "Power socket at desk", "Free drinking water"],
    popular: true,
    cta: "Get Weekly Pass",
  },
  {
    name: "Monthly Pass",
    price: "₹800",
    period: "/ month",
    desc: "Built for serious aspirants",
    features: ["30 days full access", "Fixed reserved seat", "All facilities", "Priority support", "Optional locker"],
    popular: false,
    cta: "Get Monthly Pass",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "#EBF2FF", color: "#0A4DAD" }}
          >
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#062B63" }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Invest in your focus. No hidden charges, no fine print.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-7 flex flex-col ${plan.popular ? "md:-mt-4" : ""}`}
              style={plan.popular ? {
                backgroundColor: "#062B63",
                boxShadow: "0 8px 32px rgba(6,43,99,0.25)",
              } : {
                backgroundColor: "#fff",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 4px rgba(6,43,99,0.06)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#0A4DAD", color: "#fff", boxShadow: "0 2px 8px rgba(10,77,173,0.4)" }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: plan.popular ? "rgba(255,255,255,0.6)" : "#6B7280" }}
              >
                {plan.name}
              </p>
              <p
                className="text-sm mb-5"
                style={{ color: plan.popular ? "rgba(255,255,255,0.7)" : "#9CA3AF" }}
              >
                {plan.desc}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-7">
                <span
                  className="text-5xl font-extrabold tracking-tight"
                  style={{ color: plan.popular ? "#fff" : "#062B63" }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-sm"
                  style={{ color: plan.popular ? "rgba(255,255,255,0.5)" : "#9CA3AF" }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-7"
                style={{ backgroundColor: plan.popular ? "rgba(255,255,255,0.1)" : "#F1F5F9" }}
              />

              {/* Features */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: plan.popular ? "rgba(255,255,255,0.15)" : "#EBF2FF",
                      }}
                    >
                      <Check className="w-3 h-3" style={{ color: plan.popular ? "#fff" : "#0A4DAD" }} />
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: plan.popular ? "rgba(255,255,255,0.85)" : "#374151" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/917987654321?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noreferrer"
                className="block w-full py-3.5 rounded-xl text-sm font-semibold text-center transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={plan.popular ? {
                  backgroundColor: "#0A4DAD",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(10,77,173,0.4)",
                } : {
                  backgroundColor: "#EBF2FF",
                  color: "#0A4DAD",
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
