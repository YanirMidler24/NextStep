"use client";

import { motion } from "framer-motion";
import { TechnologyInfo } from "@/interfaces/TechnologyInfo.interface";

export function TechnologyStats({ tech }: { tech: TechnologyInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-900 p-6 rounded-2xl shadow-md border border-purple-500/20"
    >
      <h2 className="text-2xl font-semibold text-purple-400 mb-4">
        📈 סטטיסטיקות
      </h2>
      <ul className="text-gray-300 space-y-2">
        <li>
          📦 npm הורדות שבועיות: {tech.npmWeeklyDownloads.toLocaleString()}
        </li>
        <li>⭐ כוכבים ב-GitHub: {tech.githubStars.toLocaleString()}</li>
      </ul>
    </motion.div>
  );
}
