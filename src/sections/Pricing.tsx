import { PackageCard } from "@/components/Pricing/PackageCard";
import { PRICING_CONTENT } from "@/common/constants";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 px-4"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="pricing-heading"
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent"
        >
          {PRICING_CONTENT.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_CONTENT.packages.map((pkg, index) => (
            <PackageCard
              key={pkg.name}
              pkg={pkg}
              index={index}
              className={
                // Only apply different order on mobile (below md breakpoint)
                index === 0
                  ? "order-2 md:order-1"
                  : index === 1
                    ? "order-1 md:order-2"
                    : "order-3 md:order-3"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
