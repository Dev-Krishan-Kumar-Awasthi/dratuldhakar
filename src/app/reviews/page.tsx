import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Student Reviews & Testimonials | The College Coach 24x7 | Dr. Atul Dhakar",
  description: "Real student reviews and testimonials for Dr. Atul Dhakar — The College Coach 24x7. Students share their success stories about MP DTE choice filling guidance, college admission counselling, and academic mentoring by Dr. Atul Sir. See what 18,000+ subscribers say about The College Coach YouTube channel.",
  keywords: [
    "Dr. Atul Dhakar reviews",
    "Dr. Atul Dhakar testimonials",
    "Atul Sir reviews",
    "Atul Sir feedback",
    "The College Coach reviews",
    "The College Coach testimonials",
    "The College Coach 24x7 reviews",
    "The College Coach YouTube reviews",
    "MP DTE counselling success stories",
    "MP DTE counselling testimonials",
    "student testimonials DTE choice filling",
    "student feedback mp dte choice filling",
    "college admission counselling reviews India",
    "RGPV professor student reviews",
    "UIT RGPV Shivpuri professor testimonials",
    "Mechanical Engineering professor reviews India",
    "Atul Dhakar teaching reviews",
    "DTE counselling expert reviews",
    "MP engineering admission guidance reviews",
    "The College Coach channel reviews",
    "YouTube DTE counselling reviews",
    "academic reviews atul sir",
    "MP BTech admission guidance testimonials",
  ],
  openGraph: {
    title: "Student Reviews | The College Coach 24x7 | Dr. Atul Dhakar",
    description: "Real testimonials from students who got into their dream engineering colleges with guidance from Dr. Atul Dhakar — The College Coach 24x7.",
    url: "https://dratuldhakar.vercel.app/reviews",
    images: [{ url: "/atul-sir.jpg", width: 1200, height: 630, alt: "Dr. Atul Dhakar Student Reviews" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/reviews" },
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
