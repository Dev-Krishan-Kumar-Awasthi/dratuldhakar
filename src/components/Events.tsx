"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Truck, Sparkles, BookOpen, User, Building, MapPin, ChevronDown, ArrowRight, MoveLeft } from "lucide-react";
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

interface GalleryItem {
  id: number;
  image: string;
  title: string;
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

const galleryData: GalleryItem[] = [
  {
    id: 0,
    image: "/code-manthan-2.jpg",
    title: "Code Manthan 2.0 — Tech Event",
    desc: "UIT-RGPV Shivpuri's flagship tech event 'Code Manthan 2.0' — celebrating innovation, coding, and student talent under Dr. Atul Dhakar's coordination.",
  },
  {
    id: 8,
    image: "/patent-workshop.jpg",
    title: "One Day Workshop — Patent Filing Process",
    desc: "One Day Workshop on Patent Filing Process at University Institute of Technology, RGPV Shivpuri — organized by Department of Mechanical Engineering.",
  },
  {
    id: 1,
    image: "/choube-vc.jpg",
    title: "Meeting with Prof. S. C. Choube",
    desc: "Prof. S. C. Choube, former Vice Chancellor, RGPV, Bhopal",
  },
  {
    id: 2,
    image: "/alok-sharma-vc.jpg",
    title: "Visit by Prof. Alok Sharma",
    desc: "Prof. Alok Sharma, Vice Chancellor, RGPV, Bhopal",
  },
  {
    id: 3,
    image: "/cbse-workshop-group.jpg",
    title: "CBSE AI Workshop — Group Photo",
    desc: "Proud to share that I was invited by Shivpuri Public School to serve as a Judge at the CBSE District-Level Workshop on \"AI Use in Education\" for teachers.",
  },
  {
    id: 4,
    image: "/cbse-workshop-honor.jpg",
    title: "CBSE AI Workshop — Memento",
    desc: "Receiving memento for serving as Judge at CBSE District-Level Workshop on \"AI Use in Education\" for teachers at Shivpuri Public School.",
  },
  {
    id: 5,
    image: "/rss-rawat.png",
    title: "With Prof. R. S. S. Rawat",
    desc: "Prof. R. S. S. Rawat, Associate Professor, IGC Sagar — during student briefing session.",
  },
  {
    id: 6,
    image: "/scindia-speech.jpg",
    title: "Shri Mant Jyotiraditya Scindia — Address",
    desc: "Shri Mant Jyotiraditya Scindia, Minister of Communications of India, addressing the crowd at RGPV Shivpuri event.",
  },
  {
    id: 7,
    image: "/scindia-rgpv-visit.jpg",
    title: "Minister Scindia's Visit to RGPV Shivpuri",
    desc: "Shri Mant Jyotiraditya Scindia, Minister of Communications of India, visiting the event at RGPV Shivpuri campus.",
  },
];

export default function Events({ isPreview = false }: { isPreview?: boolean }) {
  const [activeSegment, setActiveSegment] = useState<"workshops" | "visits" | "gallery">("gallery");

  const displayWorkshops = isPreview ? workshopsData.slice(0, 2) : workshopsData;
  const displayVisits = isPreview ? visitsData.slice(0, 2) : visitsData;
  const displayGallery = isPreview ? galleryData.slice(0, 3) : galleryData;

  return (
    <section id="engagement" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Events</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isPreview ? "Workshops & Industrial Visits" : "Workshops, Talks & Industrial Visits"}
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            Workshops, expert talks, and industrial visits I organized for students during my teaching career.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex justify-center mb-16">
          <div className="glass-panel p-1.5 rounded-2xl flex space-x-1.5 border shadow-sm flex-wrap gap-1.5">
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
            <button
              onClick={() => setActiveSegment("gallery")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center space-x-2 transition-all duration-300 cursor-pointer ${
                activeSegment === "gallery"
                  ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-md shadow-primary-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Moments & Highlights</span>
            </button>
          </div>
        </div>

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
              {displayWorkshops.map((item) => (
                <WorkshopCard key={item.id} item={item} isPreview={isPreview} />
              ))}
            </motion.div>
          ) : activeSegment === "visits" ? (
            <motion.div
              key="visits"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayVisits.map((visit, index) => (
                <VisitCard key={index} visit={visit} isPreview={isPreview} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayGallery.map((item) => (
                <GalleryCard key={item.id} item={item} isPreview={isPreview} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Redirect CTA Button for homepage overview */}
        {isPreview && (
          <div className="flex justify-center mt-12 relative z-20">
            <Link
              href="/events"
              className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>View All Events & Visits</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

function WorkshopCard({ item, isPreview = false }: { item: Workshop; isPreview?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  const cardContent = (
    <div className="flex flex-col justify-between h-full w-full">
      <div>
        {/* Header tags */}
        <div className="flex items-center justify-between text-xs mb-4">
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
            <BookOpen className="w-3.5 h-3.5 mr-1 text-indigo-500" />
            <span>Coordinator role</span>
          </span>
          <span className="font-bold text-slate-400 dark:text-slate-500">
            {item.duration}
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {item.title}
        </h3>

        {/* View Details Control - Hide on homepage preview */}
        {!isPreview && (
          <div className="flex items-center text-xs font-bold text-indigo-500 dark:text-indigo-400 mt-2">
            <span>{expanded ? "Hide Details" : "View Details"}</span>
            <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </div>
        )}

        {/* Details Description - Hide on homepage preview */}
        {!isPreview && (
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/40"
              >
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

                {item.details && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Location bottom */}
      <div className="flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800/40 pt-4 mt-6">
        <Building className="w-4 h-4 mr-2 text-indigo-500" />
        <span>Venue: {item.location}</span>
      </div>
    </div>
  );

  if (isPreview) {
    return (
      <Link href="/events" className="block h-full">
        <motion.div
          layout
          className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between cursor-pointer group hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 h-full"
        >
          {cardContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between cursor-pointer group hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5"
    >
      {cardContent}
    </motion.div>
  );
}

function VisitCard({ visit, isPreview = false }: { visit: IndustrialVisit; isPreview?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  const cardContent = (
    <div className="flex flex-col justify-between h-full w-full">
      <div>
        {/* Focus tag */}
        <div className="mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/15">
            {visit.specialization}
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {visit.name}
        </h3>

        {/* View Details Control - Hide on homepage preview */}
        {!isPreview && (
          <div className="flex items-center text-xs font-bold text-indigo-500 dark:text-indigo-400 mt-2">
            <span>{expanded ? "Hide Details" : "View Details"}</span>
            <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </div>
        )}

        {/* Details Description - Hide on homepage preview */}
        {!isPreview && (
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/40"
              >
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {visit.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Location bottom info */}
      <div className="flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800/40 pt-4 mt-6">
        <MapPin className="w-4 h-4 mr-2 text-indigo-500 shrink-0" />
        <span>Location: {visit.location}</span>
      </div>
    </div>
  );

  if (isPreview) {
    return (
      <Link href="/events" className="block h-full">
        <motion.div
          layout
          className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between cursor-pointer group hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 h-full"
        >
          {cardContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between cursor-pointer group hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5"
    >
      {cardContent}
    </motion.div>
  );
}

function GalleryCard({ item, isPreview = false }: { item: GalleryItem; isPreview?: boolean }) {
  const cardContent = (
    <div className="glass-card overflow-hidden rounded-3xl group flex flex-col h-full border border-slate-200/50 dark:border-slate-800/50">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-950 shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-semibold uppercase tracking-wider">Academic Moment</span>
        </div>
      </div>
      {/* Caption */}
      <div className="p-5 flex-grow">
        <h3 className="text-sm font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors mb-1">
          {item.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );

  if (isPreview) {
    return (
      <Link href="/events" className="block h-full">
        <motion.div layout className="cursor-pointer h-full">
          {cardContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div layout className="h-full">
      {cardContent}
    </motion.div>
  );
}
