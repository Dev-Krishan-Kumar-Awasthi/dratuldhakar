import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "Certifications & FDPs | Dr. Atul Dhakar",
  description: "Professional certifications, FDPs, and courses completed by Dr. Atul Dhakar.",
};

export default function CertificationsPage() {
  return (
    <PageShell>
      <BackLink />
      <Certifications isPreview={false} />
    </PageShell>
  );
}
