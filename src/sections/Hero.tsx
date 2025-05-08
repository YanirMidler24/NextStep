"use client";

import { useEffect } from "react";
import { HeroButton } from "@/components/Hero/HeroButton";
import { HeroTitle } from "@/components/Hero/HeroTitle";
import { TechnologiesGrid } from "@/components/Hero/TechnologiesGrid";
import { safeJSONParse } from "@/common/helpers/safeJSONParse";
import { HeroData } from "@/common";



export function Hero({ heroData }: { heroData: HeroData }) {
  // בדיקה אם יש anchor בכתובת
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
          description={heroData?.description ? safeJSONParse(heroData.description) : []}
          seo={heroData?.seo}
        />
        <HeroButton
          onClick={scrollToContact}
          text={heroData?.buttontext || "תיאום שיחת ייעוץ חינם"}
        />
        <TechnologiesGrid
          technologies={heroData?.technologies ? safeJSONParse(heroData.technologies) : []}
        />
      </div>
    </section>
  );
}

export default Hero;