"use client";

import { useEffect } from "react";
import { HeroButton } from "@/components/Hero/HeroButton";
import { HeroTitle } from "@/components/Hero/HeroTitle";
import { TechnologiesGrid } from "@/components/Hero/TechnologiesGrid";
import { safeJSONParse } from "@/common/helpers/safeJSONParse";
import { HeroData, Technology } from "@/common";

export function Hero({ heroData }: { heroData: HeroData }) {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Properly typed parsing of JSON strings
  const description = heroData?.description
    ? safeJSONParse<string[]>(heroData.description, [])
    : [];

  const technologies = heroData?.technologies
    ? safeJSONParse<Technology[]>(heroData.technologies, [])
    : [];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto text-center">
        <HeroTitle
          title={heroData?.title || "הדרך שלך להייטק"}
          subTitle={heroData?.subtitle || "תכנות, ראיונות עבודה, והכל בדרך שלך"}
          description={description}
          seo={heroData?.seo}
        />
        <HeroButton
          onClick={scrollToContact}
          text={heroData?.buttontext || "תיאום שיחת ייעוץ חינם"}
        />
        <TechnologiesGrid
          technologies={technologies}
        />
      </div>
    </section>
  );
}

export default Hero;