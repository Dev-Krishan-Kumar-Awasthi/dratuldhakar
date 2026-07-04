"use client";

import { GraduationCap, Users, BookOpen, Award, FlaskConical, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const contributions = [
  {
    id: 1,
    title: "Research & Innovation Cell",
    desc: "I lead the Research & Innovation Cell at UIT-RGPV Shivpuri, promoting research activities, patent filing, and paper publications among faculty and students.",
    icon: FlaskConical,
    tag: "Research Leadership",
  },
  {
    id: 2,
    title: "Teaching & Course Delivery",
    desc: "I deliver lectures, design course materials, and create an interactive learning environment for undergraduate students across core mechanical engineering subjects.",
    icon: GraduationCap,
    tag: "Teaching",
  },
  {
    id: 3,
    title: "Student Mentorship",
    desc: "I mentor students for academic success, research projects, and career development. I served as Faculty Advisor for the Eco-Kart Race team at SVCE in 2018 and 2019.",
    icon: Users,
    tag: "Mentorship",
  },
  {
    id: 4,
    title: "Workshops & Expert Talks",
    desc: "I organize workshops on AutoCAD, patent filing, energy audit, and engine assembly. I also arrange expert lectures and industrial visits for students and faculty.",
    icon: BookOpen,
    tag: "Academic Events",
  },
  {
    id: 5,
    title: "Paper Review & Publications",
    desc: "I review papers for SCI and Scopus indexed journals including The Journal of Supercomputing, Measurement Science and Technology, and Engineering Research Express.",
    icon: Award,
    tag: "Peer Review",
  },
  {
    id: 6,
    title: "Industrial Visits",
    desc: "I have organized industrial visits to Auto Cluster Pithampur, NATRAX, Indo German Tool Room, Mahindra Two Wheelers, and Jash Engineering for B.Tech students.",
    icon: Building2,
    tag: "Industry Connect",
  },
];

export default function Testimonials() {
  return (
    <section id="contributions" className="section-padding">
      <div className="section-container">
        <SectionHeader
          eyebrow="Academic Roles"
          title="Teaching, Research & Leadership"
          description="Key responsibilities across 13+ years of academic career."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contributions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="surface-card p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/15">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
