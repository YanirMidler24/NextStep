import { TechnologyInfo } from "@/interfaces/TechnologyInfo.interface";

export const NextJSInfo: TechnologyInfo = {
    name: "Next.js",
    category: "Frontend",
    description:
        "Next.js היא מסגרת עבודה (framework) מבוססת React, שמוסיפה יכולות מתקדמות כמו Server-Side Rendering (SSR), ניתוב דפים אוטומטי, ניהול SEO ואופטימיזציה לביצועים גבוהים באפליקציות רספונסיביות.",

    link: "https://nextjs.org/",

    features: [
        "File-based routing – יצירת דפים אוטומטית לפי מבנה קבצים",
        "תמיכה מלאה ב־Server-Side Rendering (SSR) ו־Static-Site Generation (SSG)",
        "API routes – בניית נקודות קצה ל־backend ישירות בפרונטאנד",
        "Built-in image optimization לשיפור מהירות טעינת תמונות",
        "Internationalization – בניית אתרים מרובי שפות בצורה נוחה",
    ],

    useCases: [
        "בניית אתרי תוכן כמו בלוגים ודפי שיווק",
        "חנויות מסחר אלקטרוני (E-commerce storefronts)",
        "אפליקציות היברידיות שמשלבות SSR ו־CSR",
        "פרויקטים בסגנון Jamstack עם Vercel או Netlify",
    ],

    pros: [
        "Zero-config setup – פיתוח מהיר בלי צורך בהגדרות מורכבות",
        "Great performance out of the box – ביצועים מצוינים כברירת מחדל",
        "תמיכה נוחה ומלאה ב־TypeScript",
    ],

    cons: [
        "Opinionated folder structure – מבנה תיקיות נוקשה יחסית",
        "ב־Serverless SSR יכולים להופיע cold starts",
    ],

    popularLibraries: [
        "next-auth – ניהול Authentication בפרויקטים",
        "swr – ניהול Data Fetching בצורה אפקטיבית",
        "next-i18next – פתרון לניהול Internationalization בפרויקטים רב־לשוניים",
    ],

    npmWeeklyDownloads: 7_500_000,  // עדכון מאפריל 2025
    githubStars: 115_000,           // vercel/next.js

    learningResources: [
        {
            title: "רוצה ללמוד Next.js? תשאירו פרטים ואחזור אלייך",
            url: "contact",
        },
    ],

    communityLinks: [
        { platform: "r/nextjs – קהילת Reddit", url: "https://www.reddit.com/r/nextjs/" },
        { platform: "Next.js Discord – שרת קהילתי רשמי", url: "https://discord.com/invite/nextjs" },
        { platform: "StackOverflow – תגית Next.js", url: "https://stackoverflow.com/questions/tagged/next.js" },
    ],
};
