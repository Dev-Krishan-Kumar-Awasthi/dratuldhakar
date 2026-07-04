import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import DigitalProducts from "@/components/DigitalProducts";
import FaultDiagnosisDemo from "@/components/FaultDiagnosisDemo";

export const metadata: Metadata = {
  title: "AI Tools & Interactive Calculators | Dr. Atul Dhakar",
  description: "Access official AI calculators and decision tools, including MP DTE choice filling tool and cgpa-percentage conversion tool by Dr. Atul Sir.",
  keywords: [
    "AI choice filling tools",
    "MP DTE cutoff calculator",
    "CGPA to percentage converter",
    "Dr. Atul Dhakar digital products",
    "Robotics automation digital planner",
  ],
};

export default function AiToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 relative z-20">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-indigo-500 transition-colors"
        >
          <MoveLeft className="w-4.5 h-4.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="relative z-10">
        <DigitalProducts />
      </div>

      {/* ML Fault Diagnosis Demo */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Research Lab</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">ML Fault Diagnosis Demo</p>
          <p className="text-base text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            An interactive simulation of Dr. Dhakar&apos;s doctoral research on fault classification of reciprocating air compressors using machine learning.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>
        <FaultDiagnosisDemo />
      </div>
    </main>
  );
}

