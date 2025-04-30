import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ⬇️ תמונות מתוך public נתמכות כברירת מחדל
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 768, 1024, 1280, 1600, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // אין צורך להוסיף domains כי אתה לא טוען תמונות חיצוניות
  },
};

export default nextConfig;
