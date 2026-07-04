"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, Calendar, Award, Building, Book, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

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
      "Head of Research & Innovation Cell at institute level.",
      "Assistant Exam Superintendent for RGPV university exams.",
      "Coordinate department activities — workshops, seminars, conferences, and student visits.",
      "Time-Table Coordinator at department level.",
      "Training & Placement Department Representative.",
      "Lab In-charge: IC Engine, Basic Mechanical Engineering (BME), and Engineering Drawing.",
      "Subjects taught: Engineering Graphics, TOM, SOM, and Mechanical Vibration.",
    ],
  },
  {
    id: 2,
    title: "Assistant Professor",
    subtitle: "SKITM, Indore",
    duration: "3 Years, 3 Months",
    tenure: "Feb 2021 – July 2024",
    details: [
      "Organized expert lectures, workshops, and industrial visits.",
      "Designed the official college brochure and promotional banners.",
      "Guided students on career development and research opportunities.",
      "Served as Counseling Coordinator for 5 years at SVCE & SKITM, Indore.",
    ],
  },
  {
    id: 3,
    title: "Assistant Professor",
    subtitle: "SVCE, Indore",
    duration: "3 Years, 9 Months",
    tenure: "Mar 2017 – Dec 2020",
    details: [
      "Faculty Advisor for Eco-Kart Race team in 2018 and 2019.",
      "Organized expert talks, workshops, and industrial visits.",
      "Mentored assistant teachers and new faculty members.",
      "Arranged career counseling visits for school students to the campus.",
    ],
  },
  {
    id: 4,
    title: "Assistant Professor",
    subtitle: "GICTS Group of College, Gwalior",
    duration: "2 Years",
    tenure: "Nov 2014 - Nov 2016",
    details: [
      "Taught undergraduate courses in thermal system subjects.",
      "Handled administrative tasks and department activities.",
      "Guided senior student projects on fluid dynamics and heat engines.",
    ],
  },
  {
    id: 5,
    title: "Lecturer",
    subtitle: "AITR, Indore",
    duration: "4 Years",
    tenure: "Aug 2010 – July 2014",
    details: [
      "Taught engineering graphics and basic mechanical engineering.",
      "Managed lab sessions for fluid machinery and strength of materials.",
      "Helped senior faculty with curriculum design and student evaluation.",
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
      "Studying data structures, machine learning, statistics, and neural networks.",
      "Applying ML models (SVM, Decision Trees, K-NN) to mechanical fault detection problems.",
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
      "Research topic: Fault detection in reciprocating air compressors using signal processing and machine learning.",
      "Supervisors: Dr. Bhagat Singh & Dr. Pankaj Gupta.",
      "Published 11 papers including 3 SCI-indexed journals. Developed ML models using LDA, QDA, J48, K-NN, and Logistic Regression.",
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
      "Specialized in heat transfer, fluid dynamics, and solar water distillation.",
      "Thesis on improving solar water distillation using phase change material (paraffin wax).",
      "Highest SGPA in 3rd and 4th semesters (82%, 90%).",
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
      "Studied manufacturing processes, engineering graphics, TOM, fluid mechanics, and thermodynamics.",
      "Completed design projects in IC engines and material technology.",
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
      "Studied Physics, Chemistry, and Mathematics (PCM).",
      "Passed with First Division.",
    ],
  },
];

interface TimelineProps {
  isPreview?: boolean;
}

export default function Timeline({ isPreview = false }: TimelineProps) {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const timelineData = activeTab === "experience"
    ? (isPreview ? experienceData.slice(0, 2) : experienceData)
    : (isPreview ? educationData.slice(0, 2) : educationData);

  return (
    <section id="journey" className="section-padding relative">
      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Experience"
          title={isPreview ? "Career at a Glance" : "Professional & Academic Journey"}
          description={!isPreview ? "13+ years of teaching across five colleges, Ph.D. research, and ongoing M.Tech in AI." : "Teaching, research leadership, and academic progression."}
        />

        <div className="flex justify-center mb-12">
          <div className="tab-group">
            <button
              onClick={() => setActiveTab("experience")}
              className={`tab-btn ${activeTab === "experience" ? "tab-btn-active" : ""}`}
            >
              <Briefcase className="w-4 h-4" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`tab-btn ${activeTab === "education" ? "tab-btn-active" : ""}`}
            >
              <GraduationCap className="w-4 h-4" />
              Education
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
              {timelineData.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`relative flex flex-col sm:flex-row items-stretch group ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Glowing Interactive Node Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-[9px] w-4.5 h-4.5 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-600 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-20 top-6 group-hover:scale-125 group-hover:border-primary-500 group-hover:shadow-[0_0_14px_rgba(99,102,241,0.8)] transition-all duration-300" />

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
                        <h3 className="text-xl font-bold tracking-tight mb-1 text-slate-800 dark:text-slate-100 flex items-center group-hover:text-primary-500 transition-colors">
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

                        {/* Detail bullets list - Only shown in full view page, hidden in homepage preview */}
                        {!isPreview && item.details && (
                          <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400 list-none pl-0 mt-4 border-t border-slate-100 dark:border-slate-800/40 pt-4">
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

        {/* Redirect CTA Button for homepage overview */}
        {isPreview && (
          <div className="flex justify-center mt-12 relative z-20">
            <Link
              href="/journey"
              className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>View Full Journey</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
