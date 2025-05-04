"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 p-10 rounded-2xl shadow-xl border border-purple-500/30 max-w-md w-full"
      >
        <div className="flex justify-center mb-4 text-purple-400">
          <AlertTriangle size={48} strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl font-extrabold text-red-400 mb-4">
          אופס! העמוד לא נמצא
        </h1>
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          ייתכן שהקישור שגוי או שהעמוד הוסר. אל דאגה – אפשר לחזור לדף הבית בלחיצה.
        </p>
        <Link
          href="/"
          className="inline-block bg-purple-600 hover:bg-purple-500 text-white py-3 px-8 rounded-full text-lg transition font-semibold"
        >
          חזרה לדף הבית
        </Link>
      </motion.div>
    </div>
  );
}
