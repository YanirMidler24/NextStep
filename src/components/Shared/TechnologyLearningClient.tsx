"use client";

import { motion } from "framer-motion";

interface LearningResource {
  title: string;
  url: string;
  type?: string;
}

export function TechnologyLearningClient({
  learningResources,
}: {
  learningResources: LearningResource[];
}) {
  if (!learningResources?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-gray-900 p-6 rounded-2xl shadow-md border border-purple-500/20"
    >
      <h2 className="text-2xl font-semibold text-purple-400 mb-4">
        📚 איפה מתחילים?
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 text-right">
        {learningResources.map((res) => (
          <li key={res.url}>
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
