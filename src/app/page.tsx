import { About, Contact, Hero, Pricing } from "@/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שיעור אישית להייטק | הדרך להצלחה בקריירה | יניר מידלר",
  description:
    "שיעור אישית לפיתוח קריירה בהייטק עם ניסיון מעשי. הדרך המותאמת אישית עבורך להצלחה בתעשיית ההייטק עם ליווי מקצועי.",
  keywords:
    "שיעור אישית, הדרך להייטק, ניסיון בתכנות, קריירה בהייטק, ליווי מקצועי",

  openGraph: {
    type: "website",
    title: "שיעור אישית להייטק | הדרך המקצועית לקריירה מוצלחת",
    description:
      "ליווי מקצועי עם ניסיון אמיתי - הדרך המותאמת אישית עבורך בתעשיית ההייטק.",
    locale: "he_IL",
    url: "https://takethenextstep.netlify.app/", // Your domain
  },

  twitter: {
    card: "summary_large_image",
    title: "שיעור אישית בהייטק | ניסיון מעשי",
    description: "הדרך המותאמת אישית להצלחה בתעשיית ההייטק.",
    site: "@your_twitter_handle", // Your Twitter handle if available
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
