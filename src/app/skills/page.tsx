import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills & Expertise | MATLAB WEKA Mechanical Engineering | Dr. Atul Dhakar",
  description: "Technical skills of Dr. Atul Dhakar — Mechanical Engineering (Engineering Graphics, TOM, SOM, Thermodynamics, Fluid Mechanics), Signal Processing (LMD, EMD, FFT), Machine Learning (SVM, J48, KNN, LDA), Software (MATLAB, WEKA, AutoCAD, LaTeX), Research skills (SCI/Scopus paper writing, patent filing), and educational leadership (Research Cell, DTE Counselling, Training & Placement).",
  keywords: [
    "Dr. Atul Dhakar skills",
    "Atul Dhakar technical skills",
    "Atul Dhakar MATLAB",
    "Atul Dhakar WEKA",
    "Atul Dhakar AutoCAD",
    "Mechanical Engineering skills",
    "Engineering Graphics RGPV",
    "Theory of Machines TOM",
    "Strength of Materials SOM",
    "Thermodynamics RGPV",
    "Fluid Mechanics RGPV",
    "Heat Mass Transfer HMT",
    "Mechanical Vibration RGPV",
    "Basic Mechanical Engineering BME",
    "MATLAB signal processing research",
    "WEKA software fault diagnosis",
    "MATLAB mechanical engineering India",
    "AutoCAD training RGPV",
    "LaTeX software certification IIT Bombay",
    "signal processing skills",
    "machine learning mechanical engineering",
    "SVM support vector machine classifier",
    "decision tree J48 algorithm",
    "K-nearest neighbor KNN classifier",
    "LDA QDA discriminant analysis",
    "SCI paper writing skills India",
    "Scopus paper writing skills",
    "patent filing skills India",
    "research skills mechanical engineering professor",
    "Electric Vehicle Technology skills",
    "Solar Energy skills",
    "IC Engine expertise",
    "NPTEL IIT Roorkee certification",
  ],
  openGraph: {
    title: "Skills & Expertise | Dr. Atul Dhakar | MATLAB WEKA Mechanical Engineering",
    description: "Technical skills in Mechanical Engineering, Signal Processing, Machine Learning (MATLAB, WEKA, AutoCAD, LaTeX), and academic leadership by Dr. Atul Dhakar.",
    url: "https://dratuldhakar.vercel.app/skills",
    images: [{ url: "https://dratuldhakar.vercel.app/atul-sir.jpg", width: 1200, height: 630, alt: "Dr. Atul Dhakar Skills" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/skills" },
};

export default function SkillsPage() {
  return (
    <PageShell>
      <BackLink />
      <Skills />
    </PageShell>
  );
}
