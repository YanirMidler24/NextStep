"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface KeyPointProps {
  text: string;
}

export function KeyPoint({ text }: KeyPointProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-xl shadow-md border border-purple-500/20 transition-transform"
    >
      <CheckCircle size={40} className="text-purple-400 mb-4" />
      <p className="text-gray-200 font-medium text-lg">{text}</p>
    </motion.div>
  );
}
