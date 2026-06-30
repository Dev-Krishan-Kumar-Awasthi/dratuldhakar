import { Metadata } from "next";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Academic & Professional Journey | Dr. Atul Dhakar",
  description: "Explore the professional experience, Ph.D. research tenure, M.Tech pursues, and instructional achievements of Dr. Atul Dhakar (UIT-RGPV Shivpuri).",
  keywords: [
    "Dr. Atul Dhakar journey",
    "Atul Dhakar experience",
    "UIT-RGPV Shivpuri Professor",
    "IIIT Ranchi M.Tech AI",
    "JUET Guna PhD Mechanical",
    "Mechanical Engineering faculty",
    "Admissions counseling expert Madhya Pradesh",
  ],
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Timeline isPreview={false} />
    </main>
  );
}
