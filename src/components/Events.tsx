"use client";

import { useState } from "react";
import { Users, Truck, Sparkles, BookOpen, User, Building, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Workshop {
  id: number;
  title: string;
  duration: string;
  location: string;
  speaker?: string;
  details?: string;
}

interface IndustrialVisit {
  name: string;
  location: string;
  specialization: string;
  desc: string;
}

const workshopsData: Workshop[] = [
  {
    id: 1,
    title: "7-Day Training Program: AutoCAD Software",
    duration: "7 Days",
    location: "UIT-RGPV, Shivpuri",
    details: "Designed and organized basic CAD layout pathways modeling training for First Year B.Tech students.",
  },
  {
    id: 2,
    title: "One-Day Workshop: Patent Filing Process",
    duration: "1 Day",
    location: "UIT-RGPV, Shivpuri",
    speaker: "Mr. Nitesh Pandey (Asia & India Book Record Holder - Filed 75 patents in a Single Day)",
    details: "Interactive workshop detailing the regulatory framework, application process, and drafting structures for engineering patents.",
  },
  {
    id: 3,
    title: "Two-Day Online Workshop: Energy Audit",
    duration: "2 Days (June 7-8, 2020)",
    location: "SVCE, Indore (Under TEQIP-III)",
    details: "Sponsored by RGPV Bhopal, teaching thermal auditing methodologies and plant efficiency metrics.",
  },
  {
    id: 4,
    title: "Three-Day Offline Workshop: Engine Assembly",
    duration: "3 Days",
    location: "SVCE, Indore",
    speaker: "In collaboration with Laxmi Motors, Indore",
    details: "Hands-on diagnostic workshop giving undergraduate students experience in physical engine disassembling and mounting.",
  },
  {
    id: 5,
    title: "Expert Talk: Recent Trends in Mechatronics",
    duration: "1 Day Expert Session",
    location: "SVCE, Indore",
    speaker: "Mr. Bhupendra Singh (Robotronix Eng. Tech. Pvt. Ltd., Indore)",
  },
  {
    id: 6,
    title: "Expert Talk: Empowering Engineering Through Research",
    duration: "March 4, 2024",
    location: "SKITM College, Indore",
    speaker: "Dr. Amit Sharma, Dr. Manish Patidar, & Dr. Abhishak Verma (JUET, Guna)",
  },
  {
    id: 7,
    title: "Expert Talk: Fundamentals of Psychometric and Recent Trends in RAC",
    duration: "1 Day Expert Session",
    location: "SVCE, Indore",
    speaker: "Dr. Neelesh Soni (Ph.D., IIT Kharagpur)",
  },
];

const visitsData: IndustrialVisit[] = [
  {
    name: "NATRAX (National Automotive Test Tracks)",
    location: "Pithampur, M.P.",
    specialization: "Automotive Testing & Validation",
    desc: "Organized visits to Asia's largest state-of-the-art proving ground facility for high-speed vehicle testing and safety validation.",
  },
  {
    name: "Auto Cluster",
    location: "Pithampur, M.P.",
    specialization: "Advanced Prototyping",
    desc: "Facilitated student workshops on industrial tool design, reverse engineering setups, and rapid 3D prototyping models.",
  },
  {
    name: "INDO German Tool Room",
    location: "Indore, M.P.",
    specialization: "Precision Tool Design & CNC",
    desc: "Led students through advanced computer-numerical machining centers and tool manufacturing operations.",
  },
  {
    name: "Mahindra Two Wheelers Ltd.",
    location: "Pithampur, M.P.",
    specialization: "Automobile Assembly Lines",
    desc: "Toured operational engine casting, fabrication, and assembly assembly setups representing high-throughput automotive manufacturing.",
  },
  {
    name: "Dainik Bhaskar KBA Printing Plant",
    location: "Indore, M.P.",
    specialization: "High-Speed Mechanical Systems",
    desc: "Showcased massive roll-driven pneumatic printing setups and automatic packaging engineering machinery.",
  },
  {
    name: "Jash Engineering Ltd.",
    location: "Indore, M.P.",
    specialization: "Water Control Gates & Casting",
    desc: "Observed large-scale casting, sand-molding procedures, and precision testing of heavy water-gates equipment.",
  },
];

export default function Events() {
  const [activeSegment, setActiveSegment] = useState<"workshops" | "visits">("workshops");

  return (
    <section id="engagement" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Academic Engagement</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Events Coordinated & Industrial Connect
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Navigation Selector */}
        <div className="flex justify-center mb-16">
          <div className="glass-panel p-1.5 rounded-2xl flex space-x-1.5 border shadow-sm">
            <button
              onClick={() => setActiveSegment("workshops")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center space-x-2 transition-all duration-300 cursor-pointer ${
                activeSegment === "workshops"
                  ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md shadow-primary-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Events & Talks Coordinated</span>
            </button>
            <button
              onClick={() => setActiveSegment("visits")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center space-x-2 transition-all duration-300 cursor-pointer ${
                activeSegment === "visits"
                  ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md shadow-primary-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Industrial Visits Organized</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          {activeSegment === "workshops" ? (
            <motion.div
              key="workshops"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {workshopsData.map((item, index) => (
                <div
                  key={item.id}
                  className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between"
                >
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center justify-between text-xs mb-4">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                        <BookOpen className="w-3.5 h-3.5 mr-1" />
                        <span>Coordinator role</span>
                      </span>
                      <span className="font-bold text-slate-400 dark:text-slate-500">
                        {item.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 mb-3">
                      {item.title}
                    </h3>

                    {/* Speaker */}
                    {item.speaker && (
                      <div className="flex items-start text-xs text-slate-600 dark:text-slate-400 mb-4 bg-slate-100/55 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800/20">
                        <User className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-semibold text-slate-500 dark:text-slate-500">Guest Speaker / Partner:</span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">{item.speaker}</span>
                        </div>
                      </div>
                    )}

                    {/* Details Description */}
                    {item.details && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                        {item.details}
                      </p>
                    )}
                  </div>

                  {/* Location bottom */}
                  <div className="flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800/40 pt-4">
                    <Building className="w-4 h-4 mr-2" />
                    <span>Venue: {item.location}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="visits"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visitsData.map((visit, index) => (
                <div
                  key={index}
                  className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between"
                >
                  <div>
                    {/* Focus tag */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/15">
                        {visit.specialization}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 mb-3">
                      {visit.name}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {visit.desc}
                    </p>
                  </div>

                  {/* Location bottom info */}
                  <div className="flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800/40 pt-4">
                    <MapPin className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
                    <span>Location: {visit.location}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
