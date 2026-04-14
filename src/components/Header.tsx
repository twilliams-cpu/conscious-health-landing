"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Science", href: "#science" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-lg border-b border-sage-deep/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white text-sm font-bold">CH</span>
          </div>
          <span className="font-serif text-xl text-primary-dark">
            Conscious Health
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="btn-glow inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-light hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream/95 backdrop-blur-lg border-b border-sage-deep/50 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-slate hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="inline-flex items-center justify-center h-12 rounded-full bg-primary text-white font-semibold hover:bg-primary-light transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
