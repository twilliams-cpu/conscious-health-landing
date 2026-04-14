"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Heart,
  Sparkles,
  Scale,
  Brain,
  Moon,
} from "lucide-react";

const categories = [
  {
    icon: Zap,
    title: "Recovery & Performance",
    description:
      "Accelerate tissue repair, reduce inflammation, and bounce back faster from training and injury.",
    peptides: ["BPC-157", "TB-500"],
    color: "bg-emerald-50 text-emerald-700",
    iconBg: "bg-emerald-100",
    hoverBorder: "hover:border-emerald-300",
    glowColor: "group-hover:shadow-emerald-100",
  },
  {
    icon: Scale,
    title: "Metabolic Optimization",
    description:
      "Support healthy weight management and metabolic function with physician-supervised protocols.",
    peptides: ["Tirzepatide", "Semaglutide"],
    color: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-100",
    hoverBorder: "hover:border-blue-300",
    glowColor: "group-hover:shadow-blue-100",
  },
  {
    icon: Sparkles,
    title: "Skin & Anti-Aging",
    description:
      "Promote collagen synthesis, improve skin elasticity, and support cellular regeneration from within.",
    peptides: ["GHK-Cu", "Epithalon"],
    color: "bg-amber-50 text-amber-700",
    iconBg: "bg-amber-100",
    hoverBorder: "hover:border-amber-300",
    glowColor: "group-hover:shadow-amber-100",
  },
  {
    icon: Heart,
    title: "Vitality & Energy",
    description:
      "Optimize growth hormone levels naturally for improved energy, sleep quality, and overall wellness.",
    peptides: ["CJC-1295", "Ipamorelin"],
    color: "bg-rose-50 text-rose-700",
    iconBg: "bg-rose-100",
    hoverBorder: "hover:border-rose-300",
    glowColor: "group-hover:shadow-rose-100",
  },
  {
    icon: Brain,
    title: "Cognitive Function",
    description:
      "Support mental clarity, focus, and neuroprotection with targeted peptide therapies.",
    peptides: ["Selank", "Semax"],
    color: "bg-violet-50 text-violet-700",
    iconBg: "bg-violet-100",
    hoverBorder: "hover:border-violet-300",
    glowColor: "group-hover:shadow-violet-100",
  },
  {
    icon: Moon,
    title: "Sleep & Stress",
    description:
      "Improve sleep architecture and manage stress response for deeper recovery and resilience.",
    peptides: ["DSIP", "Selank"],
    color: "bg-indigo-50 text-indigo-700",
    iconBg: "bg-indigo-100",
    hoverBorder: "hover:border-indigo-300",
    glowColor: "group-hover:shadow-indigo-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
            Personalized Protocols
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Wellness, Your Way
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Whether you&apos;re optimizing performance, managing weight, or
            investing in longevity — we design protocols around your specific
            goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className={`group relative p-8 rounded-2xl border border-sage-deep/50 ${cat.hoverBorder} hover:shadow-xl ${cat.glowColor} transition-all duration-300 bg-cream hover:-translate-y-1`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${cat.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <cat.icon size={26} className={cat.color.split(" ")[1]} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {cat.title}
              </h3>
              <p className="text-slate leading-relaxed mb-4">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.peptides.map((p) => (
                  <span
                    key={p}
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${cat.color}`}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
