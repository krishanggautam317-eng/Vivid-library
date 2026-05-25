import { motion } from "framer-motion";

const images = [
  { src: "/gallery-1.png", label: "Main Study Hall" },
  { src: "/gallery-2.png", label: "Reading Lounge" },
  { src: "/gallery-3.png", label: "Individual Desks" },
  { src: "/gallery-4.png", label: "Silent Zone" },
  { src: "/gallery-5.png", label: "AC Hall" },
  { src: "/gallery-6.png", label: "Evening Ambiance" },
  { src: "/gallery-7.png", label: "Study Pods" },
  { src: "/gallery-8.png", label: "Common Area" },
  { src: "/gallery-9.png", label: "Night View" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 relative border-t border-white/5" style={{ backgroundColor: "hsl(222 47% 7%)" }}>
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
              The Study Environment
            </h2>
            <p className="text-white/50 text-base sm:text-lg">
              Premium aesthetics designed for absolute focus.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ aspectRatio: "4/3", backgroundColor: "hsl(222 47% 11%)" }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  const parent = t.parentElement;
                  if (parent) {
                    parent.style.background = "linear-gradient(135deg, hsl(222 47% 13%), hsl(222 47% 18%))";
                    const label = document.createElement("div");
                    label.className = "absolute inset-0 flex items-center justify-center text-white/30 text-sm font-medium";
                    label.textContent = img.label;
                    parent.appendChild(label);
                  }
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
