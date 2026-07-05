import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Dr. Atul Dhakar | PhD Mechanical Engineering | UIT-RGPV Shivpuri | The College Coach",
  description: "Dr. Atul Dhakar — Assistant Professor & Research Cell Coordinator at UIT-RGPV Shivpuri, Ph.D. Mechanical Engineering from JUET Guna (9.08 CGPA, 2025), Pursuing 2nd M.Tech in Artificial Intelligence & Data Science at IIIT Ranchi, 13+ years teaching experience at SKITM/SVCE/AITR/GICTS Indore/Gwalior, Founder of The College Coach 24x7 YouTube channel (18,000+ subscribers). Expert in fault diagnosis, signal processing, and MP DTE counselling.",
  keywords: [
    "Dr. Atul Dhakar",
    "Dr Atul Dhakar",
    "Atul Dhakar",
    "Atul Sir",
    "who is Dr. Atul Dhakar",
    "who is Atul Sir",
    "Atul Dhakar Professor",
    "Atul Dhakar PhD",
    "Atul Dhakar biography",
    "Atul Dhakar profile",
    "Atul Dhakar CV",
    "Atul Dhakar resume",
    "Atul Dhakar academic profile",
    "PhD Mechanical Engineering JUET Guna",
    "JUET Guna Mechanical Engineering PhD",
    "Jaypee University Engineering Guna PhD",
    "UIT-RGPV Shivpuri professor",
    "UIT RGPV Shivpuri faculty",
    "UIT Shivpuri Mechanical Engineering",
    "Research Cell Coordinator UIT Shivpuri",
    "RGPV Shivpuri assistant professor",
    "SKITM Indore Mechanical professor",
    "SVCE Indore Mechanical professor",
    "AITR Indore Mechanical lecturer",
    "GICTS Gwalior assistant professor",
    "IIIT Ranchi AI MTech",
    "IIIT Ranchi Artificial Intelligence Data Science",
    "Second MTech IIIT Ranchi",
    "13 years teaching experience mechanical",
    "Mechanical Engineering professor Indore",
    "Mechanical Engineering professor Shivpuri",
    "Mechanical Engineering professor MP",
    "fault diagnosis mechanical engineer",
    "signal processing researcher India",
    "machine learning mechanical engineering India",
    "Atul Dhakar Scopus ID 58866418000",
    "Atul Dhakar ORCID 0000-0003-3457-4662",
    "Atul Dhakar Google Scholar",
    "Atul Dhakar researcher",
    "The College Coach 24x7 founder",
    "The College Coach Atul Dhakar",
    "Atul Dhakad",
    "Dr. Atul Dhakad",
    "Atul Dhakad RGPV",
    "International Association of Engineers member 246598",
    "IMPARC membership",
    "Vigyan Bharti lifetime member",
  ],
  openGraph: {
    title: "About Dr. Atul Dhakar | PhD Mechanical Engineering | UIT-RGPV Shivpuri",
    description: "Academic profile of Dr. Atul Dhakar — 13+ years teaching, Ph.D. Mechanical Engineering, Research Cell Head at UIT-RGPV Shivpuri, founder of The College Coach 24x7 YouTube channel.",
    url: "https://dratuldhakar.vercel.app/about",
    images: [{ url: "https://dratuldhakar.vercel.app/atul-sir.jpg", width: 1200, height: 630, alt: "Dr. Atul Dhakar — About Profile" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <BackLink />
      <About />
    </PageShell>
  );
}
