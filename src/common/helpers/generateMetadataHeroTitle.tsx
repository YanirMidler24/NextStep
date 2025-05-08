import { SeoMetadata, processSeoDataHeroTitle, safeJSONParse } from "@/common";
import { Metadata } from "next";


export function generateMetadataHeroTitle({ heroData }: { heroData: { seo: SeoMetadata, description: string, technologies: string } }): Metadata {
    const description = safeJSONParse(heroData.description, []);
    const technologies = safeJSONParse(heroData.technologies, []);
    const processed = processSeoDataHeroTitle(heroData.seo, description, technologies);

    return {
        title: processed.title,
        description: processed.description,
        keywords: processed.keywords,
        openGraph: processed.openGraph,
    };
}
