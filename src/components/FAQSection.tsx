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
    q: "What is Dr. Atul Dhakar's area of research?",
    a: "His primary research area is fault diagnosis of reciprocating air compressor systems using signal processing techniques (LMD, EMD) and machine learning classifiers (SVM, K-NN, J48, LDA, QDA). He has also published work on solar water distillation using phase change materials.",
  },
  {
    q: "Where is Dr. Atul Dhakar currently working?",
    a: "He is an Assistant Professor at UIT-RGPV Shivpuri, Madhya Pradesh, since 8 September 2025. He also heads the Research & Innovation Cell at the institute.",
  },
  {
    q: "What are his academic qualifications?",
    a: "Ph.D. in Mechanical Engineering from JUET Guna (2025, 9.08 CGPA), M.Tech in Thermal Systems & Design from ShriRam College Gwalior (2016, 7.83 CGPA with Honours), B.E. in Mechanical Engineering from SDBCE Indore (2010), and currently pursuing Second M.Tech in Artificial intelligence & Data Science at IIIT Ranchi.",
  },
  {
    q: "How many research papers has he published?",
    a: "He has published 11 research papers: 3 SCI indexed, 1 E-SCI, 3 Scopus indexed, 1 book chapter (Scopus), and 3 UGC-approved journal papers. His Ph.D. thesis is available on Shodhganga.",
  },
  {
    q: "What subjects does he teach?",
    a: "He teaches Engineering Graphics, Basic Mechanical Engineering, Thermodynamics, Heat & Mass Transfer, Fluid Mechanics, Theory of Machines, Strength of Materials, Mechanical Vibration, and Material Technology.",
  },
  {
    q: "What patents has he filed?",
    a: "He has four published design patents (Serving Robot, Sprayer Robot, Carrier Lifting Robot, Fire Fighting Robot) and two more applications under process (484785-001 and 469219-001).",
  },
  {
    q: "How can I collaborate on research?",
    a: "You can reach Dr. Atul Dhakar via email at dratuldhakar@gmail.com or phone at +91 9179176554. His ORCID ID is 0000-0003-3457-4662 and Scopus Author ID is 58866418000.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="section-header">
          <h2 className="section-eyebrow">FAQ</h2>
          <p className="section-title">Frequently Asked Questions</p>
          <p className="section-desc">Common questions about Dr. Atul Dhakar&apos;s academic profile and research.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                suppressHydrationWarning
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 pr-4">{item.q}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 pl-14 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
