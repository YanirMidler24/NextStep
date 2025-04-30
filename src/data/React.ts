import { TechnologyInfo } from "@/interfaces/TechnologyInfo.interface";

export const ReactInfo: TechnologyInfo = {
    name: "React",
    category: "Frontend",
    description:
        "React היא ספריית JavaScript לבניית ממשקי משתמש אינטראקטיביים, מבוססת על רכיבים דינמיים עם ניהול state, ומתאימה במיוחד לאפליקציות חד־עמודיות SPA.",

    link: "https://react.dev/",

    features: [
        "Virtual DOM לרינדור מהיר ויעיל של שינויים בממשק",
        "שימוש ב־JSX – תחביר שמשלב JavaScript ו־HTML",
        "מבנה רכיבים היררכי ו־declarative עם props ו־state",
        "מערכת hooks לניהול לוגיקה אינטראקטיבית כולל useState, useEffect ו־useContext",
    ],

    useCases: [
        "בניית אפליקציות חד־עמודיות SPA כמו לוחות ניהול ואתרי מסחר",
        "פיתוח אפליקציות מובייל עם React Native",
        "פיתוח ספריות רכיבים (design systems) עם Storybook",
        "שילוב בפרויקטים עם Server-Side Rendering באמצעות Next.js",
    ],

    pros: [
        "ecosystem עשיר עם קהילה עצומה ומאות ספריות תומכות",
        "תמיכה בכלי פיתוח מתקדמים כמו React DevTools",
        "כמות אדירה של תיעוד, קורסים ומשאבי למידה איכותיים",
    ],

    cons: [
        "קצב התפתחות מהיר שעלול להוביל לחוסר אחידות בפרויקטים",
        "ל־JSX יש עקומת למידה משמעותית עבור מפתחים חדשים",
        "דורשת לעיתים עבודה עם תהליכי build מורכבים כמו Webpack, Babel או Vite",
    ],

    popularLibraries: [
        "Redux / Zustand / Jotai – פתרונות לניהול state",
        "React Router – ניתוב דינמי באפליקציה",
        "React Query / SWR – ניהול בקשות נתונים Data Fetching",
        "Emotion / styled-components – עיצוב בעזרת CSS-in-JS",
    ],

    npmWeeklyDownloads: 24_000_000,  // עדכון מאפריל 2025
    githubStars: 210_000,           // reactjs/react

    learningResources: [
        {
            title: "רוצה ללמוד React.js? מלא את הטופס ונחזור אליך",
            url: "https://forms.gle/nys7FZkKkaTSuihb9",
        },
    ],

    communityLinks: [
        { platform: "Reactiflux Discord – קהילת מפתחים", url: "https://www.reactiflux.com/" },
        { platform: "r/reactjs – קהילת Reddit", url: "https://www.reddit.com/r/reactjs/" },
        { platform: "StackOverflow – תגית reactjs", url: "https://stackoverflow.com/questions/tagged/reactjs" },
    ],
};
