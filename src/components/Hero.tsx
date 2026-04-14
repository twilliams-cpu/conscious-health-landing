"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = (now - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Corner gradient splashes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left sage/emerald splash */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary-light/15 to-transparent blur-3xl" />
        {/* Top-right gold splash */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-accent/15 via-accent-light/10 to-transparent blur-3xl" />
        {/* Bottom-left gold/warm splash */}
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-accent/12 via-accent-light/8 to-transparent blur-3xl" />
        {/* Bottom-right sage splash */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-primary/15 via-sage-deep/20 to-transparent blur-3xl" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-accent/30 animate-float" />
        <div className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-primary-light/40 animate-float-slow" />
        <div className="absolute bottom-1/3 left-[20%] w-4 h-4 rounded-full bg-accent-light/20 animate-float-delay" />
        <div className="absolute top-[60%] right-[10%] w-2.5 h-2.5 rounded-full bg-primary/25 animate-float" />
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
            <span className="text-gradient">We give it the tools.</span>
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
              className="btn-glow group inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary-light hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Get Your Personalized Protocol
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border-2 border-primary/20 text-primary font-semibold text-lg hover:border-primary/40 hover:bg-sage/50 hover:scale-105 transition-all duration-300"
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
              <span className="text-2xl font-bold text-charcoal">
                <AnimatedCounter target={5000} suffix="+" />
              </span>
              <span className="text-sm">Patients Served</span>
            </div>
            <div className="w-px h-10 bg-sage-deep" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-charcoal">
                <AnimatedCounter target={50} suffix="+" duration={1.5} />
              </span>
              <span className="text-sm">States Covered</span>
            </div>
            <div className="w-px h-10 bg-sage-deep" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-charcoal">
                <AnimatedCounter target={98} suffix="%" duration={1.8} />
              </span>
              <span className="text-sm">Satisfaction Rate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
