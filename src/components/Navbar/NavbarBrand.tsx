// This file should be without "use client" directive
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/MainLogo.png";

export function NavbarBrand({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex items-center justify-center h-16">
      <Link
        href="/"
        onClick={(e) => {
          if (typeof window !== "undefined") {
            // Only prevent default if we're on the homepage
            const isHomePage =
              window.location.pathname === "/" ||
              window.location.pathname === "";

            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }

            // Call the passed onClick handler (for menu closing)
            if (onClick) onClick();
          }
        }}
      >
        <Image
          src={Logo}
          alt="Next Step Logo"
          width={160}
          height={80}
          className="h-16 w-auto scale-150"
          priority
        />
      </Link>
    </div>
  );
}
