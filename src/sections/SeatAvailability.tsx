import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ from, to }: { from: number; to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}

export default function SeatAvailability() {
  // In a real implementation, you would fetch from Google Sheets CSV:
  // const SHEET_URL = "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0";
  // Replace YOUR_SHEET_ID with actual ID
  
  const [data, setData] = useState({
    total: 120,
    occupied: 84,
    available: 36,
    lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });

  const percentage = (data.occupied / data.total) * 100;
  
  // Color coding
  let statusColor = "#22c55e"; // Green (< 50%)
  if (percentage >= 80) statusColor = "#ef4444"; // Red (> 80%)
  else if (percentage >= 50) statusColor = "#eab308"; // Yellow (50-80%)

  const circleRadius = 120;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (percentage / 100) * circleCircumference;

  return (
    <section id="seats" className="py-24 bg-background/50 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Live Seat Availability
          </motion.h2>
          <p className="text-muted-foreground">Auto-updates from our front desk.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Circular Progress */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative w-[300px] h-[300px] flex items-center justify-center"
          >
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="150"
                cy="150"
                r={circleRadius}
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="24"
              />
              {/* Progress circle */}
              <motion.circle
                initial={{ strokeDashoffset: circleCircumference }}
                whileInView={{ strokeDashoffset }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
                cx="150"
                cy="150"
                r={circleRadius}
                fill="none"
                stroke={statusColor}
                strokeWidth="24"
                strokeLinecap="round"
                style={{
                  strokeDasharray: circleCircumference,
                  filter: `drop-shadow(0 0 12px ${statusColor}66)`
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-white tracking-tighter">
                {Math.round(percentage)}%
              </span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Occupied</span>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-white/10 flex flex-col items-center justify-center min-w-[160px]"
            >
              <span className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Total</span>
              <span className="text-4xl font-bold text-white"><Counter from={0} to={data.total} /></span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-white/10 flex flex-col items-center justify-center"
            >
              <span className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Occupied</span>
              <span className="text-4xl font-bold text-white"><Counter from={0} to={data.occupied} /></span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-primary/10 border border-primary/30 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 blur-xl" />
              <span className="text-primary text-sm uppercase tracking-wider mb-2 relative z-10">Available</span>
              <span className="text-4xl font-bold text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] relative z-10">
                <Counter from={0} to={data.available} />
              </span>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-muted-foreground">
          Last updated: {data.lastUpdated}
        </div>
      </div>
    </section>
  );
}
