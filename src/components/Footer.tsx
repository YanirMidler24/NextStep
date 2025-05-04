import Script from "next/script";
import { AddThisScript } from "./Shared/footer/AddThisScript";
import { ShareButtons } from "./Shared/footer/ShareButtons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialProfiles = {
    linkedin:
      "https://www.linkedin.com/company/%D7%94%D7%A6%D7%A2%D7%93-%D7%94%D7%91%D7%90-%D7%A7%D7%97-%D7%90%D7%AA-%D7%94%D7%A6%D7%A2%D7%93-%D7%94%D7%91%D7%90-%D7%9C%D7%A2%D7%91%D7%A8-%D7%A2%D7%95%D7%9C%D7%9D-%D7%94%D7%94%D7%99%D7%98%D7%A7",
    instagram: "https://instagram.com/yournextstepbyyanir",
    facebook: "https://facebook.com/yournextstepbyyanir",
    twitter: "https://twitter.com/yournextstep",
    whatsapp: "https://wa.me/972504080604",
  };

  return (
    <>
      <AddThisScript />

      <footer
        className="bg-black/50 py-8"
        role="contentinfo"
        aria-label="כותרת תחתונה של האתר"
        itemScope
        itemType="https://schema.org/WPFooter"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div
              className="text-gray-300 text-sm"
              aria-label={`© ${currentYear} הצעד הבא. כל הזכויות שמורות.`}
            >
              © {currentYear} הצעד הבא. כל הזכויות שמורות.
            </div>

            <ShareButtons />
          </div>
        </div>
      </footer>

      {/* Structured data - Organization schema for SEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "הצעד הבא - קריירה בהייטק",
            url: "https://takethenextstep.netlify.app",
            logo: "https://takethenextstep.netlify.app/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+972-50-408-0604",
                contactType: "Customer Support",
                areaServed: "IL",
                availableLanguage: ["Hebrew", "English"],
              },
            ],
            sameAs: Object.values(socialProfiles),
          }),
        }}
      />
    </>
  );
}
