"use client";

import { Button } from "../ui/button";

export function ScrollToContactButton({ label, packageName }: { label: string, packageName: string }) {
    const handleClick = () => {
        const el = document.getElementById("contact");
        if (el) {
            const url = new URL(window.location.href);
            url.searchParams.set("package", packageName); // או שם מזהה מסודר כמו id
            window.history.replaceState({}, "", url); // מעדכן את ה-URL בלי לרענן
            el.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <Button
            onClick={handleClick}
            className="w-full text-center cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105 mt-auto"
            aria-label={`קבע/י שיעור אישי`}
        >
            {label}
        </Button>
    );
}
