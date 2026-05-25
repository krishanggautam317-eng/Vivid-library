import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Daily Pass",
    price: "₹50",
    period: "/ day",
    desc: "Perfect for quick sessions",
    features: ["8 hours access", "WiFi included", "Any available seat", "Drinking water"],
    popular: false
  },
  {
    name: "Weekly Pass",
    price: "₹250",
    period: "/ week",
    desc: "Consistent weekly study",
    features: ["7 days access", "Reserved seat", "High-speed WiFi", "Power socket at desk", "Drinking water"],
    popular: true
  },
  {
    name: "Monthly Pass",
    price: "₹800",
    period: "/ month",
    desc: "For serious aspirants",
    features: ["30 days access", "Fixed reserved seat", "All facilities", "Priority support", "Locker facility (optional)"],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background/80 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <p className="text-muted-foreground">Invest in your focus. No hidden charges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? "bg-card border-2 border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] md:scale-105 z-10" 
                  : "bg-card/50 border border-white/10 backdrop-blur-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <div className="flex items-baseline text-white">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/90 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/917987654321?text=Hi,%20I'm%20interested%20in%20the%20${plan.name}%20plan.`}
                target="_blank"
                rel="noreferrer"
                className={`block w-full py-3 text-center rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:bg-primary/90"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
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
