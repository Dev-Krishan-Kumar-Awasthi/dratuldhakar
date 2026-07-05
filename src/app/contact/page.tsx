import { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Dr. Atul Dhakar | Phone Email | UIT-RGPV Shivpuri | The College Coach",
  description: "Contact Dr. Atul Dhakar — Assistant Professor at UIT-RGPV Shivpuri, Madhya Pradesh. Email: dratuldhakar@gmail.com | Phone: +919179176554. For research collaboration, MP DTE counselling queries, academic inquiries, The College Coach 24x7 YouTube channel. Located at Shivpuri, Madhya Pradesh, India.",
  keywords: [
    "Dr. Atul Dhakar contact",
    "Dr. Atul Dhakar email",
    "Dr. Atul Dhakar phone number",
    "Dr. Atul Dhakar phone",
    "Atul Dhakar contact",
    "Atul Dhakar email",
    "Atul Dhakar phone",
    "Atul Sir contact",
    "Atul Sir phone number",
    "Atul Sir email",
    "The College Coach contact",
    "The College Coach phone number",
    "dratuldhakar@gmail.com",
    "+919179176554",
    "Dr. Atul Dhakar WhatsApp",
    "UIT RGPV Shivpuri professor contact",
    "UIT Shivpuri Mechanical Engineering contact",
    "contact mechanical professor Shivpuri",
    "contact mechanical professor Indore",
    "contact MP DTE counselling expert",
    "contact The College Coach 24x7",
    "research collaboration Mechanical Engineering",
    "academic inquiry RGPV professor",
    "Dr. Atul Dhakar address",
    "Dr. Atul Dhakar office",
    "UIT RGPV Shivpuri address",
    "Shivpuri Madhya Pradesh professor",
  ],
  openGraph: {
    title: "Contact Dr. Atul Dhakar | UIT-RGPV Shivpuri | The College Coach",
    description: "Get in touch with Dr. Atul Dhakar — email: dratuldhakar@gmail.com, phone: +919179176554. For MP DTE counselling, research collaboration, or The College Coach 24x7 inquiries.",
    url: "https://dratuldhakar.vercel.app/contact",
    images: [{ url: "/atul-sir.jpg", width: 1200, height: 630, alt: "Contact Dr. Atul Dhakar" }],
  },
  alternates: { canonical: "https://dratuldhakar.vercel.app/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <BackLink />
      <Contact />
    </PageShell>
  );
}
