export interface HeroData {
    title: string;
    subtitle: string;
    description: string;
    buttontext: string;
    technologies: string;
}


export interface HeroDataResponse {
    hero: HeroData;
}

export interface SeoMetadata {
    title: string;
    description: string;
    keywords: string;
    openGraph: {
        type: string;
        title: string;
        description: string;
        locale: string;
        url: string;
    };
}

// Technology interface
export interface Technology {
    name: string;
    category: string;
}

// The basic Hero data interface
export interface HeroData {
    title: string;
    subtitle: string;
    description: string;
    buttontext: string;
    technologies: string;
    seo: SeoMetadata;
}

export interface HeroTitleProps {
    title: string;
    subTitle: string;
    description: string[];
    seo?: SeoMetadata;
}