"use client";

import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Throttle function to improve performance
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

    // Ensure we check visibility on component mount
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Move focus to the top of the page for screen readers
    document.querySelector("body")?.focus();
    // Announce to screen readers
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "assertive");
    announcement.setAttribute("role", "status");
    announcement.style.position = "absolute";
    announcement.style.width = "1px";
    announcement.style.height = "1px";
    announcement.style.overflow = "hidden";
    announcement.textContent = "הגעת לראש הדף"; // "You've reached the top of the page" in Hebrew
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 3000);
  };

  return (
    <button
      className={`${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } fixed bottom-4 left-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2`}
      onClick={scrollToTop}
      aria-label="גלול לראש הדף"
      tabIndex={isVisible ? 0 : -1}
      style={{ zIndex: 90 }}
      aria-hidden={!isVisible}
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
