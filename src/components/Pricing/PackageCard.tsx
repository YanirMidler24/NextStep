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
    highlight?: string; // ✅ חדש
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
    name: `מסלול אישי – ${pkg.name}`,
    description: `${pkg.description}. כולל: ${pkg.features.join(", ")}`,
    provider: {
      "@type": "Organization",
      name: "הצעד הבא – ליווי לקריירה בהייטק",
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
    title: `הצעד הבא: מסלול ${pkg.name} לקריירה בהייטק | יניר מידלר`,
    description: `המסלול "${pkg.name}" מבית 'הצעד הבא' מציע ליווי אישי, תרגול מעשי, והכנה אמיתית לעולם ההייטק. ${pkg.description}. כולל: ${pkg.features.join(", ")}`,
    keywords: `הצעד הבא, יניר מידלר, מסלול אישי, ליווי בהייטק, ${pkg.name}, מנטורינג תכנות, קריירה בהייטק, ${pkg.features.join(", ")}`,

    openGraph: {
      type: "website",
      title: `מסלול אישי: ${pkg.name} | הצעד הבא – קריירה בהייטק עם יניר מידלר`,
      description: `הצעד הבא שלך להייטק מתחיל כאן. ${pkg.description}. כולל: ${pkg.features[0]}`,
      locale: "he_IL",
      url: `https://takethenextstep.netlify.app/pricing#${pkg.name
        .toLowerCase()
        .replace(/ /g, "-")}`,
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
        {pkg.highlight && (
          <p className="text-sm text-green-400 font-semibold mb-4" aria-label="הדגשת מחיר משתלם">
            {pkg.highlight}
          </p>
        )}
        <ul
          className="space-y-3 mb-6 flex-1"
          aria-label={`תכונות חבילת ${pkg.name}`}
        >
          {pkg.features.map((feature, featureIndex) => (
            <FeatureItem key={featureIndex} feature={feature} />
          ))}
        </ul>

        <ScrollToContactButton label={PRICING_CONTENT.linkText} packageName={pkg.name} />

      </div>
    </PackageCardClientWrapper>
  );
}
