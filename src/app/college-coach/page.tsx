import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import TheCollegeCoach from "@/components/TheCollegeCoach";

export const metadata: Metadata = {
  title: "The College Coach 24x7 | MP DTE Counselling | Choice Filling Expert | Dr. Atul Dhakar",
  description: "The College Coach 24x7 — Official YouTube channel by Dr. Atul Dhakar (18,000+ subscribers, 750+ videos). FREE expert guidance on MP DTE choice filling 2025-2026, seat allotment, college predictor, JEE Mains rank vs college, BTech admission process in Madhya Pradesh. Watch now and get your dream engineering college!",
  keywords: [
    "The College Coach 24x7",
    "The College Coach YouTube",
    "The College Coach Atul Dhakar",
    "The College Coach Atul Sir",
    "College Coach 24x7 YouTube",
    "@TheCollegeCoach",
    "MP DTE counselling 2025",
    "MP DTE counselling 2026",
    "MP DTE choice filling 2025",
    "MP DTE choice filling 2026",
    "MP DTE choice filling strategy",
    "MP DTE choice filling tips",
    "MP DTE seat allotment 2025",
    "MP DTE seat allotment 2026",
    "MP DTE college predictor 2025",
    "MP DTE college predictor 2026",
    "MP DTE cutoff 2025",
    "MP DTE BTech cutoff",
    "MP DTE reporting process",
    "MP DTE registration",
    "MP DTE document verification",
    "MP DTE round 1 allotment",
    "MP DTE round 2 allotment",
    "DTE counselling MP",
    "DTE choice filling",
    "DTE seat allotment",
    "DTE college predictor",
    "DTE Madhya Pradesh counselling",
    "DTE MP BTech admission",
    "DTE MP engineering admission",
    "how to fill DTE choice",
    "how to do MP DTE choice filling",
    "DTE choice filling kaise kare",
    "DTE seat allotment kaise milega",
    "MP DTE seat kaise milegi",
    "MP DTE reporting kaise karein",
    "JEE Mains rank MP DTE",
    "JEE Mains 2025 MP counselling",
    "JEE Mains 2026 MP counselling",
    "JEE rank vs college MP",
    "which college at JEE rank MP",
    "JEE rank predictor MP",
    "MP BTech JEE counselling",
    "best engineering college Madhya Pradesh DTE",
    "SGSITS Indore admission DTE",
    "IET DAVV Indore DTE admission",
    "MITS Gwalior DTE admission",
    "JEC Jabalpur DTE admission",
    "MANIT Bhopal DTE",
    "LNCT Bhopal DTE admission",
    "BTech admission MP 2025",
    "BTech admission MP 2026",
    "engineering admission MP",
    "engineering admission guidance MP",
    "free DTE counselling guidance",
    "free MP DTE help online",
    "college coach for DTE",
    "DTE coaching YouTube",
    "best DTE choice filling guide",
    "DTE counselling YouTube channel",
    "Dr. Atul Dhakar counselling",
    "Atul Sir DTE guidance",
    "Atul Sir YouTube",
    "Atul Sir College Coach",
    "Counselling Coordinator SVCE Indore",
    "Counselling Coordinator SKITM Indore",
  ],
  openGraph: {
    title: "The College Coach 24x7 | FREE MP DTE Counselling Guidance | Dr. Atul Dhakar",
    description: "FREE expert guidance on MP DTE choice filling, seat allotment, college predictor and BTech admission in Madhya Pradesh by Dr. Atul Dhakar — 18,000+ subscribers, 750+ videos.",
    url: "https://dratuldhakar.vercel.app/college-coach",
    images: [{ url: "https://dratuldhakar.vercel.app/atul-sir.jpg", width: 1200, height: 630, alt: "The College Coach 24x7 — Dr. Atul Dhakar MP DTE Counselling" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/college-coach" },
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
