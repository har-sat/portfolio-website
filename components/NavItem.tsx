"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProps = {
  title: string;
  href: string;
};

export default function NavItem({ title, href }: NavProps) {
  let className = "hover:underline uppercase";
  const path = usePathname();

  if (path.startsWith(href)) {
    className += " font-semibold underline";
  }

  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}
