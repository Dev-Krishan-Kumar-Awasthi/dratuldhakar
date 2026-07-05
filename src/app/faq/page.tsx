import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ | MP DTE Counselling Questions | Dr. Atul Dhakar | The College Coach 24x7",
  description: "Frequently Asked Questions about MP DTE choice filling, seat allotment, college predictor, engineering admission in Madhya Pradesh — answered by Dr. Atul Dhakar, founder of The College Coach 24x7 YouTube channel. Also: Dr. Dhakar's research publications, patents, qualifications, and contact details.",
  keywords: [
    "MP DTE FAQ",
    "DTE counselling FAQ",
    "DTE choice filling FAQ",
    "DTE seat allotment FAQ",
    "MP engineering admission FAQ",
    "Dr. Atul Dhakar FAQ",
    "The College Coach FAQ",
    "how to do DTE choice filling",
    "DTE choice filling kaise kare",
    "DTE seat allotment kaise milega",
    "MP DTE seat kaise milegi",
    "MP DTE reporting kaise karein",
    "how to fill DTE MP choice",
    "how to get good college in MP DTE",
    "best engineering college Madhya Pradesh",
    "top engineering colleges MP DTE",
    "SGSITS Indore DTE cutoff",
    "IET DAVV Indore DTE cutoff",
    "MITS Gwalior DTE cutoff",
    "JEE rank vs college MP DTE",
    "which college at JEE rank MP",
    "JEE rank predictor MP",
    "DTE college predictor",
    "MP DTE 2025 guide",
    "MP DTE 2026 guide",
    "Atul Dhakar FAQ",
    "Atul Sir FAQ",
    "Dr. Atul Dhakar qualifications",
    "Dr. Atul Dhakar research publications",
    "Dr. Atul Dhakar patents",
    "Dr. Atul Dhakar experience",
    "robotics design patent procedures",
    "Admissions FAQs Madhya Pradesh",
  ],
  openGraph: {
    title: "FAQ | MP DTE Counselling | Dr. Atul Dhakar | The College Coach 24x7",
    description: "All your questions about MP DTE choice filling, seat allotment, college predictor, and Dr. Atul Dhakar's academic profile — answered comprehensively.",
    url: "https://dratuldhakar.vercel.app/faq",
    images: [{ url: "https://dratuldhakar.vercel.app/atul-sir.jpg", width: 1200, height: 630, alt: "Dr. Atul Dhakar FAQ" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/faq" },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-purple rounded-full blur-[100px] pointer-events-none z-0" />

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
        <FAQSection />
      </div>
    </main>
  );
}
