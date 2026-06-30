"use client";

import { useEffect, useState } from "react";
import { Download, Mail, BookOpen, Cpu, FileText, ChevronDown, Award, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const titles = [
  "Founder @ The College Coach",
  "Ph.D. in Mechanical Engineering",
  "MP DTE Admission Expert",
  "Assistant Professor @ UIT-RGPV",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeTitle = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 25);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 55);
    }

    if (!isDeleting && charIndex === activeTitle.length) {
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden antigravity-grid"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] glow-spotlight rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-extrabold uppercase tracking-wider mb-6 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin" style={{ animationDuration: "8s" }} />
            <span>Academician & Admission Mentor</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-[1.1] text-slate-900 dark:text-white"
          >
            Dr. Atul Dhakar
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-8 md:h-10 text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-500 to-emerald-400 bg-clip-text text-transparent mb-6 flex items-center"
          >
            <span>{currentText}</span>
            <span className="w-0.5 h-6 bg-indigo-500 ml-2 animate-pulse rounded-full" />
          </motion.div>

          {/* Short 1-sentence bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed"
          >
            Helping engineering students secure top college seats through smart choice filling, while researching intelligent machinery and robotics.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
            <a
              href="/Atul_Dhakar_Resume.pdf"
              download
              className="px-7 py-3.5 rounded-2xl glass-card text-slate-800 dark:text-slate-100 font-bold text-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Profile badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-wrap gap-3 pt-6 border-t border-slate-200/60 dark:border-slate-800/60"
          >
            <a href="https://orcid.org/0000-0003-3457-4662" target="_blank" rel="noopener noreferrer" className="glass-card px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 hover:text-indigo-500">
              <Cpu className="w-3.5 h-3.5 text-emerald-500" />
              <span>ORCID</span>
            </a>
            <a href="https://www.scopus.com/authid/detail.uri?authorId=58866418000" target="_blank" rel="noopener noreferrer" className="glass-card px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 hover:text-indigo-500">
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              <span>Scopus</span>
            </a>
            <a href="http://hdl.handle.net/10603/659555" target="_blank" rel="noopener noreferrer" className="glass-card px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 hover:text-indigo-500">
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Thesis</span>
            </a>
          </motion.div>
        </div>

        {/* Right Photo Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-72 h-80 sm:w-85 sm:h-96"
          >
            <div className="absolute inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-emerald-500/30 blur-2xl z-0 animate-pulse" />

            <div className="w-full h-full glass-panel rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-3 relative z-10 shadow-2xl overflow-hidden group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src="/atul-sir.png"
                  alt="Dr. Atul Dhakar"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-black text-white">Dr. Atul Dhakar</h3>
                  <p className="text-xs text-slate-300">Assistant Professor & Founder @ The College Coach</p>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 z-20 glass-card px-3.5 py-2 rounded-2xl border border-indigo-500/30 shadow-lg flex items-center space-x-2"
            >
              <Award className="w-4 h-4 text-indigo-500 shrink-0" />
              <span className="text-xs font-bold">Ph.D. Mechanical</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 z-20 glass-card px-3.5 py-2 rounded-2xl border border-emerald-500/30 shadow-lg flex items-center space-x-2"
            >
              <Users className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-xs font-bold">10k+ Students</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
