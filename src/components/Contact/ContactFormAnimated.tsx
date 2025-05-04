"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import ContactFormContent from "./ContactFormContent";

function ContactFormAnimated() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <Suspense fallback={<p>טוען טופס יצירת קשר...</p>}>
        <ContactFormContent />
      </Suspense>
    </motion.div>
  );
}

export default ContactFormAnimated;