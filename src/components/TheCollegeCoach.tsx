"use client";

import { CheckCircle2, Award, Users, ShieldCheck, ArrowUpRight, HeartHandshake, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const impactStats = [
  { label: "Students Guided", value: "10,000+", desc: "Personalized choice filling assistance" },
  { label: "Seats Secured", value: "8,500+", desc: "Admissions in top Govt. & Autonomous colleges" },
  { label: "Counselling Success", value: "98.5%", desc: "Optimal seat allocation for JEE ranks" },
  { label: "Colleges Analyzed", value: "250+", desc: "Cutoffs mapped across MP engineering hubs" },
];

const corePillars = [
  {
    title: "Choice Filling Strategy",
    desc: "Custom priority ordering designed specifically for your rank and category, preventing seat loss mistakes.",
    icon: Zap,
  },
  {
    title: "Quota & Document Audits",
    desc: "Verification of Tuition Fee Waiver (TFW), MP Domicile, EWS, and category reservation rules.",
    icon: ShieldCheck,
  },
  {
    title: "Internal Sliding & CLC Spot Round",
    desc: "Expert guidance during college-level rounds and internal branch sliding upgrades to land higher preferences.",
    icon: HeartHandshake,
  },
];

export default function TheCollegeCoach() {
  return (
    <section id="platform" className="py-28 relative overflow-hidden antigravity-grid">
      {/* Background Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] glow-spotlight rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>Official EdTech Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Founder of <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">The College Coach (24×7)</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-normal">
            India&apos;s trusted MP DTE B.Tech counselling guidance platform, empowering students with data-backed college seat predictors, rank analysis, and transparent admission advice.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Platform Banner Card */}
        <div className="glass-card p-8 sm:p-14 rounded-[2.5rem] border border-orange-500/20 shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 mb-2">
                <img src="/atul-sir.png" alt="Dr. Atul Sir" className="w-14 h-14 rounded-full object-cover border-2 border-orange-500/40 shadow-md shrink-0" />
                <div>
                  <span className="block text-xs font-black uppercase tracking-widest text-orange-500">Mentorship Philosophy</span>
                  <span className="block text-sm font-bold text-slate-800 dark:text-slate-100">Dr. Atul Sir — Founder & Lead Mentor</span>
                </div>
              </div>
              
              <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100 leading-relaxed italic border-l-4 border-orange-500 pl-4">
                &ldquo;If choice locking is wrong, you will get the wrong college. Getting the best college for your JEE rank is our only goal.&rdquo;
              </blockquote>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                As the Lead Mentor of <strong>The College Coach (24×7)</strong>, Dr. Atul Dhakar eliminates the stress and confusion of state-level technical admissions. By combining real historical cutoff data with personalized preference mapping, students secure seats in premier institutes like <strong>SGSITS Indore, IET DAVV, JEC Jabalpur, MITS Gwalior, and LNCT Bhopal</strong>.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://thecollegecoach.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2.5"
                >
                  <span>Visit Platform Portal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919179176554?text=Hello%20Dr.%20Atul%20Sir%2C%20I%20need%20guidance%20regarding%20MP%20DTE%20Engineering%20Admission."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2.5"
                >
                  <span>WhatsApp 24×7 Desk</span>
                </a>
              </div>
            </div>

            {/* Platform Feature Badges */}
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
                    <div className="w-11 h-11 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Student Impact Metrics Grid */}
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
              <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
