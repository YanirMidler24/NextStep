"use client";

import { motion } from "framer-motion";
import { InfoCard } from "./InfoCard";
import { CONTACT_CONTENT } from "@/constans";

function ContactFormAnimated() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <p className="text-gray-300 mb-8" itemProp="description">
        {CONTACT_CONTENT.description}
      </p>
      <a
        href={CONTACT_CONTENT.buttonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold mb-5 py-3 px-8 rounded-lg transition transform hover:scale-105"
        itemProp="url"
      >
        {CONTACT_CONTENT.buttonText}
      </a>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {CONTACT_CONTENT.infoCards.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            details={card.details}
            itemProp={card.itemProp}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ContactFormAnimated;
