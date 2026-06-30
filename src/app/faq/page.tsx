import { Metadata } from "next";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dr. Atul Dhakar",
  description: "Get answers to FAQs on MP DTE engineering admission counselling, mechanical design patents, and research metrics by Dr. Atul Dhakar.",
  keywords: [
    "Admissions FAQs Madhya Pradesh",
    "Dr. Atul Dhakar FAQ",
    "choice filling counseling support",
    "robotics design patent procedures",
  ],
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
