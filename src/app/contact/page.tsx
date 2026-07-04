import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Dr. Atul Dhakar",
  description: "Contact Dr. Atul Dhakar for research collaboration, academic inquiries, and professional correspondence.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <BackLink />
      <Contact />
    </PageShell>
  );
}
