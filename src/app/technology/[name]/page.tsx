import { notFound } from "next/navigation";
import { CardSection } from "@/components/Pages/TechnologyPage/CardSection";
import { TechnologyCommunity } from "@/components/Pages/TechnologyPage/TechnologyCommunity";
import { TechnologyHeader } from "@/components/Pages/TechnologyPage/TechnologyHeader";
import { TechnologyLearning } from "@/components/Pages/TechnologyPage/TechnologyLearning";
import { TechnologyStats } from "@/components/Pages/TechnologyPage/TechnologyStats";
import { technologyData } from "@/data";

type PageProps = {
  params: Promise<{ name: string }>;
};

export default async function TechnologyPage({ params }: PageProps) {
  // Await the params object to properly access the name property
  const resolvedParams = await params;
  const name = decodeURIComponent(resolvedParams.name || "");
  const tech = technologyData[name as keyof typeof technologyData];

  if (!tech) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-6 max-w-5xl mx-auto flex flex-col gap-10">
      <TechnologyHeader tech={tech} />
      <div className="grid md:grid-cols-2 gap-8">
        <CardSection title="תכונות עיקריות" items={tech.features} />
        <CardSection title="שימושים נפוצים" items={tech.useCases} />
        <CardSection title="יתרונות" items={tech.pros} />
        <CardSection title="חסרונות" items={tech.cons} />
      </div>
      <TechnologyStats tech={tech} />
      <TechnologyLearning learningResources={tech.learningResources} />
      <TechnologyCommunity communityLinks={tech.communityLinks} />
    </div>
  );
}
