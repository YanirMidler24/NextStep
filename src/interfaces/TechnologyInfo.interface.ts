// src/types/technology.ts
export interface TechnologyInfo {
    name: string;
    category: string;
    description: string;
    link: string;

    /** Key built-in features or paradigms */
    features: string[];

    /** Common real-world use cases */
    useCases: string[];

    /** Strengths and trade-offs */
    pros: string[];
    cons: string[];

    /** Most popular companion libraries or tools */
    popularLibraries: string[];

    /** Quick stats to gauge popularity & ecosystem health */
    npmWeeklyDownloads: number;    // from https://npmjs.com
    githubStars: number;           // from https://github.com

    /** Curated learning resources */
    learningResources: {
        title: string;
        url: string;
        type?: 'docs' | 'tutorial' | 'book' | 'video';
    }[];

    /** Key community hubs and aggregators */
    communityLinks: {
        platform: string;
        url: string;
    }[];
}
