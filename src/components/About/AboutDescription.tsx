import { ABOUT_CONTENT } from "@/constans";
import { KeyPoint } from "./KeyPoint";
import { MotionDiv } from "../Shared/motion/MotionDiv";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `ניסיון מעשי בהייטק | שיעור אישית | ${ABOUT_CONTENT.title}`,
  description: `שיעור אישית להתפתחות בהייטק עם ניסיון מעשי ומקצועי. הדרך המותאמת עבורך לפיתוח קריירה מוצלחת. ${ABOUT_CONTENT.description[0]}`,
  keywords: `יניר מידלר, שיעור אישית, הדרך להייטק, ניסיון מעשי, מפתח Full Stack, הצעד הבא, קריירה בהייטק, ${ABOUT_CONTENT.specialties.categories.flatMap((cat) => cat.skills).join(", ")}`,

  openGraph: {
    type: "profile",
    title: `ניסיון מקצועי בהייטק | שיעור אישית | ${ABOUT_CONTENT.title}`,
    description: `${ABOUT_CONTENT.description[0]} הדרך המותאמת אישית בקריירת ההייטק.`,
    locale: "he_IL",
    url: "https://takethenextstep.netlify.app/about", // Your domain with path
  },

  twitter: {
    card: "summary",
    title: `ניסיון וידע בהייטק | שיעור אישית | ${ABOUT_CONTENT.title}`,
    description: `${ABOUT_CONTENT.description[0]} הדרך להצלחה בהייטק.`,
    site: "@your_twitter_handle", // Your Twitter handle if available
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
