import { ABOUT_CONTENT } from "@/constans";
import { KeyPoint } from "./KeyPoint";
import { MotionDiv } from "../Shared/motion/MotionDiv";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "יניר מידלר | הצעד הבא – מנטורינג לקריירה בהייטק עם ניסיון מעשי",
  description:
    "הצעד הבא שלך לעולם ההייטק מתחיל עם יניר מידלר – מפתח Full Stack ומנטור מנוסה. ליווי אישי, ידע מקצועי מהתעשייה, ותרגול מעשי שיכינו אותך לקריירה אמיתית בהייטק.",
  keywords: `הצעד הבא, יניר מידלר, מנטור הייטק, ליווי קריירה, Full Stack, מנטורינג טכנולוגי, תכנות, קריירה בהייטק, מציאת עבודה בהייטק, ${ABOUT_CONTENT.specialties.categories.flatMap((cat) => cat.skills).join(", ")}`,

  openGraph: {
    type: "profile",
    title: "יניר מידלר – מנטור לצמיחה מקצועית | הצעד הבא לקריירה בהייטק",
    description:
      "הצעד הבא שלך עם יניר מידלר – ליווי מקצועי ותרגול אמיתי מהתעשייה. מסלול מותאם אישית שיביא אותך לעבודה בהייטק.",
    locale: "he_IL",
    url: "https://takethenextstep.netlify.app/about",
  },

  other: {
    "profile:first_name": "יניר",
    "profile:last_name": "מידלר",
    "profile:username": "yanirvs",
  },
};



export function AboutDescription() {
  const highlightWords = ["React.js", "Next.js", "Node.js", "NestJS", "TypeScript"];

  const highlightTechnologies = (text: string) => {
    return text.split(" ").map((word, index) => {
      const cleanWord = word.replace(/[^a-zA-Z0-9.]/g, ""); // ניקוי תווים כמו פסיקים
      if (highlightWords.includes(cleanWord)) {
        return (
          <span
            key={index}
            className="text-purple-400 font-semibold transition-colors duration-200 hover:text-purple-300"
          >
            {word}{" "}
          </span>

        );
      }
      return word + " ";
    });
  };

  return (
    <div className="flex flex-col gap-12 text-center">
      <MotionDiv delay={0}>
        <div className="space-y-4">
          {ABOUT_CONTENT.description.map((paragraph, index) => (
            <h3
              key={index}
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              {highlightTechnologies(paragraph)}
            </h3>
          ))}
        </div>
      </MotionDiv>

      <MotionDiv delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_CONTENT.keyPoints.map((point, index) => (
            <KeyPoint key={index} text={point} />
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}

