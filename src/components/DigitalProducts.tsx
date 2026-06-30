"use client";

import { useState } from "react";
import { Target, RefreshCw, Sparkles, ExternalLink, Cpu } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  category: string;
  desc: string;
  features: string[];
  link: string;
  icon: any;
  highlight?: boolean;
}

const productsData: Product[] = [
  {
    id: 1,
    title: "MP DTE College Predictor",
    category: "AI Admission Tool",
    desc: "Predict your engineering college and branch based on JEE Main CRL cutoffs.",
    features: ["Real DTE Cutoff Data", "Category & Quota Filters"],
    link: "https://thecollegecoach.vercel.app/predictor",
    icon: Target,
    highlight: true,
  },
  {
    id: 2,
    title: "Lateral B.Tech Predictor",
    category: "Diploma Entry Engine",
    desc: "Dedicated prediction platform for polytechnic diploma holders seeking B.Tech lateral entry.",
    features: ["Diploma Rank Mapping", "Spot Round Insights"],
    link: "https://lateralentrycollegepredictor.vercel.app",
    icon: Cpu,
    highlight: true,
  },
  {
    id: 3,
    title: "Internal Sliding Tool",
    category: "Upgrade Simulator",
    desc: "Simulate branch upgrade odds and vacant seat mapping before the final CLC round.",
    features: ["Branch Upgrade Odds", "Vacant Seat Mapping"],
    link: "https://thecollegecoach.vercel.app/predictor/sliding",
    icon: RefreshCw,
  },
];

export default function DigitalProducts() {
  return (
    <section id="tools" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/10">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-purple rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-primary-500 mb-3">Innovation</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            AI-Powered Educational Tools & Digital Products
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 max-w-md mx-auto leading-relaxed">
            Proprietary admission algorithms and prediction tools engineered to simplify college seat selection.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = product.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const rotateX = -(mouseY / (height / 2)) * 8;
    const rotateY = (mouseX / (width / 2)) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease, border-color 0.3s ease, shadow 0.3s ease",
      }}
      className={`glass-card rounded-3xl p-8 border flex flex-col justify-between h-full relative cursor-pointer group hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/5 ${
        product.highlight
          ? "border-primary-500/30 dark:border-indigo-500/30 shadow-lg shadow-primary-500/5"
          : "border-slate-200/50 dark:border-slate-800/50"
      } ${tilt.x !== 0 || tilt.y !== 0 ? "z-20" : "z-10"}`}
    >
      {product.highlight && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-30">
          Featured Tool
        </div>
      )}

      <div>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {product.category}
            </span>
            <h3 className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {product.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {product.desc}
        </p>

        <ul className="space-y-2 mb-6">
          {product.features.map((feat, fIdx) => (
            <li key={fIdx} className="flex items-center text-xs text-slate-500 dark:text-slate-400">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-indigo-500 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-slate-100 dark:border-slate-800/40 pt-4 mt-2">
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full text-xs font-bold text-primary-600 dark:text-indigo-400 hover:text-primary-700 dark:hover:text-indigo-300 transition-colors"
        >
          <span>Launch Product Tool</span>
          <ExternalLink className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  );
}
