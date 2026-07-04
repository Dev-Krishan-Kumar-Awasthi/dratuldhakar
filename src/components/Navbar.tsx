"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/journey" },
  { label: "Research", path: "/publications" },
  { label: "Patents", path: "/patents" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const activePath = pathname || "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${isScrolled ? "site-header-scrolled" : ""}`}>
      <div className="section-container site-header-inner">
        <Link href="/" className="site-brand">
          <img src="/atul-sir.jpg" alt="" className="site-brand-avatar" />
          <div>
            <span className="site-brand-name">Dr. Atul Dhakar</span>
            <span className="site-brand-role">Assistant Professor · Ph.D.</span>
          </div>
        </Link>

        <nav className="site-nav hidden lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link ${activePath === item.path ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden sm:inline-flex !py-2.5 !px-4 !text-xs">
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav lg:hidden"
          >
            <div className="section-container py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`mobile-nav-link ${activePath === item.path ? "mobile-nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
