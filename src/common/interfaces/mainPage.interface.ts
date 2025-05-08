export interface MainPageSeo {
    mainpageseo: {
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
        };
    };
}