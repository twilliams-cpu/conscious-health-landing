"use client";

import { motion } from "framer-motion";
import { Shield, Stethoscope, FlaskConical, Truck } from "lucide-react";

const trustItems = [
  {
    icon: Stethoscope,
    title: "Board-Certified Physicians",
    description: "Every protocol designed and supervised by licensed doctors",
  },
  {
    icon: FlaskConical,
    title: "FDA-Registered Pharmacy",
    description: "Pharma-grade compounds from accredited US pharmacies",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your health data protected with enterprise-grade security",
  },
  {
    icon: Truck,
    title: "Discreet Home Delivery",
    description: "Temperature-controlled shipping direct to your door",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function TrustBar() {
  return (
    <section className="py-16 bg-white border-y border-sage-deep/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="flex items-start gap-4 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sage flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <item.icon
                  size={22}
                  className="text-primary group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
