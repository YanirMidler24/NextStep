import { ABOUT_CONTENT } from "@/constans";
import { KeyPoint } from "./KeyPoint";
import { MotionDiv } from "../Shared/motion/MotionDiv";
import { Metadata } from "next";
import React from "react";

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
  const highlightPhrases = ABOUT_CONTENT.highlightPhrases;
  const specialLine = ABOUT_CONTENT.specialLine;
  const highlightText = (text: string) => {
    if (text === specialLine) {
      return (
        <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
          {text}
        </span>
      );
    }

    const pattern = new RegExp(`(${highlightPhrases.join("|")})`);
    return text.split(pattern).map((part, i) =>
      highlightPhrases.includes(part.trim()) ? (
        <React.Fragment key={i}>
          {part.trim() === "Next Step" || part.trim() === 'אני לא מוכר קורסים יקרים במאות או אלפי שקלים' ? '' : <br />}
          <span className="underline underline-offset-4 decoration-purple-400 decoration-2">
            {part + " "}
          </span>
        </React.Fragment>
      ) : (
        part + " "
      )
    );
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
              {highlightText(paragraph)}
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




