export const ABOUT_CONTENT = {
  title: "מי אני?",
  description: [
    "היי! אני יניר מידלר – מפתח Full Stack עם כמה שנות ניסיון בתעשייה .\n\n" +
    "אני לגמרי זוכר איך זה להרגיש מבולבל, חסר ביטחון, לא לדעת מאיפה להתחיל – ובדיוק בגלל זה יצרתי את 'הצעד הבא'. כי גם אני הייתי שם.\n\n",

    "במהלך הדרך צברתי ניסיון מעשי, כלים פרקטיים, וטכניקות שעובדות באמת – לא מהספרים, אלא מהשטח. היום, אני פה כדי להעביר את זה הלאה.\n\n",

    "המטרה שלי היא ברורה: לבנות איתך יחד מסלול מדויק שמותאם לך אישית – עם ליווי מקצועי, הכנה חכמה, והמון אמונה בדרך שלך לתוך עולם ההייטק.",
  ],
  keyPoints: [
    "ניסיון של מספר שנים בתעשייה",
    "הבאת דוגמאות מעולם האמיתי",
    "ליווי אישי מותאם לכל תלמיד/ה",
  ],
  specialties: {
    title: "התמחויות",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript"],
      },
      {
        name: "Backend",
        skills: ["Node.js", "NestJS", "Express"],
      },
    ],
  },
};

export const CONTACT_CONTENT = {
  title: "צור/י קשר",
  description: "מעוניין/ת להתחיל? השאר/י פרטים ואחזור אליך בהקדם.",
  buttonText: "מלא/י טופס יצירת קשר",
  buttonUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfybdXLjAbWwxqMHKXeor5Ay-0KV4hoXx-ADr33IB7FuOmO8Q/viewform?usp=header",
  infoCards: [
    {
      title: "שעות פעילות",
      details: ["כל השבוע", "מתי שנוח לך"],
      itemProp: "availableLanguage",
    },
    {
      title: "אזור פעילות",
      details: ["שיעורים מקוונים", "זמין בכל הארץ"],
    },
  ],
};

export const HERO_CONTENT = {
  title: "קריירה בהייטק זה לא חלום – זה הצעד הבא שלך",
  subTitle: "הכוונה אישית עם ניסיון מעשי",
  description: [
    "לימוד תכנות אחד על אחד בצורה הכי ברורה, מעשית וממוקדת. ",
    "הכנה חכמה לראיונות עבודה – כולל סימולציות אמיתיות והכוונה אישית. ",
    "ליווי לבניית מסלול כדי שתתחיל את הדרך שלך בעולם ההייטק",
  ],
  buttonText: "תיאום שיחת ייעוץ חינם",
  technologies: [
    {
      name: "React",
      category: "Frontend",
    },
    {
      name: "Next.js",
      category: "Frontend",
    },
    {
      name: "Node.js",
      category: "Backend",
    },
    {
      name: "NestJS",
      category: "Backend",
    },
  ],
};

export const PRICING_CONTENT = {
  title: "מסלולי לימוד",
  linkText: "קחו את הצעד הבא",
  subtitle: "מחירים שווים לכל כיס – עם ערך מעשי מהתעשייה",
  packages: [
    {
      name: "ניתוח ומיקוד קורות חיים",
      price: "₪150",
      description: 'פגישה ממוקדת ומקצועית במחיר שובר שוק',
      highlight: "השקעה קטנה שיכולה לפתוח לך דלתות גדולות",
      features: [
        "סשן פרטי באורך 60 דקות",
        "ניתוח מקצועי של קורות חיים",
        "מיקוד בהתאמה אישית לקריירת ההייטק",
      ],
    },
    {
      name: "מנטורינג מלא",
      price: "₪400",
      description: "3 מפגשים אישיים במחיר הכי משתלם בארץ",
      highlight: 'שיעור מטרה – ידע פרקטי ממוקד תוך שעה',
      features: [
        "שיעור טכנולוגי אחד לבחירה",
        "סשן נפרד לניתוח וכתיבת קורות חיים",
        "סימולציית ראיון אמיתי עם משוב מפורט",
        "הכוונה מקצועית להתקדמות אישית",
      ],
    },
    {
      name: "שיעור בודד",
      price: "₪150",
      description: "שיעור טכנולוגי אישי וממוקד במחיר נגיש",
      highlight: "ניסיון מהשטח – במחיר של שעה עם מורה פרטי",
      features: [
        "שיעור פרטי מותאם אישית",
        "אפשרות להכנה ממוקדת לפני ראיונות",
        "בחירת טכנולוגיה לפי צורך (React, Node.js, ועוד)",
      ],
    },
  ],
};


export const NAVBAR_CONTENT = {
  brand: "Next Step",
  mobileMenuOpen: "סגור/י תפריט",
  mobileMenuClosed: "פתח/י תפריט",
  navAriaLabel: "תפריט ראשי",
  mobileNavAriaLabel: "תפריט נייד",
  menuItems: [
    { id: "about", label: "עליי" },
    { id: "pricing", label: "מסלולים" },
    { id: "contact", label: "צור/י קשר" },
  ],
};


export const blacklistPatterns = [
  /<script.*?>.*?<\/script>/gi,   // block script tags
  /document\./gi,
  /window\./gi,
  /select\s+.*\s+from/gi,
  /\b(drop|insert|delete|update)\b/gi,
  /\balert\s*\(/gi,
  /\bfunction\b/gi,
  /=>/g,
  /--/g,
  /['"`]/g,                       // quotes
  /;/g,                           // semicolon
];