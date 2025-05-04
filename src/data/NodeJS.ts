import { TechnologyInfo } from "@/interfaces/TechnologyInfo.interface";

export const NodeJSInfo: TechnologyInfo = {
    name: "Node.js",
    category: "Backend",
    description:
        "Node.js היא סביבת ריצה ל־JavaScript בצד השרת, שמאפשרת בניית שרתים יעילים, ניהול בקשות API וטיפול אסינכרוני באירועים באמצעות event loop.",

    link: "https://nodejs.org/",

    features: [
        "Single-threaded, non-blocking I/O עם libuv",
        "מודולים מובנים ליצירת שרתי HTTP/HTTPS ישירות בקוד",
        "ספריית תקן עשירה ותמיכה ב־native addons",
        "event-driven architecture לניהול תהליכים ואירועים בצורה אסינכרונית",
    ],

    useCases: [
        "פיתוח RESTful APIs ו־GraphQL APIs",
        "בניית אפליקציות בזמן אמת עם WebSockets ו־Socket.io",
        "פיתוח CLI tools וכלי אוטומציה",
        "הקמת מערכות מבוססות microservices",
    ],

    pros: [
        "ecosystem עצום עם מיליוני חבילות דרך npm",
        "פיתוח מהיר ויצירת prototypes בקלות",
        "תמיכה בגרסאות יציבות LTS לאורך זמן",
    ],

    cons: [
        "callback hell (נפתר חלקית בעזרת async/await)",
        "פעולות CPU כבדות עלולות לגרום לצוואר בקבוק בגלל תהליך בודד",
    ],

    popularLibraries: [
        "Express / Fastify – מסגרות עבודה לשרתים",
        "NestJS – framework מתקדם מעל Express",
        "Socket.io – פיתוח אפליקציות Real-time",
    ],

    npmWeeklyDownloads: 38_000_000, // עדכון אפריל 2025
    githubStars: 106_000,

    learningResources: [
        {
            title: "רוצה ללמוד Node.js? תשאירו פרטים ואחזור אלייך",
            url: "contact",
        },
    ],

    communityLinks: [
        { platform: "r/node – קהילת Reddit", url: "https://www.reddit.com/r/node/" },
        { platform: "Node.js Slack – ערוץ התקשורת הרשמי", url: "https://nodejs.slack.com/" },
        { platform: "StackOverflow – תגית Node.js", url: "https://stackoverflow.com/questions/tagged/node.js" },
    ],
};
