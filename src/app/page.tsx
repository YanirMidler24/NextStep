import { IAboutProps, HeroData, MainPageSeo } from "@/common";
import { ABOUT_CONTENT_QUERY, HERO_QUERY, MAIN_QUERY } from "@/constans";
import { datocmsClient } from "@/lib/datocms";
import { About, Contact, Hero, Pricing } from "@/sections";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const MainPageSeo: MainPageSeo = await datocmsClient.request(MAIN_QUERY);
  const seo = MainPageSeo.mainpageseo.seo;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      type: "website",
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      locale: seo.openGraph.locale,
      url: seo.openGraph.url,
    },
  };
}
export default async function Home() {
  const heroData: HeroData = await datocmsClient.request(HERO_QUERY);
  const aboutData: IAboutProps = await datocmsClient.request(ABOUT_CONTENT_QUERY);

  return (
    <main className="flex-1">
      <Hero heroData={heroData.hero} />
      <About about={aboutData.about} />
      <Pricing />
      <Contact />
    </main>
  );
}