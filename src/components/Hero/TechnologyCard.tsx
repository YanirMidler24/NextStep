import Link from "next/link";

interface TechnologyCardProps {
  name: string;
  category: string;
}

export function TechnologyCard({ name, category }: TechnologyCardProps) {
  return (
    <Link
      href={`/technology/${encodeURIComponent(name)}`}
      aria-label={`למד עוד על ${name}`}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const clickEvent = new MouseEvent("click", { bubbles: true });
          e.currentTarget.dispatchEvent(clickEvent);
        }
      }}
    >
      <article
        className="p-6 rounded-2xl bg-gray-900 shadow-md border border-purple-500/20 cursor-pointer text-center
                           transition-transform duration-300 ease-out will-change-transform
                           hover:scale-105 hover:-translate-y-1"
        itemScope
        itemType="https://schema.org/Service"
      >
        <h3
          className="text-2xl md:text-3xl font-semibold text-purple-400 mb-2"
          itemProp="serviceType"
        >
          {name}
        </h3>
        <p className="text-xs md:text-sm text-gray-400" itemProp="category">
          {category}
        </p>
      </article>
    </Link>
  );
}