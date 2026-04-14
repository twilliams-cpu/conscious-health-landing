"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    category: "Recovery",
    quote:
      "After years of chronic joint pain, my BPC-157 protocol changed everything. I'm back to training five days a week. The physician support was incredible — they adjusted my protocol based on my progress every month.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Denver, CO",
    category: "Metabolic",
    quote:
      "I'd tried every diet. With my personalized GLP-1 protocol and the physician monitoring, I lost 40 pounds in 6 months without the crash dieting cycle. This feels sustainable.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Miami, FL",
    category: "Anti-Aging",
    quote:
      "The GHK-Cu protocol has transformed my skin. My dermatologist asked what I'd changed. But what I really appreciate is how thorough the intake was — they looked at my full health picture, not just one complaint.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
            Real Results
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Thousands of patients trust Conscious Health with their wellness journey.
          </p>
        </motion.div>

        {/* Desktop: grid view */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-cream border border-sage-deep/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-slate leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-sm text-muted">{t.location}</p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-sage text-primary text-xs font-medium">
                  {t.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel view */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl min-h-[320px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-8 rounded-2xl bg-cream border border-sage-deep/50"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, j) => (
                      <Star
                        key={j}
                        size={18}
                        className="text-accent fill-accent"
                      />
                    )
                  )}
                </div>
                <p className="text-slate leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-charcoal">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-muted">
                      {testimonials[current].location}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-sage text-primary text-xs font-medium">
                    {testimonials[current].category}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-sage-deep flex items-center justify-center text-slate hover:bg-sage hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-6"
                      : "bg-sage-deep hover:bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-sage-deep flex items-center justify-center text-slate hover:bg-sage hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
