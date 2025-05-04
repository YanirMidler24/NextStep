import { About, Contact, Hero, Pricing } from "@/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Step – מנטורינג לקריירה בהייטק | יניר מידלר",
  description:
    "ליווי מקצועי לפיתוח קריירה בהייטק עם יניר מידלר – מפתח Full Stack מנוסה. תרגול מעשי, בניית קורות חיים, הכנה לראיונות עבודה ויצירת מסלול מותאם אישית לעולם ההייטק.",
  keywords:
    "יניר מידלר, מנטור הייטק, ליווי לקריירה, קריירה בהייטק, מנטורינג טכנולוגי, ראיון עבודה, קורות חיים, פיתוח אישי, מפתח תוכנה, full stack, לימוד תכנות",

  openGraph: {
    type: "website",
    title: "Next Step – המסלול שלך לקריירה בהייטק | יניר מידלר",
    description:
      "מסלול מותאם אישית לעולם ההייטק עם מנטור מנוסה. תרגול מקצועי, הכנה מעשית ושיפור כישורים טכנולוגיים בדרך לקריירה אמיתית.",
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
