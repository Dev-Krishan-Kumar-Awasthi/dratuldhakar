"use client";

import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "College Coach", id: "platform" },
  { label: "AI Tools", id: "tools" },
  { label: "Experience", id: "journey" },
  { label: "Research", id: "publications" },
  { label: "Patents", id: "patents" },
  { label: "Skills", id: "skills" },
  { label: "Reviews", id: "testimonials" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-3 text-left cursor-pointer group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-indigo-500 via-emerald-500 to-amber-500 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0 overflow-hidden">
            <img src="/atul-sir.png" alt="Dr. Atul Dhakar" className="w-full h-full rounded-full object-cover" />
          </div>
          <div>
            <span className="block font-black text-base tracking-tight text-slate-900 dark:text-slate-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Dr. Atul Dhakar
            </span>
            <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Professor & College Admission Mentor
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-1 glass-panel px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer rounded-full ${
                activeSection === item.id
                  ? "text-indigo-600 dark:text-indigo-300 font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavPill"
                  className="absolute inset-0 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all cursor-pointer focus:outline-none text-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Collapse Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden glass-panel border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 font-bold border-l-4 border-indigo-500"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
