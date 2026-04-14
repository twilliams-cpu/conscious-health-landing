"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, HeartPulse } from "lucide-react";

export default function CTA() {
  return (
    <section id="get-started" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-light/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl" />
        {/* Floating accent dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-accent-light/30 animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/10 animate-float-slow" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ready to Optimize Your Health?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward personalized peptide wellness. Complete
            your health profile in 10 minutes and a physician will design your
            custom protocol.
          </p>

          <a
            href="#"
            className="group inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-primary font-bold text-lg hover:bg-cream hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-black/10"
          >
            Get Your Personalized Protocol
            <ArrowRight
              size={22}
              className="ml-3 group-hover:translate-x-1 transition-transform"
            />
          </a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-white/70"
          >
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span className="text-sm">10-Minute Intake</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartPulse size={18} />
              <span className="text-sm">Physician Review in 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={18} />
              <span className="text-sm">HIPAA Secure</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
