import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Reviews & Student Testimonials | Dr. Atul Dhakar",
  description: "Read what students, researchers, and admissions counseling candidates say about the guidance and academic mentoring of Dr. Atul Sir.",
  keywords: [
    "Dr. Atul Dhakar reviews",
    "the college coach testimonials",
    "student feedback mp dte choice filling",
    "academic reviews atul sir",
  ],
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

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
        <Testimonials />
      </div>
    </main>
  );
}
