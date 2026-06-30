"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  q: string;
  a: string;
}

const faqData: FAQItem[] = [
  {
    q: "What is the MP DTE B.Tech counselling process?",
    a: "It is the official state-level seat allotment process run by the Directorate of Technical Education, Madhya Pradesh, for admission into engineering, polytechnic, and pharmacy colleges across MP based on JEE Main CRL ranks and qualifying exams.",
  },
  {
    q: "How many rounds of counselling are conducted in MP DTE?",
    a: "DTE typically conducts two primary online rounds (Round 1 & Round 2), followed by an Internal Sliding option within admitted colleges, and finally College Level Counselling (CLC) spot rounds for vacant seats.",
  },
  {
    q: "Can candidates from outside Madhya Pradesh (Other State) participate?",
    a: "Yes. Other State candidates can register under the 'All India' (AI) quota seats based on their JEE Main Common Rank List (CRL) ranks.",
  },
  {
    q: "What is the Tuition Fee Waiver (TFW) seat category?",
    a: "TFW is a government scheme where the tuition fee is completely waived for top-merit students. Eligible candidates must have a valid MP Domicile and a annual family income under 8 Lakhs with verified income certificates.",
  },
  {
    q: "What is Choice Filling, and why is it critical?",
    a: "Choice filling is listing your preferred colleges and engineering branches in strict priority order. The automated system allocates seats downwards based on your list. A single order mistake can lock you into a lower preference college.",
  },
  {
    q: "Can I edit my choices after locking the choice filling list?",
    a: "No. Once you lock your preferences and submit, choices cannot be modified unless DTE officially re-opens an un-locking window during registration dates.",
  },
  {
    q: "What is the difference between CRL Rank and Category Rank during DTE allotment?",
    a: "DTE allocates seats based on the Common Rank List (CRL) rank while validating whether the candidate fits the reservation quota rules for OBC, SC, ST, EWS, or Female seats.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Knowledge Base</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            Essential admissions rules, choice filling guidelines, and DTE seat allocation answers.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center">
                    <HelpCircle className="w-4 h-4 mr-3 text-primary-500 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary-500" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
