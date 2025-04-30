import { NAVBAR_CONTENT } from "@/constans";
import { motion } from "framer-motion";

export function MobileMenuButton({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={toggleMenu}
      className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-purple-400 focus:outline-none"
      aria-expanded={isOpen}
      aria-label={
        isOpen ? NAVBAR_CONTENT.mobileMenuOpen : NAVBAR_CONTENT.mobileMenuClosed
      }
    >
      <span className="sr-only">
        {isOpen
          ? NAVBAR_CONTENT.mobileMenuOpen
          : NAVBAR_CONTENT.mobileMenuClosed}
      </span>
      <div className="w-6 h-6 flex flex-col justify-around">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          className="w-6 h-0.5 bg-current transform origin-center transition-transform"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          className="w-6 h-0.5 bg-current"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          className="w-6 h-0.5 bg-current transform origin-center transition-transform"
        />
      </div>
    </motion.button>
  );
}
