"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/journey" },
  { label: "Publications", href: "/publications" },
  { label: "Patents", href: "/patents" },
  { label: "Certifications", href: "/certifications" },
  { label: "Events", href: "/events" },
];

const profiles = [
  { label: "ORCID", href: "https://orcid.org/0000-0003-3457-4662" },
  { label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=58866418000" },
  { label: "Ph.D. Thesis", href: "http://hdl.handle.net/10603/659555" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">Dr. Atul Dhakar</p>
            <p className="footer-tagline">
              Assistant Professor, UIT-RGPV Shivpuri. Research Cell Head. Ph.D. Mechanical Engineering.
            </p>
            <div className="footer-contact">
              <a href="mailto:dratuldhakar@gmail.com" className="footer-contact-item">
                <Mail className="w-3.5 h-3.5" />
                dratuldhakar@gmail.com
              </a>
              <a href="tel:+919179176554" className="footer-contact-item">
                <Phone className="w-3.5 h-3.5" />
                +91 91791 76554
              </a>
            </div>
          </div>

          <div>
            <p className="footer-heading">Quick Links</p>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading">Academic Profiles</p>
            <ul className="footer-links">
              {profiles.map((p) => (
                <li key={p.href}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">{p.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dr. Atul Dhakar. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a href="https://kkawasthi.vercel.app" target="_blank" rel="noopener noreferrer">
              Krishan Kumar Awasthi
            </a>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
