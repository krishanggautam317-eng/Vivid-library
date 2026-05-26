import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ to, color }: { to: number; color: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    const c = animate(count, to, { duration: 2, ease: "easeOut" });
    return c.stop;
  }, [count, to]);
  return <motion.span style={{ color }}>{rounded}</motion.span>;
}

export default function SeatAvailability() {
  const [data] = useState({ total: 120, occupied: 84, available: 36 });
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const t = setInterval(() =>
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    , 60000);
    return () => clearInterval(t);
  }, []);

  const pct = Math.round((data.occupied / data.total) * 100);
  const r   = 100;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  const { statusColor, statusBg, statusLabel } =
    pct >= 80 ? { statusColor: "#EF4444", statusBg: "#FEF2F2", statusLabel: "Almost Full" }
  : pct >= 50 ? { statusColor: "#F59E0B", statusBg: "#FFFBEB", statusLabel: "Filling Up" }
  : { statusColor: "#10B981", statusBg: "#ECFDF5", statusLabel: "Plenty Available" };

  return (
    <section id="seats" className="py-20 sm:py-28" style={{ backgroundColor: "#fff" }}>
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
            Live Tracker
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#062B63" }}>
            Seat Availability
          </h2>
          <p className="text-base sm:text-lg" style={{ color: "#6B7280" }}>
            Updated live from our front desk. Last checked: {time}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Ring gauge */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center shrink-0"
            style={{ width: 260, height: 260 }}
          >
            <svg width="260" height="260" style={{ transform: "rotate(-90deg)" }}>
              <circle
                cx="130" cy="130" r={r}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="18"
              />
              <motion.circle
                cx="130" cy="130" r={r}
                fill="none"
                stroke={statusColor}
                strokeWidth="18"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circ }}
                whileInView={{ strokeDashoffset: offset }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ strokeDasharray: circ }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-5xl font-extrabold" style={{ color: "#062B63" }}>{pct}%</span>
              <span className="text-xs font-medium uppercase tracking-widest mt-1" style={{ color: "#9CA3AF" }}>Occupied</span>
              <span
                className="text-xs font-semibold mt-2.5 px-3 py-1 rounded-full"
                style={{ color: statusColor, backgroundColor: statusBg }}
              >
                {statusLabel}
              </span>
            </div>
          </motion.div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full max-w-xs lg:max-w-none lg:w-auto">
            {[
              { label: "Total Seats",  value: data.total,     color: "#062B63", border: "#E2E8F0",  bg: "#F9FAFB" },
              { label: "Occupied",     value: data.occupied,  color: "#F59E0B", border: "#FDE68A",  bg: "#FFFBEB" },
              { label: "Available",    value: data.available, color: "#10B981", border: "#A7F3D0",  bg: "#ECFDF5" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border p-5 flex items-center gap-5 lg:min-w-[260px]"
                style={{ backgroundColor: s.bg, borderColor: s.border }}
              >
                <span className="text-4xl font-extrabold tabular-nums">
                  <Counter to={s.value} color={s.color} />
                </span>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#374151" }}>{s.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>of {data.total} seats</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
