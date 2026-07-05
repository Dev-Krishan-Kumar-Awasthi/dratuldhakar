import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "Certifications & FDPs | NPTEL IIT Alison IIT Bombay | Dr. Atul Dhakar",
  description: "Professional certifications, FDPs and courses completed by Dr. Atul Dhakar — ICMME-2025 Jaypee University Guna, Online Diploma Electric Vehicle Technology (Alison, 95%), Solar Energy Technology Management (MITS Gwalior), Research Perspective IC Engines (AICTE-QIP), NPTEL Manufacturing Processes (IIT Roorkee), LaTeX Software (IIT Bombay), Introduction to Thermodynamics (University of Michigan Coursera), FDP Robotics & Automation (SAGE University/IIITDM Jabalpur), Energy Audit Workshop (RGPV/TEQIP-III).",
  keywords: [
    "Dr. Atul Dhakar certifications",
    "Atul Dhakar FDP",
    "Atul Dhakar courses",
    "Atul Dhakar NPTEL",
    "NPTEL IIT Roorkee Manufacturing Processes",
    "NPTEL FDP Manufacturing Processes IIT Roorkee",
    "LaTeX software certification IIT Bombay",
    "IIT Bombay LaTeX course",
    "Electric Vehicle Technology Alison diploma",
    "Alison EV technology 95 percent",
    "Solar Energy Technology Management MITS Gwalior",
    "Solar Energy Technology Management 6 months",
    "Research Perspective IC Engines AICTE QIP",
    "Govt College Engineering Amravati AICTE",
    "Introduction Thermodynamics University Michigan Coursera",
    "Coursera Thermodynamics Dr. Atul Dhakar",
    "ICMME 2025 Jaypee University Guna paper presented",
    "FDP Robotics Automation SAGE University IIITDM",
    "FDP SGSITS Indore TEQIP-III Recent Advances Mechanical",
    "FDP Innovation Entrepreneurship Industry 4.0 TERNA",
    "Energy Audit workshop RGPV TEQIP",
    "Master CAM training IGTR Indore MSME",
    "Fluid Dynamics Research NIT Rourkela e-conference",
    "Material Behavior FDP GLA University IIM Mathura",
    "ORCID ID webinar Elsevier Researcher Academy",
    "Intellectual Property Awareness SAGE University Indore",
    "professional development mechanical engineering professor",
    "FDP mechanical engineering MP",
  ],
  openGraph: {
    title: "Certifications & FDPs | Dr. Atul Dhakar | NPTEL IIT Alison Coursera",
    description: "Professional certifications from NPTEL (IIT Roorkee), IIT Bombay, Alison, University of Michigan (Coursera), MITS Gwalior, SAGE University, RGPV completed by Dr. Atul Dhakar.",
    url: "https://dratuldhakar.vercel.app/certifications",
    images: [{ url: "/atul-sir.jpg", width: 1200, height: 630, alt: "Dr. Atul Dhakar Certifications" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/certifications" },
};

export default function CertificationsPage() {
  return (
    <PageShell>
      <BackLink />
      <Certifications isPreview={false} />
    </PageShell>
  );
}
