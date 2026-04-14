"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sage/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-primary text-sm font-semibold mb-6 tracking-wide uppercase">
              Physician-Guided Peptide Wellness
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-6"
          >
            Your body knows how to heal.{" "}
            <span className="text-primary">We give it the tools.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Personalized peptide protocols designed by board-certified physicians.
            From recovery and vitality to skin health and metabolic optimization —
            science-backed wellness delivered to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#get-started"
              className="group inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Get Your Personalized Protocol
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border-2 border-primary/20 text-primary font-semibold text-lg hover:border-primary/40 hover:bg-sage/50 transition-all"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex items-center justify-center gap-8 md:gap-12 text-muted"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-charcoal">5,000+</span>
              <span className="text-sm">Patients Served</span>
            </div>
            <div className="w-px h-10 bg-sage-deep" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-charcoal">50+</span>
              <span className="text-sm">States Covered</span>
            </div>
            <div className="w-px h-10 bg-sage-deep" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-charcoal">98%</span>
              <span className="text-sm">Satisfaction Rate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
