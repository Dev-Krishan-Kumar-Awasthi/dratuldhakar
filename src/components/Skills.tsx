"use client";

import { useState } from "react";
import { Cpu, Settings, Wrench, Shield, Clipboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  level: number; // percentage
  desc?: string;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: any;
  description: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    id: "mechanical",
    label: "Mechanical Core",
    icon: Wrench,
    description: "In-depth teaching and structural analysis expertise in classical mechanical systems.",
    skills: [
      { name: "Thermodynamics & Heat Transfer (HMT)", level: 95, desc: "Thermal system design, solar distillation modeling." },
      { name: "Fluid Mechanics (FM) & Dynamics", level: 90, desc: "Fluid behavior calculations, hydraulic structures." },
      { name: "Mechanical Vibration & TOM", level: 92, desc: "Reciprocating machinery vibrations, structural resonance." },
      { name: "Engineering Graphics (ED) & Drawing", level: 95, desc: "CAD/CAM preparation, projection geometry." },
      { name: "Strength of Materials (SOM)", level: 88, desc: "Stress-strain mechanics, structural failure limits." },
      { name: "Internal Combustion (I.C.) Engines", level: 85, desc: "Combustion cycles, emissions, and IC efficiency." },
    ],
  },
  {
    id: "ai-ds",
    label: "AI & Data Science",
    icon: Cpu,
    description: "Bridging classical systems with intelligent predictive algorithms and data modeling.",
    skills: [
      { name: "Signal Processing (LMD, EMD)", level: 92, desc: "Local Mean Decomposition, Fourier transforms for feature extraction." },
      { name: "Machine Learning Classifiers", level: 90, desc: "SVM, K-NN, J48 Decision Tree, LDA, QDA." },
      { name: "Fault Diagnosis & Predictive Maintenance", level: 95, desc: "Reciprocating air compressor diagnostics." },
      { name: "Statistical Data Analysis", level: 88, desc: "Regression systems, variance testing, feature evaluation." },
      { name: "WEKA Data Mining", level: 90, desc: "Algorithmic validation, data cleaning, classifier comparison." },
    ],
  },
  {
    id: "software",
    label: "Software & Tools",
    icon: Settings,
    description: "Scientific and engineering software environments utilized for modeling and documentation.",
    skills: [
      { name: "MATLAB & Simulink", level: 95, desc: "Custom diagnostics scripts, mathematical modelling solvers." },
      { name: "LaTeX Scientific Typesetting", level: 90, desc: "Research paper drafting, formatting templates." },
      { name: "Master CAM", level: 82, desc: "Computer-aided manufacturing pathways, CNC setups." },
      { name: "Python / Data Libraries", level: 80, desc: "Data processing, scientific scripting (pandas, numpy)." },
    ],
  },
  {
    id: "leadership",
    label: "Academic Leadership",
    icon: Clipboard,
    description: "Administrative and coordination skills representing leadership at college levels.",
    skills: [
      { name: "Research Cell Management", level: 95, desc: "In charge of Research & Innovation Cell at UIT-RGPV." },
      { name: "Exam Superintendence", level: 92, desc: "Assistant Exam Superintendent for university semester audits." },
      { name: "Student Counselling & Advising", level: 95, desc: "Counseling Coordinator for 5+ years at SVCE & SKITM." },
      { name: "Event & FDP Co-ordination", level: 90, desc: "Organizing expert talks, workshops, and industrial visits." },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("mechanical");

  const currentCategory = skillsData.find((cat) => cat.id === activeCategory)!;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Skills & Expertise</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical & Professional Capabilities
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Category Selector */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
              <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-200">Domain Areas</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Select a research or technical focus area to view specific capabilities.
              </p>

              {/* Selector List */}
              <div className="flex flex-col space-y-2">
                {skillsData.map((cat) => {
                  const CatIcon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left p-4 rounded-2xl flex items-center space-x-4 transition-all duration-300 relative cursor-pointer focus:outline-none ${
                        isActive
                          ? "text-primary-600 dark:text-indigo-300 font-bold"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                      }`}
                    >
                      {/* Active highlight pill */}
                      {isActive && (
                        <motion.div
                          layoutId="activeSkillBg"
                          className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-indigo-500/5 dark:from-indigo-500/15 dark:to-indigo-500/5 border-l-4 border-primary-500 rounded-2xl"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative z-10 ${
                        isActive 
                          ? "bg-primary-500/10 dark:bg-indigo-500/20 text-primary-500 dark:text-indigo-400" 
                          : "bg-slate-100 dark:bg-slate-800/50 text-slate-400"
                      }`}>
                        <CatIcon className="w-5 h-5" />
                      </div>
                      <span className="text-sm tracking-wide relative z-10">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Skills List */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 min-h-[420px] flex flex-col justify-between">
              
              <div>
                {/* Category Header */}
                <div className="border-b border-slate-100 dark:border-slate-800/40 pb-6 mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                    {currentCategory.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {currentCategory.description}
                  </p>
                </div>

                {/* Progress bars list */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {currentCategory.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <div>
                            <span className="block text-sm font-bold text-slate-700 dark:text-slate-200">
                              {skill.name}
                            </span>
                            {skill.desc && (
                              <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-medium">
                                {skill.desc}
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-extrabold text-indigo-500 font-mono">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Verified Badge */}
              <div className="border-t border-slate-100 dark:border-slate-800/40 pt-6 mt-8 flex items-center space-x-2 text-xs font-semibold text-slate-400">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Validated by 13+ years of academic and project achievements.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
