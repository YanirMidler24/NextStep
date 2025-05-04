import { ABOUT_CONTENT } from "@/constans";
import { KeyPoint } from "./KeyPoint";
import { MotionDiv } from "../Shared/motion/MotionDiv";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "יניר מידלר | מנטורינג לקריירה בהייטק עם ניסיון מעשי",
  description:
    "הכירו את יניר מידלר – מפתח Full Stack מנוסה ומנטור לקריירה בהייטק. ליווי מקצועי, ידע מהשטח, ותרגול מעשי שיעזרו לכם להתקבל לתעשייה ולבנות מסלול מותאם אישית.",
  keywords: `יניר מידלר, מנטור הייטק, ליווי קריירה, Full Stack, מנטורינג טכנולוגי, תכנות, קריירה בהייטק, מציאת עבודה בהייטק, ${ABOUT_CONTENT.specialties.categories.flatMap((cat) => cat.skills).join(", ")}`,

  openGraph: {
    type: "profile",
    title: "יניר מידלר – מנטור לקריירה בהייטק עם ניסיון אמיתי",
    description:
      "מפתח תוכנה ומנטור עם ניסיון מעשי בתעשיית ההייטק. תרגול מקצועי, ליווי אישי ובניית מסלול קריירה מותאם עבורך.",
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
  return (
    <div className="flex flex-col gap-12 text-center">
      <MotionDiv delay={0}>
        <div className="space-y-4">
          {ABOUT_CONTENT.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              {paragraph}
            </p>
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
