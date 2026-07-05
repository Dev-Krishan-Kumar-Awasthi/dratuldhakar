import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Patents from "@/components/Patents";

export const metadata: Metadata = {
  title: "Design Patents | Robotics Innovation | Dr. Atul Dhakar | UIT-RGPV Shivpuri",
  description: "6 published & filed Design Patents by Dr. Atul Dhakar — Serving Robot (469221-001), Sprayer Robot (469222-001), Carrier Lifting Robot (469218-001), Fire Fighting Robot (469220-001), plus 2 under process (484785-001, 469219-001). Innovations in robotics filed under Indian Patent Office 2025. Assistant Professor UIT-RGPV Shivpuri, Madhya Pradesh.",
  keywords: [
    "Dr. Atul Dhakar design patents",
    "Atul Dhakar robot patents",
    "Atul Dhakar patents",
    "Atul Dhakar robotics",
    "Atul Dhakar innovations",
    "Design Patent India Atul Dhakar",
    "Indian Design Patent 2025",
    "Serving Robot Design Patent India",
    "Sprayer Robot Design Patent India",
    "Carrier Lifting Robot Patent India",
    "Fire Fighting Robot Patent India",
    "469221-001 serving robot patent",
    "469222-001 sprayer robot patent",
    "469218-001 carrier lifting robot patent",
    "469220-001 fire fighting robot patent",
    "484785-001 patent under process",
    "469219-001 patent under process",
    "robot design patent India professor",
    "Robotics design patent India 2025",
    "Indian patent office design patent mechanical",
    "patent filing process professor India",
    "UIT RGPV Shivpuri patent",
    "RGPV professor patent",
    "Mechanical Engineering professor patents India",
    "robotics innovation India mechanical engineering",
    "Professor robotics patent MP",
    "India design patent robotics 2025",
  ],
  openGraph: {
    title: "Design Patents | Robotics Innovation | Dr. Atul Dhakar",
    description: "6 robot design patents (Serving, Sprayer, Carrier, Fire Fighting) filed under Indian Patent Office 2025 by Dr. Atul Dhakar, Assistant Professor UIT-RGPV Shivpuri.",
    url: "https://dratuldhakar.vercel.app/patents",
    images: [{ url: "https://dratuldhakar.vercel.app/atul-sir.jpg", width: 1200, height: 630, alt: "Dr. Atul Dhakar Design Patents" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/patents" },
};

export default function PatentsPage() {
  return (
    <PageShell>
      <BackLink />
      <Patents isPreview={false} />
    </PageShell>
  );
}
