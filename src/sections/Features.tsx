import { motion } from "framer-motion";
import { Wind, Wifi, VolumeX, Zap, Shield, Armchair, Droplets, Battery } from "lucide-react";

const features = [
  { icon: Wind,     title: "AC Study Hall",     desc: "Climate-controlled for optimal focus all day long" },
  { icon: Wifi,     title: "High-Speed WiFi",   desc: "Blazing fast internet for online classes & research" },
  { icon: VolumeX,  title: "Silent Zone",       desc: "Strictly enforced zero-noise policy inside" },
  { icon: Zap,      title: "Charging Ports",    desc: "Individual power sockets at every single desk" },
  { icon: Shield,   title: "CCTV Security",     desc: "24/7 surveillance for your peace of mind" },
  { icon: Armchair, title: "Ergonomic Seating", desc: "Premium chairs designed for long study sessions" },
  { icon: Droplets, title: "RO Purified Water", desc: "Hot and cold purified water dispenser, always free" },
  { icon: Battery,  title: "Power Backup",      desc: "Uninterrupted power — inverter always running" },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } };
const item      = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28" style={{ backgroundColor: "#F5F7FB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label + Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "#EBF2FF", color: "#0A4DAD" }}
          >
            Facilities
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4"
            style={{ color: "#062B63" }}
          >
            World-Class Study Facilities
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg" style={{ color: "#6B7280" }}>
            Everything you need to study smarter, focus longer, and perform better.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border transition-all duration-200 group cursor-default"
              style={{
                borderColor: "#E2E8F0",
                boxShadow: "0 1px 3px rgba(6,43,99,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(6,43,99,0.10)";
                (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(6,43,99,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "#EBF2FF" }}
              >
                <f.icon className="w-5 h-5" style={{ color: "#0A4DAD" }} />
              </div>
              <h3 className="text-base font-semibold mb-1.5" style={{ color: "#062B63" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
