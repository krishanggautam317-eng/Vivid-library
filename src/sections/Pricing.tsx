import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Daily Pass",
    price: "₹50",
    period: "/ day",
    desc: "Perfect for occasional sessions",
    features: ["8 hours access", "WiFi included", "Any available seat", "Drinking water"],
    popular: false,
  },
  {
    name: "Weekly Pass",
    price: "₹250",
    period: "/ week",
    desc: "Consistent focused study",
    features: ["7 days access", "Reserved seat", "High-speed WiFi", "Power socket at desk", "Free drinking water"],
    popular: true,
  },
  {
    name: "Monthly Pass",
    price: "₹800",
    period: "/ month",
    desc: "For serious aspirants",
    features: ["30 days access", "Fixed reserved seat", "All facilities included", "Priority support", "Locker (optional)"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 relative border-t border-white/5" style={{ backgroundColor: "hsl(222 47% 7%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-white/50 text-base sm:text-lg">Invest in your focus. No hidden charges.</p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                plan.popular
                  ? "border-2 border-primary/60 z-10"
                  : "border border-white/10"
              }`}
              style={{
                backgroundColor: plan.popular ? "hsl(222 47% 13%)" : "hsl(222 47% 11% / 0.7)",
                boxShadow: plan.popular ? "0 0 40px hsl(217 91% 60% / 0.12)" : "none",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-white text-xs font-bold rounded-full whitespace-nowrap"
                  style={{ backgroundColor: "hsl(217 91% 60%)", boxShadow: "0 0 12px hsl(217 91% 60% / 0.5)" }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-white/50 mb-5">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-white/40 text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "hsl(217 91% 60% / 0.15)" }}
                    >
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/75 text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/917987654321?text=Hi,%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noreferrer"
                className={`block w-full py-3.5 text-center rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? "text-white hover:opacity-90"
                    : "text-white border border-white/15 hover:border-white/30"
                }`}
                style={plan.popular ? {
                  backgroundColor: "hsl(217 91% 60%)",
                  boxShadow: "0 0 16px hsl(217 91% 60% / 0.3)",
                } : {
                  backgroundColor: "hsl(255 255% 255% / 0.05)",
                }}
              >
                Get This Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
