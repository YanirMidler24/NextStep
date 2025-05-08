import React from "react";
import { KeyPoint } from "./KeyPoint";
import { MotionDiv } from "../Shared/motion/MotionDiv";
import { Metadata } from "next";
import { AboutDescriptionProps, extractArray } from "@/common";

export async function generateMetadata({ aboutData }: { aboutData: AboutDescriptionProps['aboutData'] }): Promise<Metadata> {
  const { seo, specialties } = aboutData;
  const skillsKeywords = specialties?.specialties?.categories
    ? `, ${specialties.specialties.categories.flatMap(c => c.skills).join(", ")}`
    : "";

  return {
    title: seo.title,
    description: seo.description,
    keywords: `${seo.keywords}${skillsKeywords}`,
    openGraph: {
      ...seo.openGraph,
      type: "website"
    },
    other: seo.other,
  };
}

export function AboutDescription({ aboutData }: AboutDescriptionProps) {
  const description = extractArray(aboutData.description);
  const keypoints = extractArray(aboutData.keypoints);
  const highlightPhrases = extractArray(aboutData.highlightphrases);
  const { specialline: specialLine } = aboutData;

  const highlightText = (text: string) => {
    if (text === specialLine) {
      return <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">{text}</span>;
    }

    const validPhrases = highlightPhrases.filter(phrase => phrase.trim());
    if (!validPhrases.length) return text;

    try {
      const pattern = new RegExp(`(${validPhrases.join("|")})`, 'g');
      return text.split(pattern).map((part, i) =>
        validPhrases.includes(part.trim())
          ? <React.Fragment key={i}>
            {part.trim() === "Next Step" ? '' : <br />}
            <span className="underline underline-offset-4 decoration-purple-400 decoration-2">{part + " "}</span>
          </React.Fragment>
          : part + " "
      );
    } catch {
      return text;
    }
  };

  return (
    <div className="flex flex-col gap-12 text-center">
      <MotionDiv delay={0}>
        <div className="space-y-4">
          {description.length > 0
            ? description.map((paragraph, index) => (
              <h3 key={index} className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {highlightText(paragraph)}
              </h3>
            ))
            : <h3 className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">No description available</h3>
          }
        </div>
      </MotionDiv>

      <MotionDiv delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keypoints.length > 0
            ? keypoints.map((point, index) => <KeyPoint key={index} text={point} />)
            : <div className="col-span-3 text-center">No key points available</div>
          }
        </div>
      </MotionDiv>
    </div>
  );
}