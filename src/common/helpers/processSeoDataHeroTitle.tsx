import { SeoMetadata } from "../interfaces";

export function processSeoDataHeroTitle(seo: SeoMetadata, description: string[], tech: { name: string }[]): SeoMetadata {
    const descText = description.join(" ");
    const techText = tech.map(t => t.name).join(", ");

    return {
        ...seo,
        description: seo.description.replace('${description.join(" ")}', descText),
        keywords: seo.keywords.replace('${technologies.map((tech) => tech.name).join(", ")}', techText),
        openGraph: {
            ...seo.openGraph,
            description: seo.openGraph.description.replace('${description.join(" ")}', descText)
        }
    };
}