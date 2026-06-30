import { Metadata } from "next";
import Events from "@/components/Events";

export const metadata: Metadata = {
  title: "Events, Seminars & Industrial Connect | Dr. Atul Dhakar",
  description: "Explore the workshops, seminars, and industrial visits coordinated by Dr. Atul Dhakar to build stronger industry-academia ties.",
  keywords: [
    "Dr. Atul Dhakar events",
    "workshop coordinator",
    "industrial visits atul dhakar",
    "engineering seminars madhya pradesh",
    "industry connect mechanical engineering",
  ],
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Events isPreview={false} />
    </main>
  );
}
