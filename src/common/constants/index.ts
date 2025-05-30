export const highlightWords = ["תכנות", "ראיונות עבודה", "הדרך שלך", "שיעור", "אישית", "ההייטק", "ניסיון"];



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


export const HERO_QUERY = `
  {
    hero {
      title
      subtitle
      description
      buttontext
      technologies
      seo
    }
  }
`;

export const MAIN_QUERY = `
  {
    mainpageseo {
      seo
    }
  }
`;


export const ABOUT_CONTENT_QUERY = `
  {
    about {
      title
      description
      keypoints
      highlightphrases
      specialline
      specialties
    }
  }
`;