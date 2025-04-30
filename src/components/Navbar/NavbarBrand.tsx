"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/MainLogo.png";

export function NavbarBrand() {
  return (
    <motion.div
      className="flex items-center justify-center h-16"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/">
        <Image
          src={Logo}
          alt="Next Step Logo"
          width={160}
          height={80}
          className="h-16 w-auto scale-150"
          priority
        />
      </Link>
    </motion.div>
  );
}
