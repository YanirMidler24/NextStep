"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PackageCardClientWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string; // Add className prop
}

export function PackageCardClientWrapper({
  children,
  delay = 0,
  className = "", // Default to empty string
}: PackageCardClientWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className} // Apply the className here
    >
      {children}
    </motion.div>
  );
}
