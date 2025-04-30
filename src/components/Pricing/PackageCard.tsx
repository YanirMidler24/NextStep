import Link from "next/link";
import { PRICING_CONTENT } from "@/constans";
import { FeatureItem } from "../Pricing/FeatureItem";
import { PackageCardClientWrapper } from "../Shared/PackageCardClientWrapper"; // ✅

interface PackageCardProps {
  pkg: {
    name: string;
    description: string;
    price: string;
    features: string[];
  };
  index: number;
}

export function PackageCard({ pkg, index }: PackageCardProps) {
  return (
    <PackageCardClientWrapper delay={index * 0.1}>
      <div
        className="bg-black border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300 flex flex-col"
        role="article"
        aria-labelledby={`package-${index}-name`}
      >
        <div className="text-center mb-6">
          <h3
            id={`package-${index}-name`}
            className="text-2xl font-bold text-purple-400 mb-2"
          >
            {pkg.name}
          </h3>
          <p className="text-gray-400 mb-4">{pkg.description}</p>
          <div
            className="text-3xl font-bold text-white mb-4"
            aria-label={`מחיר: ${pkg.price}`}
          >
            {pkg.price}
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
          className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105 mt-auto"
          aria-label={`קבע/י שיעור עבור חבילת ${pkg.name}`}
        >
          {PRICING_CONTENT.linkText}
        </Link>
      </div>
    </PackageCardClientWrapper>
  );
}
