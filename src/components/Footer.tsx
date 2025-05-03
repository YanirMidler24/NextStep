// components/Footer/index.tsx - זהו Server Component
import Script from "next/script";
import { AddThisScript } from "./Shared/footer/AddThisScript";
import { ShareButtons } from "./Shared/footer/ShareButtons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media profiles - add all your social accounts here
  const socialProfiles = {
    linkedin:
      "https://www.linkedin.com/company/%D7%94%D7%A6%D7%A2%D7%93-%D7%94%D7%91%D7%90-%D7%A7%D7%97-%D7%90%D7%AA-%D7%94%D7%A6%D7%A2%D7%93-%D7%94%D7%91%D7%90-%D7%9C%D7%A2%D7%91%D7%A8-%D7%A2%D7%95%D7%9C%D7%9D-%D7%94%D7%94%D7%99%D7%98%D7%A7",
    instagram: "https://instagram.com/yournextstepbyyanir", // Add your Instagram URL if available
    facebook: "https://facebook.com/yournextstepbyyanir", // Add your Facebook URL if available
    twitter: "https://twitter.com/yournextstep", // Add your Twitter URL if available
    whatsapp: "https://wa.me/972504080604", // WhatsApp link with your phone number
  };

  return (
    <>
      {/* AddThis script as a client component */}
      <AddThisScript />

      <footer
        className="bg-black/50 py-8"
        role="contentinfo"
        aria-label="Site footer"
        itemScope
        itemType="http://schema.org/WPFooter"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} הצעד הבא. כל הזכויות שמורות.
            </div>

            {/* Share buttons as a client component */}
            <ShareButtons />
          </div>
        </div>
      </footer>

      {/* Add structured data for organization - helps with SEO */}
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
                contactType: "customer service",
                availableLanguage: ["Hebrew", "English"],
              },
            ],
            sameAs: [
              socialProfiles.linkedin,
              socialProfiles.facebook,
              socialProfiles.instagram,
              socialProfiles.twitter,
            ].filter(Boolean),
          }),
        }}
      />
    </>
  );
}
