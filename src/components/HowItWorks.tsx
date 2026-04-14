"use client";

import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Complete Your Health Profile",
    description:
      "Answer a comprehensive health questionnaire from home. Share your goals, medical history, and current wellness routine. Takes about 10 minutes.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Physician Consultation",
    description:
      "A board-certified physician reviews your profile, orders any necessary labs, and designs a personalized peptide protocol tailored to your biology and goals.",
  },
  {
    number: "03",
    icon: Package,
    title: "Receive & Begin",
    description:
      "Your pharma-grade peptides ship from an FDA-registered pharmacy directly to your door. Ongoing physician support ensures optimal results.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
            Simple Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            From first click to front door — your personalized wellness protocol
            in three simple steps.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-sage-deep via-accent/30 to-sage-deep" />
              )}
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-white border-2 border-sage-deep flex items-center justify-center shadow-sm group-hover:border-primary/30 group-hover:shadow-md transition-all duration-300">
                    <step.icon size={32} className="text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center shadow-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-slate leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
