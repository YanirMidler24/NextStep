"use client";

import { useEffect } from "react";
import { HeroButton } from "@/components/Hero/HeroButton";
import { HeroTitle } from "@/components/Hero/HeroTitle";
import { TechnologiesGrid } from "@/components/Hero/TechnologiesGrid";
import { safeJSONParse } from "@/common/helpers/safeJSONParse";

// Update Hero to accept heroData as props

interface HeroProps {
  heroData: {
    title: string;
    subtitle: string;
    description: string;
    buttontext: string;
    technologies: string;
  };
}
export function Hero({ heroData }: HeroProps) {
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
        {/* Pass the hero data to HeroTitle */}
        <HeroTitle
          title={heroData?.title}
          subTitle={heroData?.subtitle}
          description={heroData?.description ? safeJSONParse(heroData.description) : []}
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