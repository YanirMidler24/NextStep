import { PRICING_CONTENT } from "@/constans";
import { Metadata } from "next";
import { FeatureItem } from "../Pricing/FeatureItem";
import { PackageCardClientWrapper } from "../Shared/PackageCardClientWrapper";
import { ScrollToContactButton } from "./ScrollToContactButton";

interface PackageCardProps {
  pkg: {
    name: string;
    description: string;
    price: string;
    features: string[];
  };
  index: number;
}

export function generateMetadata({
  pkg,
}: {
  pkg: PackageCardProps["pkg"];
}): Metadata {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Course",
    name: `מסלול אישי: ${pkg.name}`,
    description: `${pkg.description}. כולל: ${pkg.features.join(", ")}`,
    provider: {
      "@type": "Person",
      name: "יניר מידלר – מפתח ומנטור בהייטק",
      url: "https://takethenextstep.netlify.app/about",
    },
    offers: {
      "@type": "Offer",
      price: pkg.price.replace("₪", ""),
      priceCurrency: "ILS",
      url: "https://takethenextstep.netlify.app/pricing",
    },
  };

  return {
    title: `מסלול אישי להייטק | ${pkg.name} | ליווי מקצועי עם יניר מידלר`,
    description: `המסלול "${pkg.name}" מציע ליווי אישי, תרגול מעשי, והכנה לקריירה אמיתית בהייטק. ${pkg.description}. כולל: ${pkg.features.join(", ")}`,
    keywords: `יניר מידלר, שיעור אישי, קריירה בהייטק, ${pkg.name}, מנטור הייטק, ליווי מקצועי, מסלול למתחילים, מסלול מתקדמים, ${pkg.features.join(", ")}`,

    openGraph: {
      type: "website",
      title: `מסלול אישי לפיתוח קריירה: ${pkg.name} | Next Step – יניר מידלר`,
      description: `ליווי מקצועי בהתאמה אישית. ${pkg.description}. כולל: ${pkg.features[0]}`,
      locale: "he_IL",
      url: `https://takethenextstep.netlify.app/pricing#${pkg.name
        .toLowerCase()
        .replace(/ /g, "-")}`,
    },

    twitter: {
      card: "summary",
      title: `Next Step – מסלול ${pkg.name} | שיעור אישי עם יניר מידלר`,
      description: `${pkg.description}. תכנית מותאמת אישית לפיתוח הקריירה שלך בהייטק.`,
      site: "@your_twitter_handle", // עדכן אם רלוונטי
    },

    other: {
      "product:price:amount": pkg.price.replace("₪", ""),
      "product:price:currency": "ILS",
    },

    alternates: {
      types: {
        "application/ld+json": JSON.stringify(structuredData),
      },
    },
  };
}


export function PackageCard({ pkg, index }: PackageCardProps) {
  return (
    <PackageCardClientWrapper delay={index * 0.1}>
      <div
        className="h-full bg-black border border-purple-500/20 rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-purple-500/40 flex flex-col"
        role="article"
        aria-labelledby={`package-${index}-name`}
        itemScope
        itemType="https://schema.org/Course"
      >
        <div className="text-center mb-6">
          <h3
            id={`package-${index}-name`}
            className="text-2xl font-bold text-purple-400 mb-2"
            itemProp="name"
          >
            {pkg.name}
          </h3>
          <p className="text-gray-400 mb-4" itemProp="description">
            {pkg.description}
          </p>
          <div
            className="text-3xl font-bold text-white mb-4"
            aria-label={`מחיר: ${pkg.price}`}
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <span itemProp="price" content={pkg.price.replace("₪", "")}>
              {pkg.price}
            </span>
            <meta itemProp="priceCurrency" content="ILS" />
          </div>
        </div>

        <ul
          className="space-y-3 mb-6 flex-1"
          aria-label={`תכונות חבילת ${pkg.name}`}
        >
          {pkg.features.map((feature, featureIndex) => (
            <FeatureItem key={featureIndex} feature={feature} />
          ))}
        </ul>

        <ScrollToContactButton label={PRICING_CONTENT.linkText} />

      </div>
    </PackageCardClientWrapper>
  );
}
