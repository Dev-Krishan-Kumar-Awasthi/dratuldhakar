import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Experience & Education | Dr. Atul Dhakar",
  description: "Professional experience and academic qualifications of Dr. Atul Dhakar — UIT-RGPV Shivpuri, IIIT Ranchi, JUET Guna Ph.D.",
};

export default function JourneyPage() {
  return (
    <PageShell>
      <BackLink />
      <Timeline isPreview={false} />
    </PageShell>
  );
}
