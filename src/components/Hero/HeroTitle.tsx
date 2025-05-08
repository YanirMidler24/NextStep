import { Metadata } from "next";
import { motion } from "framer-motion";

// Create a metadata generator function instead of a static export
export function generateMetadata({ description, technologies }: { description: string[]; technologies: { name: string }[] }): Metadata {
  return {
    title: "Next Step – המסלול שלך לקריירה מקצועית בהייטק",
    description: `${description.join(" ")} ליווי אישי, ניסיון מעשי, והכנה לקריירה מותאמת אישית בתעשיית ההייטק.`,
    keywords: `קריירה בהייטק, מנטורינג, תכנות, לימוד תכנות, ראיונות עבודה, פיתוח אישי, מפתח תוכנה, ${technologies.map((tech) => tech.name).join(", ")}`,
    openGraph: {
      type: "website",
      title: "Next Step – פיתוח קריירה בהייטק בליווי אישי",
      description: `מסלול מותאם אישית לקריירה בהייטק עם דגש על הכנה מעשית, ניסיון אמיתי וליווי צמוד – ${description.join(" ")}`,
      locale: "he_IL",
      url: "https://takethenextstep.netlify.app/",
    },
  };
}

interface HeroTitleProps {
  title: string;
  subTitle: string;
  description: string[];
}

export function HeroTitle({ title, subTitle, description }: HeroTitleProps) {
  // Added the missing keywords to the highlighted words
  const highlightWords = [
    "תכנות",
    "ראיונות עבודה",
    "הדרך שלך",
    "שיעור",
    "אישית",
    "ההייטק",
    "ניסיון",
  ];

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent leading-relaxed md:leading-relaxed"
        itemProp="name"
      >
        {title}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent leading-relaxed md:leading-relaxed"
      >
        {subTitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        itemProp="description"
      >
        {description && description.map((line, i) => {
          let highlightedLine = line;

          highlightWords.forEach((word) => {
            const regex = new RegExp(`(${word})`, "g");
            highlightedLine = highlightedLine.replace(
              regex,
              `<span class="text-purple-400 font-bold">$1</span>`
            );
          });

          return (
            <span
              key={i}
              dangerouslySetInnerHTML={{ __html: highlightedLine }}
            />
          );
        })}
      </motion.p>
    </>
  );
}