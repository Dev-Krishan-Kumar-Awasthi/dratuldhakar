import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills & Expertise | Dr. Atul Dhakar",
  description: "Technical skills of Dr. Atul Dhakar — Mechanical Engineering, Signal Processing, AI/Machine Learning, and academic leadership.",
};

export default function SkillsPage() {
  return (
    <PageShell>
      <BackLink />
      <Skills />
    </PageShell>
  );
}
