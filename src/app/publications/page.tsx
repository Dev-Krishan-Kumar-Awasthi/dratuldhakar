import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Publications from "@/components/Publications";

export const metadata: Metadata = {
  title: "Research Publications | Dr. Atul Dhakar",
  description: "SCI and Scopus-indexed research publications by Dr. Atul Dhakar on fault diagnosis and machine learning.",
};

export default function PublicationsPage() {
  return (
    <PageShell>
      <BackLink />
      <Publications isPreview={false} />
    </PageShell>
  );
}
