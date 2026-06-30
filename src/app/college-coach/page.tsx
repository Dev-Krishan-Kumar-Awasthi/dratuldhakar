import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import TheCollegeCoach from "@/components/TheCollegeCoach";

export const metadata: Metadata = {
  title: "The College Coach Admissions Counselling | Dr. Atul Dhakar",
  description: "Get expert counselling guidance for MP DTE Choice Filling, B.Tech seat allotments, college cutoffs, and counseling strategies by Dr. Atul Dhakar.",
  keywords: [
    "The College Coach",
    "MP DTE choice filling 2026",
    "B.Tech admission counselling",
    "counseling guidelines madhya pradesh",
    "Dr. Atul Dhakar counselling YouTube",
  ],
};

export default function CollegeCoachPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-1/3 left-1/4 w-[30rem] h-[30rem] glow-emerald rounded-full blur-[100px] pointer-events-none z-0" />

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
        <TheCollegeCoach />
      </div>
    </main>
  );
}
