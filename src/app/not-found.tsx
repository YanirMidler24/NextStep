"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-xl shadow-lg border border-purple-500/20"
      >
        <h1 className="text-3xl text-red-400 font-bold mb-6">
          העמוד לא נמצא
        </h1>
        <Link
          href="/"
          className="inline-block bg-purple-600 hover:bg-purple-500 text-white py-2 px-6 rounded-full text-lg transition"
        >
          חזרה לדף הבית
        </Link>
      </motion.div>
    </div>
  );
}
