"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-cream border border-sage-deep/50"
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
      </div>
    </section>
  );
}
