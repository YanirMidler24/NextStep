"use client";

import { motion } from "framer-motion";
import { TechnologyInfo } from "@/interfaces/TechnologyInfo.interface";

export function TechnologyHeaderClient({ tech }: { tech: TechnologyInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-purple-500/20 text-center"
    >
      <h1 className="text-5xl font-bold text-purple-400 mb-4">{tech.name}</h1>
      <p className="text-md text-gray-400 mb-4">{tech.category}</p>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">{tech.description}</p>

      {/* כפתור להתחלה */}
      <a
        href="https://forms.gle/rhugG6vjTeFBvT3s9"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-500 text-white py-3 px-8 rounded-full text-lg transition focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        aria-label="רוצה להתחיל? לחץ כאן"
      >
        רוצה להתחיל? לחץ כאן
      </a>
    </motion.div>
  );
}
