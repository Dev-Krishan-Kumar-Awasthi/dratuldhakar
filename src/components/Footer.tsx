"use client";

import { useEffect, useState } from "react";
import { ChevronUp, Cpu, BookOpen, FileText, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/40 bg-white dark:bg-bg-dark py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Info */}
        <div className="text-center md:text-left">
          <span className="block font-bold text-slate-800 dark:text-slate-100 text-base">Dr. Atul Dhakar</span>
          <span className="block text-xs text-slate-400 dark:text-slate-500 mt-1">
            Assistant Professor & Leader, Research & Innovation Cell
          </span>
          <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            UIT-RGPV Shivpuri, Madhya Pradesh, India
          </span>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://orcid.org/0000-0003-3457-4662"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            title="ORCID Profile"
          >
            <Cpu className="w-4 h-4 text-emerald-500" />
          </a>
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=58866418000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            title="Scopus Profile"
          >
            <BookOpen className="w-4 h-4 text-indigo-500" />
          </a>
          <a
            href="http://hdl.handle.net/10603/659555"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            title="Ph.D. Thesis on Shodhganga"
          >
            <FileText className="w-4 h-4 text-amber-500" />
          </a>
          <a
            href="https://www.youtube.com/@TheCollegeCoach"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            title="YouTube Channel"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-red-500 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.387.51A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.862.51 9.387.51 9.387.51s7.525 0 9.387-.51a3.003 3.003 0 0 0 2.11-2.108c.502-1.907.502-5.837.502-5.837s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>

        {/* Right: Copyrights */}
        <div className="text-center md:text-right text-xs text-slate-400 dark:text-slate-500">
          <p>&copy; {currentYear} Dr. Atul Dhakar. All Rights Reserved.</p>
          <p className="mt-0.5 font-medium">Built with Next.js, Tailwind v4 & Framer Motion</p>
        </div>

      </div>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-11 h-11 rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white shadow-lg shadow-primary-500/25 flex items-center justify-center hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
