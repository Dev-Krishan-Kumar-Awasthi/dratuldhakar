"use client";

import { useState } from "react";
import { Cpu, Settings, Wrench, Shield, Clipboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  level: number;
  desc?: string;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    id: "mechanical",
    label: "Mechanical Engineering",
    icon: Wrench,
    description: "Core subjects I teach and research in mechanical engineering.",
    skills: [
      { name: "Thermodynamics & Heat Transfer", level: 95, desc: "Thermal systems, solar distillation, heat transfer design." },
      { name: "Fluid Mechanics", level: 90, desc: "Fluid flow, hydraulic systems, and fluid behavior analysis." },
      { name: "Mechanical Vibration & TOM", level: 92, desc: "Machine vibrations, theory of machines, and dynamics." },
      { name: "Engineering Graphics & Drawing", level: 95, desc: "CAD/CAM, technical drawing, and projection geometry." },
      { name: "Strength of Materials (SOM)", level: 88, desc: "Stress, strain, and structural strength analysis." },
      { name: "Internal Combustion Engines", level: 85, desc: "Engine cycles, combustion, and IC engine efficiency." },
    ],
  },
  {
    id: "ai-ds",
    label: "AI & Data Science",
    icon: Cpu,
    description: "Machine learning and signal processing skills from my Ph.D. research and M.Tech studies.",
    skills: [
      { name: "Signal Processing (LMD, EMD)", level: 92, desc: "Feature extraction from machine vibration signals." },
      { name: "Machine Learning Classifiers", level: 90, desc: "SVM, K-NN, J48 Decision Tree, LDA, QDA, Logistic Regression." },
      { name: "Fault Diagnosis", level: 95, desc: "Finding faults in reciprocating air compressors using AI." },
      { name: "Statistical Data Analysis", level: 88, desc: "Regression, variance testing, and data evaluation." },
      { name: "WEKA Data Mining", level: 90, desc: "Testing and comparing machine learning algorithms." },
    ],
  },
  {
    id: "software",
    label: "Software & Tools",
    icon: Settings,
    description: "Software I use for research, teaching, and engineering work.",
    skills: [
      { name: "MATLAB & Simulink", level: 95, desc: "Research scripts, signal processing, and modeling." },
      { name: "LaTeX", level: 90, desc: "Writing and formatting research papers." },
      { name: "Master CAM", level: 82, desc: "Computer-aided manufacturing and CNC programming." },
      { name: "AutoCAD", level: 85, desc: "Engineering drawings and CAD design." },
    ],
  },
  {
    id: "leadership",
    label: "Academic Leadership",
    icon: Clipboard,
    description: "Administrative and leadership roles I handle at college level.",
    skills: [
      { name: "Research Cell Management", level: 95, desc: "Leading Research & Innovation Cell at UIT-RGPV Shivpuri." },
      { name: "Exam Superintendence", level: 92, desc: "Assistant Exam Superintendent for RGPV university exams." },
      { name: "Workshop & Event Planning", level: 90, desc: "Organizing expert talks, workshops, seminars, and industrial visits." },
      { name: "Training & Placement", level: 88, desc: "Training & Placement Department Representative at UIT-RGPV Shivpuri." },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("mechanical");

  const currentCategory = skillsData.find((cat) => cat.id === activeCategory)!;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow">My Skills</span>
          <h2 className="section-title">What I Know &amp; Teach</h2>
          <p className="section-desc mt-3">
            My skills come from 13+ years of teaching, Ph.D. research, and continuous learning through academic workshops and courses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50">
              <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-200">Skill Areas</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Click on an area to see my skills in detail.
              </p>

              <div className="flex flex-col space-y-2">
                {skillsData.map((cat) => {
                  const CatIcon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      suppressHydrationWarning
                      className={`w-full text-left p-4 rounded-2xl flex items-center space-x-4 transition-all duration-300 relative cursor-pointer focus:outline-none ${
                        isActive
                          ? "text-primary-600 dark:text-indigo-300 font-bold"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                      }`}
                    >
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

          <div className="lg:col-span-8">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 min-h-[420px] flex flex-col justify-between">
              
              <div>
                <div className="border-b border-slate-100 dark:border-slate-800/40 pb-6 mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                    {currentCategory.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {currentCategory.description}
                  </p>
                </div>

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
                              <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                                {skill.desc}
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-extrabold text-indigo-500 font-mono">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary-500 via-primary-600 to-accent-emerald rounded-full shadow-[0_0_8px_rgba(99,102,241,0.2)]"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/40 pt-6 mt-8 flex items-center space-x-2 text-xs font-semibold text-slate-400">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Built through 13+ years of teaching, research, and professional development.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
