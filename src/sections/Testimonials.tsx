import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    quote: "Best library in Bilaspur! Got my CA rank here. The silent zone is strictly maintained.",
    role: "CA Finalist",
    initial: "P",
    color: "bg-blue-500"
  },
  {
    name: "Rahul Verma",
    quote: "AC, WiFi, peace — the perfect combo for UPSC prep. Worth every penny.",
    role: "UPSC Aspirant",
    initial: "R",
    color: "bg-purple-500"
  },
  {
    name: "Anjali Sahu",
    quote: "Monthly pass is worth every rupee. The chairs are super comfortable for long hours.",
    role: "NEET Aspirant",
    initial: "A",
    color: "bg-pink-500"
  },
  {
    name: "Deepak Kumar",
    quote: "Live seat tracker is genius. I check it every morning before leaving home.",
    role: "Engineering Student",
    initial: "D",
    color: "bg-emerald-500"
  },
  {
    name: "Neha Patel",
    quote: "Comfortable seats, great lighting. 10/10 study experience. Safe for girls.",
    role: "PG Student",
    initial: "N",
    color: "bg-orange-500"
  },
  {
    name: "Arjun Singh",
    quote: "I cleared my banking exams studying here. Highly recommend this place!",
    role: "Bank PO",
    initial: "A",
    color: "bg-indigo-500"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Hear from our Achievers
          </motion.h2>
          <p className="text-muted-foreground">Join a community of serious, focused students.</p>
        </div>
      </div>

      {/* Auto-scrolling carousel track */}
      <div className="relative w-full flex overflow-hidden">
        {/* Gradients to mask edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-6 px-6 w-[200%]"
        >
          {/* Duplicate array for seamless looping */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx} 
              className="w-[350px] shrink-0 p-6 rounded-2xl bg-card border border-white/10 flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/90 italic">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{t.name}</h4>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
