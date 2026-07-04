"use client";

import { useState } from "react";
import Link from "next/link";
import { Cpu, CheckCircle2, AlertCircle, Eye, ShieldAlert, Sparkles, Navigation, Dumbbell, ArrowRight, MoveLeft, X, Award, Info, Battery, Zap, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PatentDetails {
  useCase: string;
  keyTech: string[];
  specifications: Record<string, string>;
}

interface Patent {
  id: number;
  appNo: string;
  title: string;
  status: "published" | "under-process";
  year: number;
  description: string;
  icon: any;
  certificateImage?: string;
  details?: PatentDetails;
}

const patentsData: Patent[] = [
  {
    id: 1,
    appNo: "469221-001",
    title: "Serving Robot",
    status: "published",
    year: 2025,
    description: "A robot designed to serve food and medicine in hotels and hospitals. It moves autonomously using smart sensors.",
    icon: Navigation,
    certificateImage: "/patent-cert-serving-robot.jpg",
    details: {
      useCase: "Autonomous indoor food and medicine delivery in hospitals, healthcare wards, and hotel rooms, minimizing human contact and manual carrying.",
      keyTech: [
        "Infrared & Ultrasonic Obstacle Avoidance Sensors for safe navigation in crowded corridors",
        "Digital Load Cells (Weight Sensors) to detect item placement and automatic unloading detection",
        "Multi-tier Tray Loading System with anti-slip magnetic bases",
        "Automatic Self-Docking Charger system for round-the-clock utility"
      ],
      specifications: {
        "Payload Capacity": "15 kg (Distributed across 3 trays)",
        "Navigation Type": "Sensor-Guided Autonomous Line/Obstacle Tracking",
        "Chassis Dimensions": "550mm x 550mm x 1100mm (L x W x H)",
        "Max Speed": "1.2 m/s",
        "Battery Operation": "8 Hours continuous use",
        "Chassis Material": "High-Grade Acrylic and Aluminium Frame"
      }
    }
  },
  {
    id: 2,
    appNo: "469222-001",
    title: "Sprayer Robot",
    status: "published",
    year: 2025,
    description: "A robot that sprays liquids automatically. Useful for farming, sanitation, and cleaning large industrial areas.",
    icon: Sparkles,
    certificateImage: "/patent-cert-sprayer-robot.jpg",
    details: {
      useCase: "Autonomous precise spraying of liquid fertilizers, pesticides in fields, or chemical disinfectants in wide industrial environments.",
      keyTech: [
        "Quad-directional High-Pressure Atomization Nozzles for uniform coverage",
        "Digital Liquid Level & Flow Rate Controller to prevent chemical wastage",
        "All-Terrain Wheeled Drive system for navigating uneven soil or warehouse floors",
        "Wireless Remote Navigation over 2.4GHz RF with fallback autonomous fail-safe"
      ],
      specifications: {
        "Liquid Tank Volume": "10 Liters (Corrosion-resistant HDPE)",
        "Spraying Width": "1.5 to 3.0 Meters adjustable",
        "Flow Rate": "0.8 - 2.5 Liters/min",
        "Working Pressure": "0.3 - 0.5 MPa",
        "Drive System": "4x4 DC Geared Motors with high-torque wheels",
        "Operating Range": "Up to 500 Meters line-of-sight"
      }
    }
  },
  {
    id: 3,
    appNo: "469218-001",
    title: "Carrier Lifting Robot",
    status: "published",
    year: 2025,
    description: "A robot that lifts and carries heavy packages in warehouses using an automatic scissor-lift mechanism.",
    icon: Dumbbell,
    certificateImage: "/patent-cert-carrier-lifting-robot.jpg",
    details: {
      useCase: "Automated warehouse material handling, package transport, and high-shelf stacking in industrial warehouses and sorting hubs.",
      keyTech: [
        "Heavy-Duty Scissor Linkage with DC Linear Actuator lift drive",
        "Automatic Tilt & Gyro Sensors to monitor load balance during motion",
        "Line-follower and magnetic guide sensor array for route adherence",
        "Laser LiDAR Range Finder for mapping warehouse surroundings"
      ],
      specifications: {
        "Max Lifting Capacity": "50 kg",
        "Max Lift Height": "800 mm (from base floor)",
        "Mechanism Type": "Single-stage scissor linkage with electric actuator",
        "Chassis Weight": "24 kg (unloaded)",
        "Guidance System": "Magnetic Tape / Autonomous Obstacle Avoidance",
        "Safety Sensors": "Front bumper collision switch + ultrasonic range detectors"
      }
    }
  },
  {
    id: 4,
    appNo: "469220-001",
    title: "Fire Fighting Robot",
    status: "published",
    year: 2025,
    description: "A fire-fighting robot for dangerous areas. It has thermal cameras and a remote-controlled high-pressure nozzle.",
    icon: ShieldAlert,
    certificateImage: "/patent-cert-fire-fighting-robot.jpg",
    details: {
      useCase: "Remote fire suppression and safety inspections in hazardous zones, chemical warehouses, or high-temperature industrial settings.",
      keyTech: [
        "Dual Thermal & Optical Cameras for navigating and identifying heat sources through smoke",
        "High-Pressure Water Nozzle with motorized 2-axis Pan/Tilt rotation",
        "Rugged Rubber Crawler Tracks to traverse stairs, debris, and mud",
        "Heat-resistant shielding with fire-retardant external plating"
      ],
      specifications: {
        "Nozzle Pressure": "0.8 MPa max working pressure",
        "Pan / Tilt Range": "180° Horizontal / 90° Vertical",
        "Water Flow Capacity": "30 Liters/min (via external quick-connect hose)",
        "Wireless Live Feed": "5.8GHz low-latency video transmission",
        "Mobility Type": "Continuous caterpillar track drive (Treads)",
        "Max Temperature Threshold": "180°C (with internal active thermal insulation)"
      }
    }
  },
  {
    id: 5,
    appNo: "484785-001",
    title: "Autonomous Robotics Design (V1)",
    status: "under-process",
    year: 2026,
    description: "Integrated intelligence model for next-generation automated helper configurations. Under process review at the Indian Patents Office.",
    icon: Cpu,
    details: {
      useCase: "Conceptual intelligence configuration linking multiple robotic agents through a localized network for synchronized carrying and sorting.",
      keyTech: [
        "Multi-agent communication protocol",
        "Edge computing computing nodes for sensor processing",
        "Distributed swarm navigation logic"
      ],
      specifications: {
        "Status": "Application Filed, Under Examination",
        "Core Controller": "Custom ARM-Cortex Dual Core Processor",
        "Topology": "Master-Swarm configuration",
        "Year of Filing": "2026"
      }
    }
  },
  {
    id: 6,
    appNo: "469219-001",
    title: "Industrial Automated Setup (V2)",
    status: "under-process",
    year: 2026,
    description: "Innovative mechanical chassis configuration with multi-axial degrees of freedom for high-speed automated production processes.",
    icon: Cpu,
    details: {
      useCase: "Next-gen multi-jointed chassis arm for high-speed pick and place and precise tooling operations on manufacturing assembly lines.",
      keyTech: [
        "Multi-axial rotary joints",
        "High-torque brushless planetary gear motors",
        "Integrated encoder feedback loop"
      ],
      specifications: {
        "Status": "Application Staged, Document Examination",
        "Degree of Freedom": "6-Axis mechanical articulation",
        "Joint Precision": "±0.05 mm accuracy",
        "Year of Filing": "2026"
      }
    }
  }
];

export default function Patents({ isPreview = false }: { isPreview?: boolean }) {
  const [filter, setFilter] = useState<"all" | "published" | "under-process">("all");
  const [selectedPatent, setSelectedPatent] = useState<Patent | null>(null);

  const filteredPatents = patentsData.filter(
    (p) => filter === "all" || p.status === filter
  );

  const displayPatents = isPreview ? patentsData.slice(0, 3) : filteredPatents;

  return (
    <section id="patents" className="py-24 relative overflow-hidden pattern-grid">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 glow-purple rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Back button for dedicated subpage */}
      {!isPreview && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 relative z-20">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-indigo-500 transition-colors"
          >
            <MoveLeft className="w-4.5 h-4.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Patents</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isPreview ? "My Robot Design Patents" : "Design Patents & Robotics"}
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-3 max-w-lg mx-auto leading-relaxed">
            {isPreview
              ? "6 robot design patents — 4 published and 2 under process."
              : "I have filed 6 design patents for robots used in service, agriculture, logistics, and fire safety."}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs - Hide on Homepage Preview */}
        {!isPreview && (
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
        )}

        {/* Patents Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayPatents.map((patent) => (
              <PatentCard key={patent.id} patent={patent} onSelect={() => setSelectedPatent(patent)} isPreview={isPreview} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Redirect CTA Button for homepage overview */}
        {isPreview && (
          <div className="flex justify-center mt-12 relative z-20">
            <Link
              href="/patents"
              className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>View All Patents</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        )}

      </div>

      {/* Patent Details Overlay Modal */}
      <AnimatePresence>
        {selectedPatent && (
          <PatentDetailsModal patent={selectedPatent} onClose={() => setSelectedPatent(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function PatentCard({ patent, onSelect, isPreview = false }: { patent: Patent; onSelect: () => void; isPreview?: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = patent.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const rotateX = -(mouseY / (height / 2)) * 6;
    const rotateY = (mouseX / (width / 2)) * 6;
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
      onClick={onSelect}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease, border-color 0.3s ease, shadow 0.3s ease",
      }}
      className={`glass-card rounded-3xl p-6 border flex flex-col justify-between h-full relative cursor-pointer group hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/5 ${
        tilt.x !== 0 || tilt.y !== 0 ? "z-20" : "z-10"
      }`}
    >
      <div className="flex flex-col h-full w-full">
        {/* Certificate preview thumbnail */}
        {patent.certificateImage ? (
          <div className="relative w-full mb-4 rounded-2xl overflow-hidden shrink-0 aspect-[16/10] bg-slate-950/40 flex items-center justify-center border border-slate-200/5 dark:border-slate-800/50">
            <img
              src={patent.certificateImage}
              alt={`${patent.title} Certificate`}
              className="w-full h-full object-contain p-1 group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 flex items-center gap-1 bg-amber-500/90 text-amber-950 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full shadow-lg">
              <Award className="w-2.5 h-2.5" /> Published
            </div>
          </div>
        ) : (
          <div className="w-full mb-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex flex-col items-center justify-center shrink-0 aspect-[16/10]">
            <Cpu className="w-8 h-8 text-amber-500/60 animate-pulse mb-1" />
            <span className="text-slate-500 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider">Under Process Review</span>
          </div>
        )}

        <div className="flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
              App No: {patent.appNo}
            </span>
            <span
              className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                patent.status === "published"
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/15"
                  : "bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/15"
              }`}
            >
              {patent.status === "published" ? (
                <>
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>Published {patent.year}</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-2.5 h-2.5 animate-pulse" />
                  <span>In Review</span>
                </>
              )}
            </span>
          </div>

          <div className="flex items-center space-x-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Icon className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-extrabold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {patent.title}
            </h3>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2">
            {patent.description}
          </p>

          <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/30 flex items-center justify-between text-[10px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
            <span>Explore Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PatentDetailsModal({ patent, onClose }: { patent: Patent; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"specs" | "cert">(patent.certificateImage ? "specs" : "specs");
  const Icon = patent.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-2xl w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex flex-col h-auto max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer transition-colors shadow-md border border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Top Header info */}
        <div className="p-6 md:p-8 bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
              <Award className="w-3 h-3 text-indigo-400" />
              Indian Patent Office Design
            </span>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                patent.status === "published"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
                  : "bg-amber-500/10 text-amber-400 border border-amber-500/15"
              }`}
            >
              {patent.status === "published" ? "Published" : "Under Review"}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
              <Icon className="w-4.5 h-4.5" />
            </div>
            {patent.title}
          </h2>
          <p className="text-[11px] font-mono text-slate-400 mt-1.5">
            Application / Design Number: <span className="text-slate-200 font-bold">{patent.appNo}</span>
          </p>
        </div>

        {/* Tab Switcher (Only if certificate is available) */}
        {patent.certificateImage && (
          <div className="flex border-b border-slate-800 bg-slate-950/60 px-6 pt-3">
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-3 text-xs font-bold uppercase tracking-wider relative transition-colors cursor-pointer px-4 ${
                activeTab === "specs" ? "text-indigo-400" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Overview &amp; Specs
              {activeTab === "specs" && (
                <motion.div layoutId="modalTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("cert")}
              className={`pb-3 text-xs font-bold uppercase tracking-wider relative transition-colors cursor-pointer px-4 ${
                activeTab === "cert" ? "text-indigo-400" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Official Certificate
              {activeTab === "cert" && (
                <motion.div layoutId="modalTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
              )}
            </button>
          </div>
        )}

        {/* Modal Scrollable Content Container */}
        <div className="p-6 md:p-8 overflow-y-auto flex-grow bg-slate-900 text-slate-300">
          {activeTab === "specs" ? (
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-slate-400" /> Robot Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  {patent.description}
                </p>
              </div>

              {patent.details && (
                <>
                  {/* Detailed Use Case */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Primary Use Case</h4>
                    <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                      {patent.details.useCase}
                    </p>
                  </div>

                  {/* Key Technologies */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Core Integrated Technologies</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {patent.details.keyTech.map((tech, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300 bg-slate-800/40 p-3 rounded-xl border border-slate-800/60">
                          <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications Grid */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Mechanical &amp; Electrical Specs</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {Object.entries(patent.details.specifications).map(([key, val]) => (
                        <div key={key} className="flex justify-between items-center bg-slate-950/40 px-4 py-2.5 rounded-xl border border-slate-800/30 text-xs">
                          <span className="text-slate-500 font-semibold">{key}</span>
                          <span className="text-slate-200 font-bold text-right">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Certificate Tab (Guaranteed to be true only if certificateImage exists) */
            <div className="flex flex-col items-center justify-center py-2">
              <div className="relative max-w-lg w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 p-2">
                <img
                  src={patent.certificateImage}
                  alt={`${patent.title} — Official Patent Certificate`}
                  className="w-full h-auto object-contain max-h-[50vh] rounded-xl mx-auto"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs font-extrabold text-slate-200">Official Registration Certificate</p>
                <p className="text-[10px] text-slate-500 mt-1">Issued by the Controller General of Patents, Designs &amp; Trade Marks, Government of India</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer info */}
        <div className="bg-slate-950 px-6 py-4 flex justify-between items-center border-t border-slate-800 text-[10px] text-slate-500 font-bold tracking-wider">
          <span>Indian Patent Office · Design Register</span>
          <span className="flex items-center gap-1 text-indigo-400"><Battery className="w-3.5 h-3.5" /> Active Research Hub</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

