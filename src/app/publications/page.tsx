import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Publications from "@/components/Publications";

export const metadata: Metadata = {
  title: "Research Publications | Dr. Atul Dhakar | SCI Scopus Journals | Fault Diagnosis Mechanical Engineering",
  description: "11 peer-reviewed research papers by Dr. Atul Dhakar — 3 SCI Journals (Taylor & Francis, Springer, Elsevier), 4 Scopus/E-SCI papers (Sage, IOP Science), 1 Springer Book Chapter, 3 UGC-Approved journals. Research areas: Fault Diagnosis of Reciprocating Air Compressor using LMD, EMD, SVM, J48, KNN, LDA, QDA signal processing & machine learning; Solar Water Distillation with PCM.",
  keywords: [
    "Dr. Atul Dhakar publications",
    "Atul Dhakar research papers",
    "Atul Dhakar SCI paper",
    "Atul Dhakar Scopus paper",
    "Atul Dhakar researcher",
    "Atul Dhakar Google Scholar",
    "Atul Dhakar ORCID",
    "ORCID 0000-0003-3457-4662",
    "Scopus Author ID 58866418000",
    "Atul Dhakar Shodhganga",
    "Shodhganga thesis Atul Dhakar",
    "fault diagnosis reciprocating air compressor",
    "fault identification air compressor machine learning",
    "fault detection air compressor signal processing",
    "Local Mean Decomposition LMD fault diagnosis",
    "LMD Support Vector Machine bearing fault",
    "Decision Tree J48 air compressor fault",
    "K-Nearest Neighbor KNN compressor fault diagnosis",
    "LDA QDA fault diagnosis air compressor",
    "Logistic Regression fault diagnosis air compressor",
    "kurtosis index bubble cloud analysis air compressor",
    "Empirical Mode Decomposition EMD fault diagnosis",
    "rolling bearing fault diagnosis LMD SVM",
    "signal processing mechanical fault diagnosis",
    "machine learning mechanical fault diagnosis",
    "Atul Dhakar Taylor Francis paper 2025",
    "Journal Chinese Institute Engineers Atul Dhakar",
    "Journal Vibration Engineering Technologies Dhakar",
    "Journal Engineering Research Dhakar Elsevier",
    "Noise Vibration Worldwide Dhakar Sage",
    "Engineering Research Express Dhakar IOP",
    "Recent Advances Mechanical Engineering Springer Dhakar",
    "Atul Dhakar Springer paper",
    "Atul Dhakar Elsevier paper",
    "Atul Dhakar Sage journal",
    "Atul Dhakar IOP Science",
    "solar water distillation paraffin wax",
    "phase change material PCM solar distillation",
    "single slope solar water distillation PCM",
    "solar power plants farmers case study",
    "FRBC coir fiber mechanical characterization",
    "ICMME 2025 Jaypee University Guna",
    "SCI journal Mechanical Engineering India",
    "Scopus journal Mechanical Engineering India",
    "fault diagnosis mechanical engineering research",
    "signal processing research India",
    "machine learning research mechanical engineering",
  ],
  openGraph: {
    title: "Research Publications | Dr. Atul Dhakar | 11 SCI/Scopus Papers",
    description: "11 peer-reviewed papers in Taylor & Francis, Springer, Elsevier, Sage, IOP. Research on fault diagnosis of reciprocating air compressors using signal processing and machine learning.",
    url: "https://dratuldhakar.vercel.app/publications",
    images: [{ url: "https://dratuldhakar.vercel.app/atul-sir.jpg", width: 1200, height: 630, alt: "Dr. Atul Dhakar Research Publications" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/publications" },
};

export default function PublicationsPage() {
  return (
    <PageShell>
      <BackLink />
      <Publications isPreview={false} />
    </PageShell>
  );
}
