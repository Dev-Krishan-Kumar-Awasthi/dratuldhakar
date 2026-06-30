"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Calendar, Award, Building, Book } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  tenure: string;
  details?: string[];
  extraInfo?: string;
}

const experienceData: TimelineItem[] = [
  {
    id: 1,
    title: "Assistant Professor",
    subtitle: "UIT-RGPV, Shivpuri",
    duration: "Working (Since Sept 2025)",
    tenure: "8 Sept. 2025 – Till Now",
    details: [
      "In charge Research & Innovation Cell – Institute Level.",
      "Assistant Exam Superintendent (RGPV Exam).",
      "Coordinate Department Level Activities: Research & Innovation Activities, Conduction of Workshops/Seminars/Conferences, and student visits.",
      "Time-Table Coordinator (Department Level).",
      "Training & Placement Department Representative.",
      "Lab In charge: Internal Combustion (I.C.) Engine, Basic Mechanical Engineering (BME), and Engineering Drawing.",
      "Subjects Taught: Engineering Graphics, Theory of Machines (TOM), Strength of Materials (SOM), and Mechanical Vibration.",
    ],
  },
  {
    id: 2,
    title: "Assistant Professor",
    subtitle: "SKITM, Indore",
    duration: "3 Years, 3 Months",
    tenure: "Feb 2021 – July 2024",
    details: [
      "Counseling Coordinator: Coordinated student counseling, MPDTE registration, and reporting processes.",
      "Organized expert lectures, workshops, and industrial visits for students and faculty.",
      "Guided students on career development and explored diverse career opportunities.",
      "Designed and created the official college brochure and promotional banners.",
    ],
  },
  {
    id: 3,
    title: "Assistant Professor",
    subtitle: "SVCE, Indore",
    duration: "3 Years, 9 Months",
    tenure: "Mar 2017 – Dec 2020",
    details: [
      "Counseling Coordinator: Managed counseling department operations and enrollment services.",
      "Served as Faculty Advisor for the Eco-Kart Race team (2018, 2019) at SVCE, Indore.",
      "Mentored assistant teachers and new hires to enhance their work and instruction efficiency.",
      "Arranged campus visits for school students to promote technical education interest.",
    ],
  },
  {
    id: 4,
    title: "Assistant Professor",
    subtitle: "GICTS Group of College, Gwalior",
    duration: "2 Years",
    tenure: "Nov 2014 - Nov 2016",
    details: [
      "Delivered undergraduate courses in core Thermal System modules.",
      "Executed administrative tasks and department-level activity coordination.",
      "Mentored senior student projects focusing on fluid dynamics and heat engines.",
    ],
  },
  {
    id: 5,
    title: "Lecturer",
    subtitle: "AITR, Indore",
    duration: "4 Years",
    tenure: "Aug 2010 – July 2014",
    details: [
      "Taught introductory engineering graphic models and basic mechanical structures.",
      "Managed academic laboratory sessions for fluid machinery and strength of materials.",
      "Supported senior faculty in curriculum design and student evaluation.",
    ],
  },
];

const educationData: TimelineItem[] = [
  {
    id: 1,
    title: "M.Tech in Artificial Intelligence & Data Science",
    subtitle: "Indian Institute of Information Technology (IIIT), Ranchi",
    duration: "Pursuing (Second M.Tech Degree)",
    tenure: "Ongoing",
    details: [
      "Focussed on data structure algorithms, machine learning models, statistical analysis, and neural networks.",
      "Applying advanced machine learning models (like SVMs, Decision Trees, K-NN, and Naive Bayes) to solve complex mechanical structures and fault diagnostic patterns.",
    ],
  },
  {
    id: 2,
    title: "Ph.D. in Mechanical Engineering",
    subtitle: "Jaypee University of Engineering and Technology (JUET), Guna (M.P.)",
    duration: "Graduated (August 2025)",
    tenure: "Completed",
    extraInfo: "Academic Performance: 9.08 CGPA",
    details: [
      "Research Focus: Fault Diagnosis of Reciprocating Air Compressor Set-up using Signal Processing and Machine Learning Techniques.",
      "Supervised by: Dr. Bhagat Singh & Dr. Pankaj Gupta.",
      "Research outcome: Developed advanced predictive models combining signal processing filters with ML classifiers (LDA, QDA, J48, K-NN, Logistic Regression).",
    ],
  },
  {
    id: 3,
    title: "M.Tech in Thermal System & Design",
    subtitle: "ShriRam College of Engineering & Management, Gwalior (RGPV, Bhopal)",
    duration: "Graduated (2016)",
    tenure: "Completed with Honors",
    extraInfo: "Academic Performance: 7.83 CGPA",
    details: [
      "Specialized in heat transfer, fluid dynamics, solar water distillation setups, and thermodynamic optimization.",
      "Thesis research was focused on the design and thermal performance enhancement of solar water distillation devices.",
    ],
  },
  {
    id: 4,
    title: "Bachelor of Engineering in Mechanical Engineering",
    subtitle: "Sushila Devi Bansal College of Engineering, Indore (RGPV, Bhopal)",
    duration: "Graduated (2010)",
    tenure: "Completed",
    extraInfo: "Grade: First Division",
    details: [
      "Comprehensive study of manufacturing processes, engineering graphics, theory of machines, fluid mechanics, and thermodynamics.",
      "Completed minor and major design projects in internal combustion engines and material technology.",
    ],
  },
  {
    id: 5,
    title: "Higher Secondary Education (PCM)",
    subtitle: "Govt. Excellence School No. 1, Shivpuri",
    duration: "Graduated (2006)",
    tenure: "Completed",
    extraInfo: "Grade: First Division",
    details: [
      "Specialized in Physics, Chemistry, and Mathematics (PCM).",
      "Completed senior secondary schooling with honors.",
    ],
  },
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="journey" className="py-24 relative overflow-hidden pattern-grid">
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 glow-purple rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 glow-emerald rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Timeline</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My Professional & Academic Journey
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-16">
          <div className="glass-panel p-1.5 rounded-2xl flex space-x-1.5 shadow-sm border">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center space-x-2 transition-all duration-300 cursor-pointer ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md shadow-primary-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center space-x-2 transition-all duration-300 cursor-pointer ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md shadow-primary-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Academic Journey</span>
            </button>
          </div>
        </div>

        {/* Timeline View */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 timeline-line opacity-40 rounded-full" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {(activeTab === "experience" ? experienceData : educationData).map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`relative flex flex-col sm:flex-row items-stretch ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-[7px] w-4 h-4 rounded-full bg-background border-4 border-indigo-500 shadow-md z-20 top-6" />

                    {/* Timeline Content Block */}
                    <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                      <div className="glass-card rounded-2xl p-6 sm:p-8 relative shadow-sm border border-slate-200/50 dark:border-slate-800/50">
                        {/* Header Details */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.tenure}</span>
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            {item.duration}
                          </span>
                        </div>

                        {/* Title & Organization */}
                        <h3 className="text-xl font-bold tracking-tight mb-1 text-slate-800 dark:text-slate-100 flex items-center">
                          {item.title}
                        </h3>
                        <div className="text-sm font-semibold text-primary-500 dark:text-indigo-400 mb-4 flex items-center">
                          <Building className="w-4 h-4 mr-1.5 flex-shrink-0" />
                          <span>{item.subtitle}</span>
                        </div>

                        {/* CGPA / Extra credentials badge */}
                        {item.extraInfo && (
                          <div className="mb-4 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                            <Award className="w-3.5 h-3.5" />
                            <span>{item.extraInfo}</span>
                          </div>
                        )}

                        {/* Detail bullets list */}
                        {item.details && (
                          <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400 list-none pl-0">
                            {item.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-indigo-400 mt-1.5 mr-2.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Spacer for vertical balance */}
                    <div className="hidden sm:block w-1/2" />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
