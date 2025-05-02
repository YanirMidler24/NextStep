import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Navbar from "@/sections/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO עדכני
export const metadata: Metadata = {
  title: "Next Step – ליווי אישי לקריירה בהייטק",
  description:
    "מנטורינג אישי ללימוד תכנות, הכנה לראיונות, בניית קורות חיים והכוונה לקריירה בתחום ההייטק. יניר מידלר, מפתח מנוסה, מלווה אותך בצעד הבא.",
  keywords: [
    "מנטור תכנות",
    "React",
    "Node.js",
    "Next.js",
    "NestJS",
    "לימוד תכנות",
    "הכנה לראיונות",
    "קורות חיים להייטק",
    "שיעורים פרטיים אונליין",
    "הייטק למתחילים",
  ],
  openGraph: {
    title: "Next Step – ליווי אישי לקריירה בהייטק",
    description:
      "לימוד תכנות, הכנה לראיונות עבודה, וסיוע במציאת עבודה ראשונה – עם מנטור אישי מנוסה.",
    url: "https://takethenextstep.netlify.app", // ← כתובת האתר שלך
    type: "website",
    siteName: "Next Step",
    images: [
      {
        url: "https://takethenextstep.netlify.app/SEO.jpg", // ✅ תמונה לקידום ברשתות
        width: 1200,
        height: 630,
        alt: "Next Step – יניר מידלר",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Step – ליווי אישי לקריירה בהייטק",
    description:
      "שיעורים אישיים בתכנות, קורות חיים והכוונה לקריירה בתחום ההייטק עם יניר מידלר.",
    images: ["https://takethenextstep.netlify.app/SEO.jpg"], // ✅ גם בטוויטר
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
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
