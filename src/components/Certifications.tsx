"use client";

import { useState } from "react";
import { Award, Search, Calendar, Landmark, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  id: number;
  title: string;
  organizer: string;
  duration: string;
  category: "course" | "fdp" | "webinar";
  extra?: string;
}

const certsData: Certificate[] = [
  // Courses & Certifications
  {
    id: 1,
    title: "Diploma in Electric Vehicle Technology",
    organizer: "Alison (ID – 45855047)",
    duration: "28 Hours (Score: 95%)",
    category: "course",
    extra: "FAS Accredited EV syllabus",
  },
  {
    id: 2,
    title: "Advanced Certification in Solar Energy Technology and Management",
    organizer: "Madhav Institute of Technology & Science (MITS), Gwalior",
    duration: "6 Months",
    category: "course",
    extra: "Offline advanced energy systems curriculum",
  },
  {
    id: 3,
    title: "LaTeX Software Certification",
    organizer: "IIT Bombay",
    duration: "2 Months",
    category: "course",
    extra: "Scientific paper layout and writing environment",
  },
  {
    id: 4,
    title: "Introduction to Thermodynamics",
    organizer: "University of Michigan (Coursera)",
    duration: "8 Weeks",
    category: "course",
    extra: "Online fundamental thermodynamics cycles",
  },
  {
    id: 5,
    title: "Fundamentals of Manufacturing Processes Course",
    organizer: "IIT Roorkee (MHRD, Govt. of India)",
    duration: "14 Weeks",
    category: "course",
    extra: "NPTEL National Certification",
  },
  {
    id: 6,
    title: "Master CAM Training Program",
    organizer: "IGTR, Indore (MSME Govt. of India)",
    duration: "1 Week",
    category: "course",
    extra: "Offline CAM setup and pathways design",
  },

  // FDPs & Conferences
  {
    id: 7,
    title: "Presented Research Paper at ICMME-2025 International Conference",
    organizer: "Jaypee University of Engineering and Technology, Guna (M.P.)",
    duration: "April 28-30, 2025 (Offline)",
    category: "fdp",
    extra: "International Conference on Mechanical and Materials Engineering",
  },
  {
    id: 8,
    title: "Fundamentals of Manufacturing Processes FDP",
    organizer: "IIT Roorkee (MHRD, Govt. of India)",
    duration: "7 Weeks",
    category: "fdp",
    extra: "NPTEL Faculty Development Program",
  },
  {
    id: 9,
    title: "Research Perspective in IC Engines Short-Term Course",
    organizer: "Govt. College of Engineering Amravati (AICTE-QIP)",
    duration: "1 Week (Offline)",
    category: "fdp",
    extra: "Quality Improvement Program",
  },
  {
    id: 10,
    title: "Recent Trends in Fluid Dynamics Research E-Conference",
    organizer: "NIT Rourkela",
    duration: "3 Days",
    category: "fdp",
    extra: "National Academic Gathering",
  },
  {
    id: 11,
    title: "R&D in Material Behavior, Processing, and Characterization",
    organizer: "GLA University (Mathura) Under Panjab University",
    duration: "1 Week",
    category: "fdp",
    extra: "International Faculty Development Program",
  },
  {
    id: 12,
    title: "Recent Advances in Mechanical Engineering FDP",
    organizer: "SGSITS, Indore (Under TEQIP-III)",
    duration: "1 Week",
    category: "fdp",
    extra: "State level faculty training",
  },
  {
    id: 13,
    title: "Innovation, Entrepreneurship, and its Relevance in Industry 4.0",
    organizer: "TERNA Engineering College (Mumbai) Under IIE",
    duration: "1 Week",
    category: "fdp",
    extra: "Faculty Development Program",
  },
  {
    id: 14,
    title: "Robotics and Automation FDP",
    organizer: "SAGE University (Indore) Under IIITDM Jabalpur",
    duration: "5 Days",
    category: "fdp",
    extra: "Robotics kinematics and workspace automation",
  },

  // Webinars & Workshops
  {
    id: 15,
    title: "CAE Driven Product Design Webinar Series",
    organizer: "Dept. of Automobile Engineering, RIT, Rajaram Nagar & Altair",
    duration: "5 Days",
    category: "webinar",
    extra: "SAENIS Effi-Cycle 2020 event focus",
  },
  {
    id: 16,
    title: "Writing a Research Paper & Publishability: Issues & Concerns",
    organizer: "IQAC, Vanita Vishram Women's College, Surat",
    duration: "National Webinar",
    category: "webinar",
  },
  {
    id: 17,
    title: "10 Reasons to Get and Use an ORCID ID Course",
    organizer: "Researcher Academy, Elsevier",
    duration: "1 Day Online",
    category: "webinar",
  },
  {
    id: 18,
    title: "Intellectual Property Awareness Program Webinar",
    organizer: "SAGE University, Indore",
    duration: "June 29, 2019",
    category: "webinar",
  },
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCerts = certsData.filter((cert) => {
    const matchesTab = activeTab === "all" || cert.category === activeTab;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.extra && cert.extra.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden pattern-grid">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-1/3 w-[30rem] h-[30rem] glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Qualifications</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Professional Development & Certifications
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-1.5 bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 w-full md:w-auto">
            {[
              { id: "all", label: "All Items (18)" },
              { id: "course", label: "Courses" },
              { id: "fdp", label: "FDPs & Conferences" },
              { id: "webinar", label: "Workshops & Webinars" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-sm border border-slate-200/40 dark:border-slate-700/40"
                    : "text-slate-500 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search certification..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm glass-panel"
            />
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-6 border flex flex-col justify-between"
              >
                <div>
                  {/* Category Indicator */}
                  <div className="flex items-center space-x-2 text-[10px] uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                    <Award className="w-3.5 h-3.5 text-indigo-500" />
                    <span>
                      {cert.category === "course"
                        ? "Certification Course"
                        : cert.category === "fdp"
                        ? "FDP & Conference"
                        : "Workshop / Webinar"}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 leading-snug mb-3">
                    {cert.title}
                  </h3>

                  {/* Organizer Details */}
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <Landmark className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
                    <span className="truncate">{cert.organizer}</span>
                  </div>

                  {/* Date details */}
                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
                    <span>{cert.duration}</span>
                  </div>
                </div>

                {/* Extra info text */}
                {cert.extra && (
                  <div className="border-t border-slate-100 dark:border-slate-800/40 pt-3 mt-4 text-[11px] text-slate-400 dark:text-slate-500 italic font-medium">
                    {cert.extra}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCerts.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-400 dark:text-slate-500">
              No certifications match your selection.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
