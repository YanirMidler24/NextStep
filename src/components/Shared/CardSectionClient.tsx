"use client";

import { motion } from "framer-motion";

interface CardSectionProps {
  title: string;
  items: string[];
}

export function CardSectionClient({ title, items }: CardSectionProps) {
  if (!items?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 p-6 rounded-2xl shadow-md border border-purple-500/20 text-right"
    >
      <h2 className="text-2xl font-semibold text-purple-400 mb-4">{title}</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
