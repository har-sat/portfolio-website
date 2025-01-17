"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

type NavProps = {
  title: string;
  href: string;
};

export default function NavItem({ title, href }: NavProps) {
  const path = usePathname();
  const isSelected = path === href;

  return (
    <Link
      href={href}
      className="font-semibold uppercase hover:text-text-300 transition-colors duration-200"
    >
      {title}
      {isSelected && (
        <motion.div
          layoutId="page-indicator"
          transition={{ duration: 0.2 }}
          className="bg-text-50 w-full h-[1px]"
        />
      )}
    </Link>
  );
}
