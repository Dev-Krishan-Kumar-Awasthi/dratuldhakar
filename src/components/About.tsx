"use client";

import { useEffect, useState, useRef } from "react";
import { User, MapPin, Calendar, Languages, Award, BookOpen, Key, Users, GraduationCap, Compass, Cpu } from "lucide-react";
import { motion, useInView } from "framer-motion";

const highlights = [
  {
    title: "13+ Years Teaching",
    desc: "Assistant Professor at UIT-RGPV Shivpuri, heading the Institute Research Cell.",
    icon: GraduationCap,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "The College Coach",
    desc: "Guided 10,000+ students through MP DTE engineering choice filling & seat allotments.",
    icon: Compass,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Robotics & AI Research",
    desc: "Ph.D. in Mechanical Eng. & pursuing M.Tech in AI & Data Science from IIIT Ranchi.",
    icon: Cpu,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const stats = [
  { label: "Teaching Experience", value: 13, suffix: "+ Yrs", icon: Award },
  { label: "Research Papers", value: 11, suffix: "", icon: BookOpen },
  { label: "Robotics Patents", value: 6, suffix: "", icon: Key },
  { label: "YouTube Family", value: 18, suffix: "k+", icon: Users },
];

function StatCounter({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: any }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      const duration = 1.2;
      const totalSteps = 40;
      const stepTime = (duration * 1000) / totalSteps;
      const increment = end / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="glass-card p-6 rounded-2xl flex items-center space-x-4 text-left">
      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100 font-mono">
          {count}{suffix}
        </div>
        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-indigo-500 mb-2">Overview</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Dr. Atul Dhakar
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Visual Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-3xl text-left border border-slate-200/60 dark:border-slate-800/60"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4 font-bold`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
