import { Metadata } from "next";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "Professional Certifications & FDPs | Dr. Atul Dhakar",
  description: "Browse the certifications, Faculty Development Programs (FDPs), and professional achievements of Dr. Atul Dhakar.",
  keywords: [
    "Dr. Atul Dhakar certifications",
    "atul dhakar fdp courses",
    "mechanical engineering certifications",
    "nptel courses atul dhakar",
    "teacher development programs mp",
  ],
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Certifications isPreview={false} />
    </main>
  );
}
