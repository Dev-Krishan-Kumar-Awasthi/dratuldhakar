import { Metadata } from "next";
import Patents from "@/components/Patents";

export const metadata: Metadata = {
  title: "Robotics & Design Patents | Dr. Atul Dhakar",
  description: "View the official mechanical engineering and automated robotics design patents filed and published by Dr. Atul Dhakar.",
  keywords: [
    "Dr. Atul Dhakar patents",
    "atul dhakar mechanical designs",
    "indian patent office",
    "robotics patents",
    "reciprocating air compressor patent",
    "air compressor fault diagnosis",
  ],
};

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Patents isPreview={false} />
    </main>
  );
}
