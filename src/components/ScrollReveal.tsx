"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, rotateX: 2 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "top center" }}
    >
      {children}
    </motion.div>
  );
}
