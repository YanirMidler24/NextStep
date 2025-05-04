"use client";

import { motion } from "framer-motion";
import { InfoCard } from "./InfoCard";
import { CONTACT_CONTENT } from "@/constans";
import { ContactForm } from "../Shared/Contact/ContactForm";

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
      <ContactForm />
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
