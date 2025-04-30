"use client";

import { motion } from "framer-motion";

interface CommunityLink {
  url: string;
  platform: string;
}

export function TechnologyCommunityClient({
  communityLinks,
}: {
  communityLinks: CommunityLink[];
}) {
  if (!communityLinks?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-gray-900 p-6 rounded-2xl shadow-md border border-purple-500/20"
    >
      <h2 className="text-2xl font-semibold text-purple-400 mb-4">
        🌎 קהילות וקישורים
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 text-right">
        {communityLinks.map((community) => (
          <li key={community.url}>
            <a
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              {community.platform}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
