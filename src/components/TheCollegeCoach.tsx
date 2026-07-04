"use client";

import { ShieldCheck, ArrowUpRight, HeartHandshake, Zap, Sparkles, Video, Users } from "lucide-react";
import { motion } from "framer-motion";

const impactStats = [
  { label: "YouTube Subscribers", value: "18,000+", desc: "Students follow The College Coach channel" },
  { label: "Educational Videos", value: "750+", desc: "Videos on admission and engineering topics" },
  { label: "Counseling Experience", value: "5 Years", desc: "As Counseling Coordinator at SVCE & SKITM" },
  { label: "Teaching Experience", value: "13+ Years", desc: "Guiding students in colleges across MP" },
];

const corePillars = [
  {
    title: "Choice Filling Help",
    desc: "I help students fill their college choices in the right order based on their JEE rank and category, so they do not lose a good seat.",
    icon: Zap,
  },
  {
    title: "Document & Quota Check",
    desc: "I guide students on TFW, MP Domicile, EWS, and category reservation rules so their documents are correct before admission.",
    icon: ShieldCheck,
  },
  {
    title: "Sliding & Spot Round Help",
    desc: "I help students during internal sliding and college-level spot rounds to upgrade their branch or college if seats are available.",
    icon: HeartHandshake,
  },
];

export default function TheCollegeCoach() {
  return (
    <section id="platform" className="py-28 relative overflow-hidden antigravity-grid">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] glow-spotlight rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>My YouTube Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Founder of <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">The College Coach (24×7)</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            I started this YouTube channel to help engineering students in Madhya Pradesh with MP DTE admission, choice filling, and college selection. I share free videos and tools so students can make the right decisions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="glass-card p-8 sm:p-14 rounded-[2.5rem] border border-orange-500/20 shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <img src="/atul-sir.jpg" alt="Dr. Atul Sir" className="w-14 h-14 rounded-full object-cover border-2 border-orange-500/40 shadow-md shrink-0" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-orange-500">My Message to Students</span>
                  <span className="block text-sm font-bold text-slate-800 dark:text-slate-100">Dr. Atul Dhakar — Founder & Lead Mentor</span>
                </div>
              </div>
              
              <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100 leading-relaxed italic border-l-4 border-orange-500 pl-4">
                &ldquo;If your choice filling is wrong, you will get the wrong college. My goal is to help you get the best college for your JEE rank.&rdquo;
              </blockquote>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Through <strong>The College Coach (24×7)</strong>, I use real cutoff data and years of counseling experience to guide students. I have helped students get seats in top colleges like <strong>SGSITS Indore, IET DAVV, JEC Jabalpur, MITS Gwalior, and LNCT Bhopal</strong>.
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                I was the Counseling Coordinator for 5 years at SVCE and SKITM, Indore. I handled student counseling, MP DTE registration, and reporting. This experience helps me guide students today.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://thecollegecoach.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2.5"
                >
                  <span>Visit The College Coach</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@TheCollegeCoach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/25 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2.5"
                >
                  <Video className="w-4 h-4" />
                  <span>Watch on YouTube</span>
                </a>
                <a
                  href="https://wa.me/919179176554?text=Hello%20Dr.%20Atul%20Sir%2C%20I%20need%20guidance%20regarding%20MP%20DTE%20Engineering%20Admission."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2.5"
                >
                  <span>WhatsApp Me</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex items-start space-x-4"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center"
            >
              <span className="block text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="block text-xs uppercase font-extrabold tracking-widest text-orange-500 mb-2">
                {stat.label}
              </span>
              <span className="block text-sm text-slate-500 dark:text-slate-400">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
