import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ to }: { to: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    const c = animate(count, to, { duration: 2, ease: "easeOut" });
    return c.stop;
  }, [count, to]);
  return <motion.span>{rounded}</motion.span>;
}

export default function SeatAvailability() {
  const [data] = useState({ total: 120, occupied: 84, available: 36 });
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const t = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 60000);
    return () => clearInterval(t);
  }, []);

  const pct = (data.occupied / data.total) * 100;
  const r = 110;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  const statusColor = pct >= 80 ? "#ef4444" : pct >= 50 ? "#eab308" : "#22c55e";
  const statusLabel = pct >= 80 ? "Almost Full" : pct >= 50 ? "Filling Up" : "Plenty Available";

  return (
    <section id="seats" className="py-20 sm:py-28 relative border-t border-white/5" style={{ backgroundColor: "hsl(222 47% 7%)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Live Seat Availability
            </h2>
            <p className="text-white/50 text-base sm:text-lg">
              Updated in real-time from our front desk.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center shrink-0"
          >
            <svg className="w-full h-full -rotate-90" viewBox="0 0 260 260">
              <circle cx="130" cy="130" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="20" />
              <motion.circle
                cx="130" cy="130" r={r}
                fill="none"
                stroke={statusColor}
                strokeWidth="20"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circ }}
                whileInView={{ strokeDashoffset: offset }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                  strokeDasharray: circ,
                  filter: `drop-shadow(0 0 10px ${statusColor}88)`,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-5xl font-bold text-white tracking-tight">{Math.round(pct)}%</span>
              <span className="text-xs text-white/40 uppercase tracking-widest mt-1">Occupied</span>
              <span className="text-xs font-medium mt-2 px-3 py-1 rounded-full" style={{ color: statusColor, backgroundColor: `${statusColor}22` }}>
                {statusLabel}
              </span>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full lg:w-auto lg:grid-cols-1 lg:gap-4">
            {[
              { label: "Total Seats", value: data.total, color: "text-white", accent: false },
              { label: "Occupied", value: data.occupied, color: "text-white", accent: false },
              { label: "Available", value: data.available, color: "text-primary", accent: true },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 sm:p-6 rounded-2xl border flex flex-col items-center lg:items-start lg:flex-row lg:items-center lg:gap-6 min-w-0 lg:min-w-[240px]"
                style={{
                  backgroundColor: stat.accent ? "hsl(217 91% 60% / 0.08)" : "hsl(222 47% 11%)",
                  borderColor: stat.accent ? "hsl(217 91% 60% / 0.3)" : "hsl(222 47% 18% / 0.8)",
                }}
              >
                <span className={`text-3xl sm:text-4xl font-bold tracking-tight ${stat.color}`}>
                  <Counter to={stat.value} />
                </span>
                <span className="text-xs sm:text-sm text-white/40 uppercase tracking-wider mt-1 lg:mt-0">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-white/30 mt-10">Last updated: {time}</p>
      </div>
    </section>
  );
}
