"use client";

import { motion } from "framer-motion";
import { Dna, Microscope, BookOpen, TrendingUp } from "lucide-react";

const points = [
  {
    icon: Dna,
    title: "Naturally Occurring Signaling Molecules",
    description:
      "Peptides are short chains of amino acids that your body already produces. We supplement what declines with age to restore optimal function.",
  },
  {
    icon: Microscope,
    title: "Decades of Clinical Research",
    description:
      "From BPC-157's tissue repair properties to GLP-1 agonists' metabolic benefits — these aren't trends. They're backed by peer-reviewed science.",
  },
  {
    icon: BookOpen,
    title: "Physician-Designed Protocols",
    description:
      "No one-size-fits-all. Your protocol is built around your labs, health history, and goals by a physician who specializes in peptide therapy.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Outcomes",
    description:
      "Regular check-ins and lab work track your progress. We adjust protocols based on real data — not guesswork.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const pointVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function Science() {
  return (
    <section id="science" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
              The Science
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Why Peptide Therapy Works
            </h2>
            <p className="text-lg text-slate leading-relaxed mb-8">
              Peptides aren&apos;t synthetic drugs — they&apos;re bioidentical
              signaling molecules that work with your body&apos;s existing
              systems. As we age, natural peptide production declines. Targeted
              supplementation restores what time takes away.
            </p>
            <div className="p-6 rounded-2xl bg-sage/50 border border-sage-deep hover:shadow-md transition-shadow duration-300">
              <p className="text-primary-dark font-medium italic">
                &ldquo;Peptide therapy represents one of the most promising
                frontiers in personalized medicine — working at the cellular
                level to optimize the body&apos;s natural healing and
                regenerative processes.&rdquo;
              </p>
              <p className="text-sm text-muted mt-3">
                — Board-Certified Physician, Conscious Health Medical Team
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {points.map((point) => (
              <motion.div
                key={point.title}
                variants={pointVariants}
                className="flex gap-4 p-5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sage flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <point.icon
                    size={22}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
