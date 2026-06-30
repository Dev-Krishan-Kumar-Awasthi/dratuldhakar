import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills & Core Competencies | Dr. Atul Dhakar",
  description: "Browse the technical skills and core expertises of Dr. Atul Dhakar, including Mechanical Engineering, Signal Processing, AI/Machine Learning, and Counselling.",
  keywords: [
    "Dr. Atul Dhakar skills",
    "mechanical engineering signal processing",
    "MATLAB programming expert",
    "Python machine learning models",
    "choice filling counseling skills",
  ],
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 glow-emerald rounded-full blur-[120px] pointer-events-none z-0" />

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
        <Skills />
      </div>
    </main>
  );
}
