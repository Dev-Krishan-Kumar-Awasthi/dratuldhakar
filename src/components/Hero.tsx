"use client";

import Link from "next/link";
import { Download, Mail, BookOpen, FileText, Award, Key, ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const metrics = [
  { label: "Years Teaching", value: "13+" },
  { label: "Research Papers", value: "11" },
  { label: "Design Patents", value: "6" },
  { label: "SCI Papers", value: "3" },
];

const profiles = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=x8wHk3YAAAAJ", icon: GraduationCap },
  { label: "ORCID", href: "https://orcid.org/0000-0003-3457-4662", icon: BookOpen },
  { label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=58866418000", icon: FileText },
  { label: "Ph.D. Thesis", href: "http://hdl.handle.net/10603/659555", icon: Award },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden">
      {/* Interactive Particles Background */}
      <ParticlesBackground />
      
      <div className="section-container relative z-10">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-content"
          >
            <span className="section-eyebrow">Academic Portfolio</span>

            <h1 className="hero-title tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 dark:from-white dark:via-slate-200 dark:to-indigo-200">
              Dr. Atul Dhakar
            </h1>

            <p className="hero-subtitle text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-accent-emerald">
              Assistant Professor · Research &amp; Innovation Cell Head
            </p>
            <p className="hero-role font-medium mt-1">UIT-RGPV Shivpuri, Madhya Pradesh</p>

            <p className="hero-bio text-slate-600 dark:text-slate-400">
              Mechanical engineering educator and researcher with 13+ years of experience.
              Ph.D. from JUET Guna (9.08 CGPA) in fault diagnosis using signal processing
              and machine learning. Currently pursuing M.Tech in AI &amp; Data Science at IIIT Ranchi.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                <Mail className="w-4 h-4" />
                Get in Touch
              </Link>
              <a href="/Atul_Dhakar_Resume.pdf" download className="btn-secondary">
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <Link href="/publications" className="btn-ghost group">
                View Research
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="hero-visual relative flex items-center justify-center"
          >
            {/* Glowing background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/15 to-indigo-500/10 blur-3xl rounded-full scale-75 -z-10 animate-pulse" />

            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-slate-200/60 dark:border-slate-800/60 shadow-2xl relative group overflow-hidden p-1.5 bg-white dark:bg-slate-900 transition-all duration-300">
              <img src="/atul-sir.jpg" alt="Dr. Atul Dhakar" className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105" />
            </div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="hero-badge hero-badge-top hover:scale-105 transition-transform"
            >
              <Key className="w-4 h-4 text-primary-500 dark:text-primary-400" />
              <span className="font-semibold text-xs text-slate-700 dark:text-slate-200">6 Design Patents</span>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="hero-badge hero-badge-bottom hover:scale-105 transition-transform"
            >
              <Award className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold text-xs text-slate-700 dark:text-slate-200">Research Cell Head</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer content: Metrics & Profiles (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 md:mt-16"
        >
          <div className="hero-metrics">
            {metrics.map((m) => (
              <div key={m.label} className="hero-metric hover:border-primary-500/30 hover:shadow-lg transition-all duration-300">
                <span className="stat-value bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-indigo-300">{m.value}</span>
                <span className="stat-label">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-profiles">
            {profiles.map((p) => {
              const Icon = p.icon;
              return (
                <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className="profile-chip">
                  <Icon className="w-3.5 h-3.5" />
                  {p.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
