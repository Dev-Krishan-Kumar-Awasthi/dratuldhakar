"use client";

import { motion } from "framer-motion";

export default function SkeletonLoader() {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 px-6 py-24 flex flex-col justify-start items-center relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-purple rounded-full blur-[100px] pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-emerald rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="max-w-5xl w-full flex flex-col space-y-12 relative z-10">
        {/* Pulsing Header */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="w-24 h-4 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
          <div className="w-72 sm:w-96 h-8 bg-slate-300 dark:bg-slate-700 rounded-xl animate-pulse" />
          <div className="w-12 h-1 bg-indigo-500 rounded-full" />
        </div>

        {/* Pulsing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between space-y-6 h-64"
            >
              <div className="space-y-4">
                {/* Icon & Title skeleton */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
                  <div className="w-32 h-5 bg-slate-300 dark:bg-slate-700 rounded-lg animate-pulse" />
                </div>
                {/* Description lines skeleton */}
                <div className="space-y-2 pt-2">
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
                  <div className="w-5/6 h-3 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
                  <div className="w-4/6 h-3 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
                </div>
              </div>
              {/* Footer skeleton */}
              <div className="w-full h-8 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
