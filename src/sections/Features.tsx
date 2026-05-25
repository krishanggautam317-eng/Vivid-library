import { motion } from "framer-motion";
import { Wind, Wifi, VolumeX, Zap, Shield, Armchair, Droplets, Battery } from "lucide-react";

const features = [
  { icon: Wind, title: "AC Study Hall", desc: "Climate-controlled environment for optimal focus" },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Seamless 5G connectivity for online classes" },
  { icon: VolumeX, title: "Silent Environment", desc: "Strictly enforced zero-noise policy" },
  { icon: Zap, title: "Charging Ports", desc: "Individual power sockets at every desk" },
  { icon: Shield, title: "CCTV Security", desc: "24/7 surveillance for your safety" },
  { icon: Armchair, title: "Comfortable Seating", desc: "Ergonomic chairs for long study sessions" },
  { icon: Droplets, title: "Drinking Water", desc: "RO purified hot and cold water dispenser" },
  { icon: Battery, title: "Power Backup", desc: "Uninterrupted power supply with inverter" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative"
          >
            World-Class Facilities
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-white/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
