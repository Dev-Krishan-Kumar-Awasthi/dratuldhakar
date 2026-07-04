"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", systemDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse border border-slate-200 dark:border-slate-700" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--background)] transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/30"
      aria-label={`Toggle theme to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-[var(--color-primary-400)] group-hover:rotate-45 transition-transform duration-500" />
        ) : (
          <Moon className="w-5 h-5 text-[var(--color-primary-600)] group-hover:-rotate-12 transition-transform duration-500" />
        ) }
      </div>
    </button>
  );
}
