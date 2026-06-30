"use client";

import { useState } from "react";
import { Cpu, CheckCircle2, AlertCircle, Eye, ShieldAlert, Sparkles, Navigation, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Patent {
  id: number;
  appNo: string;
  title: string;
  status: "published" | "under-process";
  year: number;
  description: string;
  icon: any;
}

const patentsData: Patent[] = [
  {
    id: 1,
    appNo: "469221-001",
    title: "Serving Robot",
    status: "published",
    year: 2025,
    description: "Designed for hospitality and clinical environments. Features autonomous trajectory tracking, structural balance for food/medicine transport, and proximity sensor navigation.",
    icon: Navigation,
  },
  {
    id: 2,
    appNo: "469222-001",
    title: "Sprayer Robot",
    status: "published",
    year: 2025,
    description: "Autonomous fluid spraying mechanism built for agricultural sanitation and large-scale industrial facility disinfection, featuring pressurized spray nozzles and obstacle detection.",
    icon: Sparkles,
  },
  {
    id: 3,
    appNo: "469218-001",
    title: "Carrier Lifting Robot",
    status: "published",
    year: 2025,
    description: "Heavy-duty logistics robot utilizing scissor-lifts and modular hydraulic frames to automate package hoisting and internal warehouse material movements.",
    icon: Dumbbell,
  },
  {
    id: 4,
    appNo: "469220-001",
    title: "Fire Fighting Robot",
    status: "published",
    year: 2025,
    description: "Designed for high-hazard environments. Equipped with structural flame-retardant shielding, thermal cameras, and wireless remote water nozzle orientation mechanisms.",
    icon: ShieldAlert,
  },
  {
    id: 5,
    appNo: "484785-001",
    title: "Autonomous Robotics Design (V1)",
    status: "under-process",
    year: 2026,
    description: "Integrated intelligence model for next-generation automated helper configurations. Under process review at the Indian Patents Office.",
    icon: Cpu,
  },
  {
    id: 6,
    appNo: "469219-001",
    title: "Industrial Automated Setup (V2)",
    status: "under-process",
    year: 2026,
    description: "Innovative mechanical chassis configuration with multi-axial degrees of freedom for high-speed automated production processes.",
    icon: Cpu,
  },
];

export default function Patents() {
  const [filter, setFilter] = useState<"all" | "published" | "under-process">("all");

  const filteredPatents = patentsData.filter(
    (p) => filter === "all" || p.status === filter
  );

  return (
    <section id="patents" className="py-24 relative overflow-hidden pattern-grid">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 glow-purple rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Patents</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Design Patents & Robotics Innovation
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 max-w-md mx-auto leading-relaxed">
            A showcase of official mechanical patents filed and published at the Patent Office, representing real-world robotics designs.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center gap-3 mb-16 flex-wrap">
          {(["all", "published", "under-process"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 relative cursor-pointer overflow-hidden ${
                filter === tab
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800/40"
              }`}
            >
              <span className="relative z-10">
                {tab === "all" ? "All Patents" : tab === "published" ? "Published (4)" : "Under Process (2)"}
              </span>
              {filter === tab && (
                <motion.div
                  layoutId="activePatentTab"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full shadow-lg shadow-indigo-600/25"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Patents Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPatents.map((patent) => (
              <PatentCard key={patent.id} patent={patent} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

function PatentCard({ patent }: { patent: Patent }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = patent.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const rotateX = -(mouseY / (height / 2)) * 8;
    const rotateY = (mouseX / (width / 2)) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease, border-color 0.3s ease, shadow 0.3s ease",
      }}
      className={`glass-card rounded-3xl p-8 border flex flex-col justify-between h-full relative cursor-pointer group hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/5 ${
        tilt.x !== 0 || tilt.y !== 0 ? "z-20" : "z-10"
      }`}
    >
      <div>
        {/* Status header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
            App No: {patent.appNo}
          </span>
          <span
            className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              patent.status === "published"
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/15"
                : "bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/15"
            }`}
          >
            {patent.status === "published" ? (
              <>
                <CheckCircle2 className="w-3 h-3" />
                <span>Published ({patent.year})</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-3 h-3 animate-pulse" />
                <span>Under Process</span>
              </>
            )}
          </span>
        </div>

        {/* Icon + Title */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {patent.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {patent.description}
        </p>
      </div>

      {/* Footer Patent tag */}
      <div className="border-t border-slate-100 dark:border-slate-800/40 pt-4 mt-6 flex justify-between items-center text-xs font-semibold text-slate-400">
        <span>Indian Patent Office</span>
        <span className="flex items-center text-indigo-500/80 dark:text-indigo-400 group-hover:text-indigo-500 transition-colors duration-300">
          <Eye className="w-3.5 h-3.5 mr-1" /> Verified Design
        </span>
      </div>
    </motion.div>
  );
}
