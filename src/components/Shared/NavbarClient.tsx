"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { NAVBAR_CONTENT } from "@/common/constants";
import { NavbarBrand } from "@/components/Navbar/NavbarBrand";
import { DesktopMenu } from "@/components/Navbar/DesktopMenu";
import { MobileMenuButton } from "@/components/Navbar/MobileMenuButton";
import { MobileMenu } from "@/components/Navbar/MobileMenu";

export function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleBrandClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={scrolled ? "scrolled" : "top"}
      variants={{
        scrolled: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(12px)",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
        top: {
          backgroundColor: "rgba(0, 0, 0, 0)",
          backdropFilter: "blur(0px)",
          boxShadow: "none",
        },
      }}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      role="navigation"
      aria-label={NAVBAR_CONTENT.navAriaLabel}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Pass the handleBrandClick function to NavbarBrand */}
          <NavbarBrand onClick={handleBrandClick} />
          <DesktopMenu onItemClick={scrollToSection} />
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onItemClick={scrollToSection} />
    </motion.nav>
  );
}
