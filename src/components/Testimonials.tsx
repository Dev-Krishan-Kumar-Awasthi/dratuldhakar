"use client";

import { Star, Quote, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  college: string;
  branch: string;
  quote: string;
  year: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Aman Sharma",
    college: "SGSITS Indore",
    branch: "Computer Science Engineering (CSE)",
    quote: "I was extremely nervous about choice locking for SGSITS. Dr. Atul Sir personally designed my preference order according to my JEE rank. I secured my dream CSE seat in Round 1!",
    year: "2024 Allotment",
  },
  {
    id: 2,
    name: "Priya Verma",
    college: "IET DAVV Indore",
    branch: "Information Technology (IT)",
    quote: "The College Coach predictor and Dr. Atul Sir's document guidance helped me get TFW fee waiver allotment. Saved my family huge tuition expenses!",
    year: "2025 Allotment",
  },
  {
    id: 3,
    name: "Rohan Patel",
    college: "JEC Jabalpur",
    branch: "Mechanical Engineering",
    quote: "During internal sliding, I was confused whether to upgrade. Sir guided me step-by-step and I successfully upgraded my branch without losing my original college slot.",
    year: "2024 Allotment",
  },
  {
    id: 4,
    name: "Shreya Saxena",
    college: "MITS Gwalior",
    branch: "Artificial Intelligence & Data Science",
    quote: "Dr. Atul Sir's 24x7 helpline answered every question my parents had during choice filling. Honest, direct, and zero extra charges. Highly recommended!",
    year: "2025 Allotment",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden pattern-grid">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 glow-emerald rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Trust & Impact</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Student Success Stories & Reviews
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 max-w-md mx-auto leading-relaxed">
            Real feedback from engineering aspirants mentored through MP DTE seat allotments.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between relative"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/15">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    <span>{item.year}</span>
                  </span>
                </div>

                <Quote className="w-8 h-8 text-indigo-500/20 mb-3" />

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/40 pt-4 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    {item.name}
                  </h4>
                  <div className="flex items-center text-xs font-semibold text-primary-600 dark:text-indigo-400">
                    <GraduationCap className="w-3.5 h-3.5 mr-1 shrink-0" />
                    <span>{item.college} — {item.branch}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
