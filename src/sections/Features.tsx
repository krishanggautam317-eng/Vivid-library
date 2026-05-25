import { motion } from "framer-motion";
import { Wind, Wifi, VolumeX, Zap, Shield, Armchair, Droplets, Battery } from "lucide-react";

const features = [
  { icon: Wind,      title: "AC Study Hall",       desc: "Climate-controlled for optimal focus all day" },
  { icon: Wifi,      title: "High-Speed WiFi",     desc: "Blazing fast internet for online classes & research" },
  { icon: VolumeX,   title: "Silent Zone",         desc: "Strictly enforced zero-noise policy inside" },
  { icon: Zap,       title: "Charging Ports",      desc: "Individual power sockets at every single desk" },
  { icon: Shield,    title: "CCTV Security",       desc: "24/7 surveillance for your peace of mind" },
  { icon: Armchair,  title: "Ergonomic Seating",   desc: "Premium chairs built for long study sessions" },
  { icon: Droplets,  title: "RO Drinking Water",   desc: "Hot and cold purified water dispenser, free" },
  { icon: Battery,   title: "Power Backup",        desc: "Uninterrupted power — inverter always on" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 relative border-t border-white/5" style={{ backgroundColor: "hsl(222 47% 7%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 inline-block relative">
              World-Class Facilities
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </h2>
            <p className="text-white/50 mt-6 text-base sm:text-lg">
              Everything you need to study smarter, longer, and better.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors group cursor-default"
              style={{ backgroundColor: "hsl(222 47% 11% / 0.6)", backdropFilter: "blur(8px)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20"
                style={{ backgroundColor: "hsl(217 91% 60% / 0.12)" }}
              >
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
