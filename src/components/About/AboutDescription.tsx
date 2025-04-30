import { ABOUT_CONTENT } from "@/constans";
import { KeyPoint } from "./KeyPoint";
import { MotionDiv } from "../Shared/MotionDiv";

export function AboutDescription() {
  return (
    <div className="flex flex-col gap-12 text-center">
      <MotionDiv delay={0}>
        {ABOUT_CONTENT.description.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            {paragraph}
          </p>
        ))}
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
