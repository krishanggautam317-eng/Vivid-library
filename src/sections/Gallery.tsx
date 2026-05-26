import { motion } from "framer-motion";

const images = [
  { src: "/gallery-1.png", label: "Main Study Hall",   span: "lg:col-span-2" },
  { src: "/gallery-2.png", label: "Reading Lounge",    span: "" },
  { src: "/gallery-3.png", label: "Individual Desks",  span: "" },
  { src: "/gallery-4.png", label: "Silent Zone",       span: "lg:col-span-2" },
  { src: "/gallery-5.png", label: "AC Hall",           span: "" },
  { src: "/gallery-6.png", label: "Evening Ambiance",  span: "" },
  { src: "/gallery-7.png", label: "Study Pods",        span: "" },
  { src: "/gallery-8.png", label: "Common Area",       span: "" },
  { src: "/gallery-9.png", label: "Night View",        span: "" },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item      = { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28" style={{ backgroundColor: "#F5F7FB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#062B63" }}>
            The Study Environment
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            Premium aesthetics designed for absolute focus and comfort.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
              className={`relative overflow-hidden rounded-2xl group bg-gray-100 ${img.span}`}
              style={{
                aspectRatio: "4/3",
                boxShadow: "0 1px 3px rgba(6,43,99,0.08)",
              }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover label */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(6,43,99,0.65) 0%, transparent 60%)" }}
              >
                <span className="text-white text-sm font-semibold">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
