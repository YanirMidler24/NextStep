export interface IAboutProps {
    about: {
        title: string;
        description: string;
        keypoints: string;
        highlightphrases: string;
        specialline: string;
        specialties: {
            specialties: {
                title: string;
                categories: Array<{
                    name: string;
                    skills: string[];
                }>;
            };
        };
        seo: {
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
            other: {
                "profile:first_name": string;
                "profile:last_name": string;
                "profile:username": string;
            };
        };
    };
}

export interface AboutDescriptionProps {
    aboutData: {
        title: string;
        description: string;
        keypoints: string;
        highlightphrases: string;
        specialline: string;
        specialties: {
            specialties: {
                title: string;
                categories: Array<{
                    name: string;
                    skills: string[];
                }>;
            };
        };
        seo: {
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
            other: {
                "profile:first_name": string;
                "profile:last_name": string;
                "profile:username": string;
            };
        };
    };
}