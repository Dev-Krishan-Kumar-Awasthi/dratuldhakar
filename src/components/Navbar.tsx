"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "College Coach", path: "/college-coach" },
  { label: "AI Tools", path: "/ai-tools" },
  { label: "Experience", path: "/journey" },
  { label: "Research", path: "/publications" },
  { label: "Patents", path: "/patents" },
  { label: "Skills", path: "/skills" },
  { label: "Reviews", path: "/reviews" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const activePath = pathname || "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
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
        <Link
          href="/"
          onClick={handleNavClick}
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
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-1 glass-panel px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={handleNavClick}
              className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer rounded-full ${
                activePath === item.path
                  ? "text-indigo-600 dark:text-indigo-300 font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              {item.label}
              {activePath === item.path && (
                <motion.div
                  layoutId="activeNavPill"
                  className="absolute inset-0 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
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
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleNavClick}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activePath === item.path
                      ? "bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 font-bold border-l-4 border-indigo-500"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
