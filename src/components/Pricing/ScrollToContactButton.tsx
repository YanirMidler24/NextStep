"use client";

export function ScrollToContactButton({ label }: { label: string }) {
    const handleClick = () => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <button
            onClick={handleClick}
            className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition transform hover:scale-105 mt-auto"
            aria-label={`קבע/י שיעור אישי`}
        >
            {label}
        </button>
    );
}
