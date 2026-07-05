import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Academic Journey | 13+ Years Experience | Dr. Atul Dhakar | UIT-RGPV to JUET PhD",
  description: "Academic and professional journey of Dr. Atul Dhakar — 13+ years teaching experience across UIT-RGPV Shivpuri (2025–present), SKITM Indore (2021–2024), SVCE Indore (2017–2020), GICTS Gwalior (2014–2016), AITR Indore (2010–2014). Ph.D. Mechanical Engineering JUET Guna (2025, 9.08 CGPA). Pursuing 2nd M.Tech AI & Data Science IIIT Ranchi. M.Tech Thermal Systems RGPV (2016). B.E. Mechanical RGPV (2010).",
  keywords: [
    "Dr. Atul Dhakar experience",
    "Atul Dhakar teaching experience",
    "Atul Dhakar career",
    "Atul Dhakar academic journey",
    "Atul Dhakar qualifications",
    "Atul Dhakar education",
    "Dr. Atul Dhakar PhD JUET Guna",
    "PhD Mechanical Engineering JUET Guna 2025",
    "JUET Guna Mechanical PhD 9.08 CGPA",
    "UIT RGPV Shivpuri assistant professor 2025",
    "SKITM Indore assistant professor 2021 2024",
    "SVCE Indore assistant professor 2017 2020",
    "GICTS Gwalior assistant professor",
    "AITR Indore mechanical lecturer 2010 2014",
    "IIIT Ranchi MTech AI Data Science",
    "Second MTech Artificial Intelligence IIIT Ranchi",
    "MTech Thermal Systems RGPV 2016",
    "BE Mechanical Engineering RGPV 2010",
    "Govt Excellence School Shivpuri",
    "13 years teaching experience Mechanical Engineering",
    "Research Cell Coordinator UIT Shivpuri",
    "Counselling Coordinator SVCE Indore",
    "Counselling Coordinator SKITM Indore",
    "Mechanical Engineering professor career India",
  ],
  openGraph: {
    title: "Academic Journey | Dr. Atul Dhakar | 13+ Years Teaching Experience",
    description: "Complete academic and career timeline of Dr. Atul Dhakar — from AITR Indore (2010) to UIT-RGPV Shivpuri (2025), PhD JUET Guna, pursuing MTech IIIT Ranchi.",
    url: "https://dratuldhakar.vercel.app/journey",
    images: [{ url: "/atul-sir.jpg", width: 1200, height: 630, alt: "Dr. Atul Dhakar Academic Journey" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/journey" },
};

export default function JourneyPage() {
  return (
    <PageShell>
      <BackLink />
      <Timeline isPreview={false} />
    </PageShell>
  );
}
