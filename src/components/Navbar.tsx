import { useState, useEffect } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Seats", href: "#seats" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "hsl(222 47% 7% / 0.9)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-colors">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Gyan<span className="text-primary">Sarovar</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/917987654321"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200"
              style={{ boxShadow: "0 0 20px hsl(217 91% 60% / 0.3)" }}
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/10 overflow-hidden"
            style={{ backgroundColor: "hsl(222 47% 7% / 0.98)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-3 py-3 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/917987654321"
                target="_blank"
                rel="noreferrer"
                className="mt-3 text-center px-5 py-3 text-sm font-semibold text-white bg-primary rounded-xl transition-all"
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
