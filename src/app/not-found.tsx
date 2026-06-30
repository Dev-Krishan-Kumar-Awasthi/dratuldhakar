"use client";

import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-bg-light dark:bg-bg-dark text-foreground px-6 py-12 pattern-grid">
      <ParticlesBackground />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel max-w-md w-full rounded-3xl p-8 sm:p-10 text-center border border-slate-200/50 dark:border-slate-800/50 shadow-lg relative z-10"
      >
        <div className="w-16 h-16 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 flex items-center justify-center mx-auto mb-6 border border-indigo-500/15">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">
          Page Not Found
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-primary-500/25 hover:-translate-y-0.5 transition-all duration-300 w-full"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
