import { useState, useEffect } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Features", href: "#features" },
  { name: "Seats",    href: "#seats" },
  { name: "Pricing",  href: "#pricing" },
  { name: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 #e2e8f0, 0 4px 16px rgba(6,43,99,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105"
              style={{ backgroundColor: "#0A4DAD", boxShadow: "0 2px 8px rgba(10,77,173,0.3)" }}
            >
              <BookOpen className="w-4.5 h-4.5 text-white" style={{ width: "18px", height: "18px" }} />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: "#062B63" }}>
              Gyan<span style={{ color: "#0A4DAD" }}>Sarovar</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-blue"
                style={{ color: "#4B5563" }}
              >
                {l.name}
              </a>
            ))}
            <a
              href="https://wa.me/917987654321"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#0A4DAD",
                boxShadow: "0 2px 8px rgba(10,77,173,0.3)",
              }}
            >
              Join Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
            style={{ color: "#062B63" }}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t"
            style={{ backgroundColor: "#fff", borderColor: "#E2E8F0" }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
                  style={{ color: "#374151" }}
                >
                  {l.name}
                </a>
              ))}
              <a
                href="https://wa.me/917987654321"
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-center px-5 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: "#0A4DAD" }}
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
