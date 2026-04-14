"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are peptides and how do they work?",
    answer:
      "Peptides are short chains of amino acids — the building blocks of proteins — that act as signaling molecules in your body. They tell your cells what to do: repair tissue, produce collagen, regulate appetite, or release growth hormone. As we age, natural peptide production declines. Peptide therapy supplements what your body already makes to restore optimal function.",
  },
  {
    question: "Is peptide therapy safe?",
    answer:
      "When prescribed by a licensed physician and sourced from an FDA-registered compounding pharmacy, peptide therapy has an excellent safety profile. Every Conscious Health patient receives a thorough medical evaluation before any protocol begins. We monitor your progress with regular check-ins and lab work to ensure safety and efficacy.",
  },
  {
    question: "Do I need to visit a doctor's office?",
    answer:
      "No. Conscious Health is a telehealth platform. Your health questionnaire, physician consultation, and ongoing care all happen remotely. Your peptides ship directly to your home from our pharmacy partner. If lab work is needed, we'll arrange a convenient local draw.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Results vary by protocol and individual. Many patients report noticeable improvements within 2-4 weeks. Recovery peptides like BPC-157 often show results sooner, while anti-aging and metabolic protocols may take 4-8 weeks to reach full effect. Your physician will set realistic expectations during your consultation.",
  },
  {
    question: "What makes Conscious Health different from other telehealth companies?",
    answer:
      "We're not a prescription mill. Every protocol is individually designed by a board-certified physician based on your complete health profile. We offer comprehensive peptide wellness — not just weight loss or a single peptide. And we provide ongoing physician support, not just a one-time consultation.",
  },
  {
    question: "Which states do you serve?",
    answer:
      "Conscious Health currently serves patients across most US states. Telehealth regulations vary by state, so coverage is expanding regularly. Complete our intake questionnaire and we'll confirm availability in your area immediately.",
  },
  {
    question: "Can I use insurance?",
    answer:
      "Peptide therapy is typically not covered by insurance as it falls under wellness optimization rather than treatment of a specific disease. However, you may be able to use HSA/FSA funds for your protocols. We provide detailed receipts for any eligible reimbursement.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-sage-deep/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-medium text-charcoal pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
            Questions?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
