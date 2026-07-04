import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Dr. Atul Dhakar | Assistant Professor & Researcher",
  description: "Academic profile of Dr. Atul Dhakar — 13+ years teaching, Ph.D. in Mechanical Engineering, Research Cell Head at UIT-RGPV Shivpuri.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <BackLink />
      <About />
    </PageShell>
  );
}
