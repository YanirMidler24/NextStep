import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Navbar from "@/sections/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Step – הצעד הבא לקריירה בהייטק | יניר מידלר",
  description:
    "הצעד הבא שלך לקריירה בהייטק עם יניר מידלר – מפתח Full Stack מנוסה. ליווי מקצועי, הכנה לראיונות, בניית תיק עבודות וכתיבת קורות חיים – הכל במקום אחד.",
  keywords: [
    "הצעד הבא",
    "ליווי מקצועי להייטק",
    "מסלול לקריירה בהייטק",
    "מנטורינג תכנות",
    "React",
    "Node.js",
    "Next.js",
    "NestJS",
    "הכנה לראיונות עבודה",
    "בניית קורות חיים",
    "הייטק למתחילים",
    "תיק עבודות למפתחים",
    "לימוד פיתוח תוכנה",
  ],

  openGraph: {
    title: "Next Step – הצעד הבא לקריירה בהייטק | יניר מידלר",
    description:
      "הצעד הבא שלך בעולם ההייטק – לימוד תכנות, הכנה לעבודה, ויצירת מסלול מותאם אישית עם מפתח מנוסה. פיתוח כישורים מעשיים, ביטחון מקצועי והכוונה לקריירה.",
    url: "https://takethenextstep.netlify.app",
    type: "website",
    siteName: "Next Step – הצעד הבא",
    images: [
      {
        url: "https://takethenextstep.netlify.app/SEO.jpg",
        width: 1200,
        height: 630,
        alt: "Next Step – יניר מידלר",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Next Step – הצעד הבא שלך להייטק | יניר מידלר",
    description:
      "הצעד הבא שלך לתעשיית ההייטק – ליווי מקצועי, בניית תיק עבודות, הכנה לראיונות והכוונה אמיתית עם מנטור מהתעשייה.",
    images: ["https://takethenextstep.netlify.app/SEO.jpg"],
    site: "@your_twitter_handle", // תוכל לעדכן לפי הצורך
  },

  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ScrollToTop />
        <Toaster
          position="top-center"
          theme="dark"
          toastOptions={{
            className: "bg-black text-purple-600 border border-purple-600 shadow-lg",
          }}
        />

        <Footer />
      </body>
    </html>
  );
}
