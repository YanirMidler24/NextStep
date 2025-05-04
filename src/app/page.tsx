import { About, Contact, Hero, Pricing } from "@/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Step – הצעד הבא לקריירה בהייטק | יניר מידלר",
  description:
    "הצעד הבא שלך להצלחה בהייטק: ליווי מקצועי עם יניר מידלר – מפתח Full Stack מנוסה. תרגול מעשי, בניית קורות חיים, הכנה לראיונות עבודה ויצירת מסלול אישי לעולם ההייטק.",
  keywords:
    "הצעד הבא, יניר מידלר, מנטור הייטק, ליווי לקריירה, קריירה בהייטק, מנטורינג טכנולוגי, ראיון עבודה, קורות חיים, פיתוח אישי, מפתח תוכנה, full stack, לימוד תכנות",

  openGraph: {
    type: "website",
    title: "Next Step – הצעד הבא שלך לקריירה בהייטק | יניר מידלר",
    description:
      "הצעד הבא שלך לעולם ההייטק – ליווי אישי עם מנטור מנוסה. תרגול מקצועי, פיתוח כישורים והכנה מעשית לקריירה אמיתית.",
    locale: "he_IL",
    url: "https://takethenextstep.netlify.app/",
  },
};




export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
