import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Dr. Atul Dhakar | Professor & Counselling Expert",
  description: "Learn more about Dr. Atul Dhakar's 13+ years of teaching experience, Ph.D. research focus, admissions guidance portal, and academic background.",
  keywords: [
    "About Dr. Atul Dhakar",
    "Atul Dhakar bio",
    "UIT-RGPV Shivpuri Professor",
    "mechanical engineering faculty profile",
    "Madhya Pradesh choice filling expert",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 glow-purple rounded-full blur-[120px] pointer-events-none z-0" />

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
        <About />
      </div>
    </main>
  );
}
