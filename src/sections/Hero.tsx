"use client";

import { useEffect } from "react";
import { HeroButton } from "@/components/Hero/HeroButton";
import { HeroTitle } from "@/components/Hero/HeroTitle";
import { TechnologiesGrid } from "@/components/Hero/TechnologiesGrid";
import { HERO_CONTENT } from "@/constans";

export function Hero() {
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
        <HeroTitle />
        <HeroButton onClick={scrollToContact} text={HERO_CONTENT.buttonText} />
        <TechnologiesGrid />
      </div>
    </section>
  );
}

export default Hero;
