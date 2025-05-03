import Link from "next/link";
import { PRICING_CONTENT } from "@/constans";
import { FeatureItem } from "../Pricing/FeatureItem";
import { PackageCardClientWrapper } from "../Shared/PackageCardClientWrapper";
import { Metadata } from "next";

interface PackageCardProps {
  pkg: {
    name: string;
    description: string;
    price: string;
    features: string[];
  };
  index: number;
}

// Generate metadata for each package card
export function generateMetadata({
  pkg,
}: {
  pkg: PackageCardProps["pkg"];
}): Metadata {
  // Creating structured data for pricing package (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Course",
    name: `שיעור אישית: ${pkg.name}`,
    description: `הדרך לקריירה בהייטק - ${pkg.description}`,
    provider: {
      "@type": "Person",
      name: "יניר מידלר - ניסיון מקצועי בהייטק",
      url: "https://takethenextstep.netlify.app/about", // Your domain with path
    },
    offers: {
      "@type": "Offer",
      price: pkg.price.replace("₪", ""),
      priceCurrency: "ILS",
      url: "https://takethenextstep.netlify.app/pricing", // Your domain with path
    },
  };

  return {
    title: `שיעור אישית בהייטק | ${pkg.name} | הדרך לקריירה מקצועית`,
    description: `ניסיון מקצועי ושיעור אישית בהייטק. ${pkg.description}. ${pkg.features.join(". ")}. הדרך המותאמת בקריירת ההייטק שלך מתחיל עם ${pkg.name}.`,
    keywords: `שיעור אישית, הדרך להייטק, ניסיון מקצועי, ${pkg.name}, מסלולי לימוד, קריירה בהייטק, הייטק, הצעד הבא, ${pkg.features.join(", ")}`,

    openGraph: {
      type: "website",
      title: `שיעור אישית בהייטק: ${pkg.name} | ${PRICING_CONTENT.title}`,
      description: `ניסיון מעשי והדרך לקריירה: ${pkg.description}. ${pkg.features[0]}. הצעד הבא בקריירת ההייטק שלך.`,
      locale: "he_IL",
      url: `https://takethenextstep.netlify.app/pricing#${pkg.name.toLowerCase().replace(/ /g, "-")}`, // Your domain with path and anchor
    },

    twitter: {
      card: "summary",
      title: `שיעור אישית להייטק | ${pkg.name} | ${PRICING_CONTENT.title}`,
      description: `${pkg.description}. הדרך המותאמת לקריירת ההייטק שלך.`,
      site: "@your_twitter_handle", // Your Twitter handle if available
    },

    other: {
      "product:price:amount": pkg.price.replace("₪", ""),
      "product:price:currency": "ILS",
    },

    // Add the JSON-LD structured data
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

        <Link
          href={PRICING_CONTENT.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105 mt-auto"
          aria-label={`קבע/י שיעור עבור חבילת ${pkg.name}`}
        >
          {PRICING_CONTENT.linkText}
        </Link>
      </div>
    </PackageCardClientWrapper>
  );
}
