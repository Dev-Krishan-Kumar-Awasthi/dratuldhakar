import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & Collaboration Details | Dr. Atul Dhakar",
  description: "Get in touch with Dr. Atul Dhakar for academic research collaboration, robotics design consultation, admissions counselling advice, or media inquiries.",
  keywords: [
    "Contact Dr. Atul Dhakar",
    "Atul Dhakar office address",
    "email atul sir",
    "counseling contact number",
    "mechanical research collaboration mp",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] glow-emerald rounded-full blur-[100px] pointer-events-none z-0" />

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
        <Contact />
      </div>
    </main>
  );
}
