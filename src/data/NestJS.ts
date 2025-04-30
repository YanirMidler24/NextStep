import { TechnologyInfo } from "@/interfaces/TechnologyInfo.interface";

export const NestJSInfo: TechnologyInfo = {
    name: "NestJS",
    category: "Backend",
    description:
        "NestJS הוא framework מודרני לפיתוח צד שרת עם Node.js, מבוסס על OOP, ארכיטקטורה מודולרית ודגש על עבודה עם TypeScript ו־Express.",

    link: "https://nestjs.com/",

    features: [
        "Modular architecture עם modules, controllers ו־providers",
        "Built-in dependency injection לניהול תלויות בצורה חכמה",
        "Decorators להגדרת ניתובים ומטא-דאטה",
        "תמיכה מובנית ב־GraphQL, WebSockets ועוד",
        "הרחבה קלה עם middlewares, pipes, filters ו־guards",
    ],

    useCases: [
        "פיתוח REST ו־GraphQL APIs ברמת Enterprise",
        "בניית מיקרו-שירותים מונעי אירועים (event-driven microservices)",
        "פיתוח serverless functions על בסיס Node.js",
    ],

    pros: [
        "TypeScript-first עיצוב חזק ומובנה",
        "קונבנציות קבועות שמייצרות קוד אחיד ונקי",
        "אינטגרציה ישירה עם OpenAPI (Swagger) ליצירת דוקומנטציה אוטומטית",
    ],

    cons: [
        "עקומת למידה תלולה יותר לעומת Express",
        "מבנה פרויקט opinionated שיכול להיות כבד לפרויקטים קטנים",
    ],

    popularLibraries: [
        "@nestjs/mongoose – חיבור ל־MongoDB עם Mongoose",
        "@nestjs/typeorm – עבודה מול בסיסי נתונים עם TypeORM",
        "@nestjs/passport – פתרונות Authentication מתקדמים",
    ],

    npmWeeklyDownloads: 450_000,  // אפריל 2025
    githubStars: 58_000,

    learningResources: [
        {
            title: "רוצה ללמוד Nest.js? מלא את הטופס ונחזור אליך",
            url: "https://forms.gle/nys7FZkKkaTSuihb9",
        },
    ],

    communityLinks: [
        { platform: "Discord – קהילת NestJS", url: "https://discord.gg/nestjs" },
        { platform: "r/NestFramework – קהילת Reddit", url: "https://www.reddit.com/r/NestFramework/" },
        { platform: "StackOverflow – תגית NestJS", url: "https://stackoverflow.com/questions/tagged/nestjs" },
    ],
};
