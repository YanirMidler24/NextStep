import { TechnologyLearningClient } from "@/components/Shared/Technology/TechnologyLearningClient";

interface LearningResource {
  title: string;
  url: string;
  type?: string;
}

export function TechnologyLearning({
  learningResources,
}: {
  learningResources: LearningResource[];
}) {
  return <TechnologyLearningClient learningResources={learningResources} />;
}
