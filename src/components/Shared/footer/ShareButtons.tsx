"use client";

import React from "react";

const shareOnSocial = (platform: string) => {
  let shareUrl = "";

  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
      break;

    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`;
      break;

    case "linkedin":
      shareUrl = `https://www.linkedin.com/in/yanir-midler`;
      break;

    case "whatsapp":
      const phone = "972504080604";
      const message = "היי, אני מעוניין לקחת את הצעד הבא שלי בהייטק";
      shareUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      break;

    default:
      return;
  }

  window.open(shareUrl, "_blank", "width=600,height=400");
};


export function ShareButtons() {
  return (
    <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
      <button
        onClick={() => shareOnSocial("linkedin")}
        aria-label="שתף בלינקדאין"
        className="text-gray-300 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md p-2"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </button>
      <button
        onClick={() => shareOnSocial("whatsapp")}
        aria-label="שתף בווטסאפ"
        className="text-gray-300 hover:text-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-400 rounded-md p-2"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.03-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
        </svg>
      </button>
    </div>
  );
}
