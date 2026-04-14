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

export default function TrustBar() {
  return (
    <section className="py-16 bg-white border-y border-sage-deep/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sage flex items-center justify-center">
                <item.icon size={22} className="text-primary" />
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
        </div>
      </div>
    </section>
  );
}
