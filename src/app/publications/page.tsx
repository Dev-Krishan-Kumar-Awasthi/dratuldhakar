import { Metadata } from "next";
import Publications from "@/components/Publications";

export const metadata: Metadata = {
  title: "Research Publications & Citations | Dr. Atul Dhakar",
  description: "Browse the complete database of SCI and Scopus-indexed research publications, journal metrics, and citation metrics of Dr. Atul Dhakar.",
  keywords: [
    "Dr. Atul Dhakar publications",
    "Atul Dhakar research papers",
    "fault diagnosis reciprocating air compressor",
    "mechanical signal processing",
    "machine learning classification mechanical engineering",
    "scopus publications atul dhakar",
  ],
};

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Publications isPreview={false} />
    </main>
  );
}
