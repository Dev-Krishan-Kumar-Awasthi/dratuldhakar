import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Patents from "@/components/Patents";

export const metadata: Metadata = {
  title: "Design Patents | Dr. Atul Dhakar",
  description: "Robot design patents published and filed by Dr. Atul Dhakar.",
};

export default function PatentsPage() {
  return (
    <PageShell>
      <BackLink />
      <Patents isPreview={false} />
    </PageShell>
  );
}
