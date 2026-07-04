"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Award, Search, Calendar, Landmark, ArrowRight, MoveLeft, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  id: number;
  title: string;
  organizer: string;
  duration: string;
  category: "course" | "fdp" | "webinar" | "membership";
  extra?: string;
  certificateImage?: string;
}

const certsData: Certificate[] = [
  // Memberships
  {
    id: 19,
    title: "Mentor Membership — IMPARC",
    organizer: "Ignited Minds Professional & Academic Research Consortium (IMPARC) via MentorsGate.com",
    duration: "19/11/2025 (Cert. No: IMP-CMP-ME-MP-2025-2098)",
    category: "membership",
    extra: "International platform for professional subject matter experts (SMEs) — access to exclusive mentoring roles, academic collaborations & global networking",
    certificateImage: "/cert-imparc-membership.png",
  },

  // Courses & Certifications
  {
    id: 1,
    title: "Diploma in Electric Vehicle Technology",
    organizer: "Alison (ID – 45855047)",
    duration: "28 Hours (Score: 95%)",
    category: "course",
    extra: "FAS Accredited EV syllabus",
    certificateImage: "/cert-alison-ev-diploma.png",
  },
  {
    id: 2,
    title: "Advanced Professional Course on Solar Energy Technology & Management",
    organizer: "Madhav Institute of Technology & Science (MITS), Gwalior",
    duration: "6 Months (Aug 2015 – Feb 2016)",
    category: "course",
    extra: "Grade 'A' — Organized by Entrepreneurship Development Cell",
    certificateImage: "/cert-mits-solar.jpg",
  },
  {
    id: 3,
    title: "LaTeX101x: LaTeX for Students, Engineers, and Scientists",
    organizer: "IITBombayX (IIT Bombay)",
    duration: "24 Sept – 2 Dec 2019",
    category: "course",
    extra: "Secured Grade 'A+' — Honour Code Certificate",
    certificateImage: "/cert-iitb-latex.png",
  },
  {
    id: 4,
    title: "Introduction to Thermodynamics: Transferring Energy from Here to There",
    organizer: "University of Michigan (Coursera)",
    duration: "8 Weeks (Completed: 25/03/2018)",
    category: "course",
    extra: "Authorized online course by University of Michigan",
    certificateImage: "/cert-coursera-thermodynamics.png",
  },
  {
    id: 5,
    title: "Fundamentals of Manufacturing Processes (Elite)",
    organizer: "IIT Roorkee (NPTEL SWAYAM)",
    duration: "Jul–Oct 2019 (12 Weeks)",
    category: "course",
    extra: "Consolidated Score: 60% — Ministry of HRD, Govt. of India",
    certificateImage: "/cert-nptel-manufacturing.jpg",
  },
  {
    id: 6,
    title: "Training Programme on MASTER CAM",
    organizer: "MSME Technology Centre (IGTR, Indore)",
    duration: "10/06/2019 to 15/06/2019",
    category: "course",
    extra: "Indo-German Tool Room, Ministry of MSME, Govt. of India",
    certificateImage: "/cert-msme-mastercam.jpg",
  },
  {
    id: 20,
    title: "Certificate in Pro-E (CAD/CAM Systems)",
    organizer: "CAD King Solutions and Services (Autodesk USA Authorised User)",
    duration: "05-Nov-2009 to 10-Jan-2010",
    category: "course",
    extra: "Grade 'A' — Certified CAD Company, Indore (M.P.)",
    certificateImage: "/cert-cadking-pro-e.png",
  },
  {
    id: 22,
    title: "Certificate in AutoCAD (CAD/CAM Systems)",
    organizer: "CAD King Solutions and Services (Autodesk USA Authorised User)",
    duration: "05-June-2009 to 05-Aug-2009",
    category: "course",
    extra: "Grade 'A' — Certified CAD Company, Indore (M.P.)",
    certificateImage: "/cert-cadking-autocad.png",
  },

  // FDPs & Conferences
  {
    id: 7,
    title: "Presented Research Paper at ICMME-2025 International Conference",
    organizer: "Jaypee University of Engineering and Technology, Guna (M.P.)",
    duration: "April 28-30, 2025 (Offline)",
    category: "fdp",
    extra: "Paper: 'Fault Diagnosis of Air Compressor system using LMD and LR machine learning classifier'",
    certificateImage: "/cert-icmme-2025-presenter.jpg",
  },
  {
    id: 8,
    title: "NPTEL-AICTE Faculty Development Programme",
    organizer: "IIT Roorkee & AICTE (Govt. of India)",
    duration: "Jul–Oct 2019",
    category: "fdp",
    extra: "Fundamentals of Manufacturing Processes (Consolidated Score: 60%)",
    certificateImage: "/cert-nptel-aicte-fdp.png",
  },
  {
    id: 9,
    title: "Research Perspectives in I C Engines Short-Term Course",
    organizer: "Govt. College of Engineering, Amravati (AICTE-QIP Sponsored)",
    duration: "December 3-8, 2018 (1 Week)",
    category: "fdp",
    extra: "Quality Improvement Program (QIP) conducted by Mechanical Engineering Dept.",
    certificateImage: "/cert-gcoea-icengines.jpg",
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
    organizer: "SAGE University, Indore (Under E & ICT Academy, IIITDM Jabalpur)",
    duration: "13–17 January 2020 (1 Week)",
    category: "fdp",
    extra: "Organized by Mechanical Engineering Dept. (SIRT)",
    certificateImage: "/cert-sage-robotics-fdp.jpg",
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
  {
    id: 21,
    title: "One day Workshop on eSIM, a First Course in the IoT Series for Teachers",
    organizer: "Teaching Learning Centre ICT at IIT Bombay (PMMMNMTT, MHRD)",
    duration: "21 September 2019",
    category: "webinar",
    extra: "Held at IPS Academy, FOSSEE Project, IIT Bombay",
    certificateImage: "/cert-iitb-esim-workshop.jpg",
  },
];

export default function Certifications({ isPreview = false }: { isPreview?: boolean }) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    setLimit(6);
  }, [activeTab, searchQuery]);

  const filteredCerts = certsData.filter((cert) => {
    const matchesTab = activeTab === "all" || cert.category === activeTab;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.extra && cert.extra.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const displayCerts = isPreview ? certsData.slice(0, 6) : filteredCerts.slice(0, limit);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 glow-purple rounded-full blur-[100px] pointer-events-none z-0" />


      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Certificates</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isPreview ? "Courses & Certifications" : "Courses, FDPs & Certifications"}
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
            Online and offline courses from IITs, NPTEL, Alison, Coursera, and other institutions.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {!isPreview && (
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
            <div className="flex flex-wrap gap-1 bg-slate-100 dark:bg-slate-900/60 p-1 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 w-full md:w-auto">
              {[
                { id: "all", label: `All Certs (${certsData.length})` },
                { id: "membership", label: "Memberships" },
                { id: "course", label: "Courses" },
                { id: "fdp", label: "FDP & Conferences" },
                { id: "webinar", label: "Workshops/Webinars" },
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
        )}

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayCerts.map((cert) => (
              <CertCard key={cert.id} cert={cert} isPreview={isPreview} />
            ))}
          </AnimatePresence>

          {!isPreview && filteredCerts.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-400 dark:text-slate-500">
              No certifications match your selection.
            </div>
          )}
        </div>

        {/* Redirect CTA Button for homepage overview */}
        {isPreview && (
          <div className="flex justify-center mt-12 relative z-20">
            <Link
              href="/certifications"
              className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>View All Certifications</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        )}

        {/* Load More Button for detail subpage */}
        {!isPreview && filteredCerts.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setLimit((prev) => (prev === 6 ? filteredCerts.length : 6))}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-primary-500/20 hover:scale-105 transition-transform cursor-pointer"
            >
              {limit === 6 ? `View All Certifications (${filteredCerts.length})` : "Show Less"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

function CertCard({ cert, isPreview = false }: { cert: Certificate; isPreview?: boolean }) {
  const [certOpen, setCertOpen] = useState(false);
  const router = useRouter();

  const cardMarkup = (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-3xl border flex flex-col h-full group hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all overflow-hidden"
    >
      {/* Certificate image thumbnail — always visible if available */}
      {cert.certificateImage && (
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCertOpen(true); }}
          className="relative w-full shrink-0 cursor-pointer group/cert"
          style={{ height: "180px" }}
        >
          <img
            src={cert.certificateImage}
            alt={cert.title}
            className="w-full h-full object-contain bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 group-hover/cert:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-amber-500/90 text-amber-950 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full shadow-lg">
            <Award className="w-2.5 h-2.5" /> Certificate
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">
            <span className="bg-indigo-600/90 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Eye className="w-3 h-3" /> View Full Certificate
            </span>
          </div>
        </button>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 text-[10px] uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-500 mb-4">
          <Award className="w-3.5 h-3.5 text-indigo-500" />
          <span>
            {cert.category === "course"
              ? "Certification Course"
              : cert.category === "fdp"
              ? "FDP & Conference"
              : cert.category === "membership"
              ? "Professional Membership"
              : "Workshop / Webinar"}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 leading-snug mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {cert.title}
        </h3>

        <div className="flex items-start text-xs text-slate-500 dark:text-slate-400 mb-2">
          <Landmark className="w-4 h-4 mr-2 text-slate-400 shrink-0 mt-0.5" />
          <span>{cert.organizer}</span>
        </div>

        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-2">
          <Calendar className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
          <span>{cert.duration}</span>
        </div>

        {cert.extra && (
          <div className="border-t border-slate-100 dark:border-slate-800/40 pt-3 mt-4 text-[11px] text-slate-400 dark:text-slate-500 italic font-medium">
            {cert.extra}
          </div>
        )}
      </div>
    </motion.div>
  );

  const lightbox = certOpen && cert.certificateImage ? (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setCertOpen(false)}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <button
            onClick={() => setCertOpen(false)}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <img
            src={cert.certificateImage}
            alt={cert.title}
            className="w-full h-auto object-contain max-h-[80vh]"
          />
          <div className="bg-slate-900 px-4 py-3 text-center">
            <p className="text-xs font-bold text-slate-200">{cert.title}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{cert.organizer}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ) : null;

  if (isPreview) {
    return (
      <>
        {lightbox}
        <div
          onClick={() => router.push("/certifications")}
          className="cursor-pointer h-full"
        >
          {cardMarkup}
        </div>
      </>
    );
  }

  return (
    <>
      {lightbox}
      <div className="h-full">{cardMarkup}</div>
    </>
  );
}
