"use client";

import { useState, useEffect, useRef } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let isThrottled = false;

    const toggleVisibility = () => {
      if (isThrottled) return;

      isThrottled = true;
      setTimeout(() => {
        setIsVisible(window.pageYOffset > 300);
        isThrottled = false;
      }, 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial check

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Remove focus to prevent hidden button from keeping focus
    buttonRef.current?.blur();

    // Screen reader announcement
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "assertive");
    announcement.setAttribute("role", "status");
    Object.assign(announcement.style, {
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
    });
    announcement.textContent = "הגעת לראש הדף";
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 3000);
  };

  return (
    <button
      ref={buttonRef}
      className={`fixed bottom-4 left-4 p-3 rounded-full transition-all duration-300 transform ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-purple-600 hover:bg-purple-700 text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2`}
      onClick={scrollToTop}
      aria-label="גלול לראש הדף"
      tabIndex={isVisible ? 0 : -1}
      style={{ zIndex: 40 }}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      <span className="sr-only">גלול לראש הדף</span>
    </button>
  );
}
