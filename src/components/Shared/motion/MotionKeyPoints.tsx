"use client";

import { motion } from "framer-motion";
import { KeyPoint } from "../../About/KeyPoint";

export function MotionKeyPoints({ points }: { points: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {points.map((point, index) => (
        <KeyPoint key={index} text={point} />
      ))}
    </motion.div>
  );
}
