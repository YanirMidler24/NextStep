"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { TechnologyInfo } from "@/interfaces/TechnologyInfo.interface";

export function TechnologyHeaderClient({ tech }: { tech: TechnologyInfo }) {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = () => {
    if (pathname !== "/") {
      router.push("/#contact");
    } else {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      <button
        onClick={scrollToContact}
        className="bg-purple-600 hover:bg-purple-500 text-white py-3 px-8 rounded-full text-lg transition focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        aria-label="רוצה להתחיל? גלול לטופס יצירת קשר"
      >
        רוצה להתחיל? לחץ כאן
      </button>
    </motion.div>
  );
}
