"use client";

import { useEffect, useState, useRef } from "react";
import { Award, BookOpen, Key, GraduationCap, Cpu, MapPin, Languages, Briefcase, FlaskConical, CheckCircle2, ChevronRight, Bookmark } from "lucide-react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    title: "Teaching & Academics",
    desc: "13+ years across five institutions. Currently Assistant Professor at UIT-RGPV Shivpuri.",
    icon: GraduationCap,
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    title: "Research & Publications",
    desc: "3 SCI, 1 E-SCI, 3 Scopus, 1 book chapter, and 3 UGC-approved journal papers.",
    icon: FlaskConical,
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Innovation & Patents",
    desc: "Research Cell Head. Four published robot design patents, two under process.",
    icon: Cpu,
    gradient: "from-purple-500/20 to-pink-500/10",
  },
];

const stats = [
  { label: "Years Teaching", value: 13, suffix: "+", icon: Award },
  { label: "Research Papers", value: 11, suffix: "", icon: BookOpen },
  { label: "Design Patents", value: 6, suffix: "", icon: Key },
  { label: "SCI Papers", value: 3, suffix: "", icon: FlaskConical },
];

const qualifications = [
  "Pursuing Second M.Tech in Artificial intelligence & Data Science — IIIT Ranchi",
  "Ph.D. in Mechanical Engineering (Aug 2025) — JUET Guna | 9.08 CGPA",
  "M.Tech in Thermal Systems & Design (2016) — ShriRam College, Gwalior | 7.83 CGPA (Honours)",
  "B.E. in Mechanical Engineering (2010) — SDBCE, Indore | First Division",
  "Higher Secondary (PCM, 2006) — Govt. Excellence School No. 1, Shivpuri",
];

const subjectsTaught = [
  "Engineering Graphics", "BME", "Thermodynamics", "HMT", "Fluid Mechanics",
  "TOM", "SOM", "Mechanical Vibration", "Material Technology",
];

const memberships = [
  "Professional Member — IMPARC",
  "Permanent Member — International Association of Engineers (ID: 246598)",
  "Lifetime Member — Vigyan Bharti",
];

function StatCounter({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: React.ComponentType<{ className?: string }> }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const steps = 30;
    const increment = end / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 40);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="surface-card p-6 flex items-center gap-5 hover:border-primary-500/25 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-500/10 text-primary-500 dark:text-primary-400">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="stat-value text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">{count}{suffix}</div>
        <div className="stat-label text-xs tracking-wider text-slate-400 dark:text-slate-500 mt-0.5">{label}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionHeader
          eyebrow="About"
          title="Academic Profile"
          description="Mechanical engineering professor, researcher, and Research & Innovation Cell Head at UIT-RGPV Shivpuri."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-card p-8 sm:p-10 mb-12 border-l-4 border-l-primary-500 relative overflow-hidden"
        >
          {/* Subtle design element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-500/10 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            <div className="lg:col-span-2 space-y-5 text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Dr. Atul Dhakar</strong> is an accomplished Assistant Professor of Mechanical Engineering with <strong className="text-slate-900 dark:text-white font-semibold">13+ years</strong> of teaching, academic administration, and research experience across leading engineering institutions in Indore, Gwalior, and Shivpuri.
              </p>
              <p>
                He earned his <strong className="text-slate-900 dark:text-white font-semibold">Ph.D. in Mechanical Engineering</strong> from JUET Guna in August 2025 with an outstanding CGPA of <strong className="text-slate-900 dark:text-white font-semibold">9.08</strong>. His doctoral research focused on the intelligent fault diagnosis of reciprocating air compressors by integrating advanced signal processing and machine learning techniques, under the guidance of Dr. Bhagat Singh and Dr. Pankaj Gupta. To further strengthen his expertise in emerging technologies, he is currently pursuing a <strong className="text-slate-900 dark:text-white font-semibold">Second M.Tech in Artificial Intelligence &amp; Data Science</strong> from IIIT Ranchi.
              </p>
              <p>
                Currently serving at University Institute of Technology, RGPV Shivpuri, Dr. Dhakar holds several key academic and administrative leadership roles. He leads the <strong className="text-slate-900 dark:text-white font-semibold">Research &amp; Innovation Cell</strong> and serves as Assistant Exam Superintendent, Time-Table Coordinator, Training &amp; Placement Representative, and Lab In-charge for the IC Engine, Basic Mechanical Engineering, and Engineering Drawing laboratories.
              </p>
              <p>
                His academic interests span <strong className="text-slate-900 dark:text-white font-semibold">Artificial Intelligence, Machine Learning, Predictive Maintenance, Condition Monitoring, Signal Processing, Industrial Diagnostics, and Mechanical System Reliability</strong>. Passionate about bridging the gap between academia and industry, he is committed to advancing engineering education, fostering innovation, mentoring students, and developing intelligent solutions for real-world industrial challenges.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Location", text: "Indore, M.P. · Permanent: Shivpuri, 473551" },
                { icon: Languages, label: "Languages", text: "Hindi & English" },
                { icon: Briefcase, label: "Current Role", text: "Assistant Professor, UIT-RGPV Shivpuri · Since Sept 2025" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="p-4 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-xl hover:border-primary-500/20 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{item.label}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="surface-card p-6 border-t-2 hover:border-t-primary-500/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.gradient} text-primary-500 dark:text-primary-400 mb-5`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-[0.875rem] text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="surface-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-tight mb-5 text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-500" />
                Academic Qualifications
              </h3>
              <ul className="space-y-4">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <ChevronRight className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="surface-card p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-primary-500" />
                Subjects Taught
              </h3>
              <div className="flex flex-wrap gap-2">
                {subjectsTaught.map((s) => <span key={s} className="tag text-xs font-semibold">{s}</span>)}
              </div>
            </div>
            
            <div className="border-t border-slate-100 dark:border-slate-800/50 pt-5">
              <h3 className="text-lg font-bold tracking-tight mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-primary-500" />
                Memberships
              </h3>
              <ul className="space-y-3">
                {memberships.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} icon={s.icon} />
          ))}
        </div>

        <div className="surface-card p-6 sm:p-8 mt-12 border-l-4 border-l-emerald-500">
          <h3 className="text-lg font-bold tracking-tight mb-5 text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Academic Achievements
          </h3>
          <ul className="space-y-3.5">
            {[
              "Highest SGPA in M.Tech for 3rd and 4th semesters (82%, 90%) at ShriRam College, Gwalior.",
              "Faculty Advisor, Eco-Kart Race team at SVCE Indore (2018 & 2019).",
              "Designed college brochures and promotional banners for SVCE and SKITM, Indore.",
              "Paper reviewer for SCI and Scopus indexed journals including The Journal of Supercomputing and Measurement Science and Technology.",
            ].map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
