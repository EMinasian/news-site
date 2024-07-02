"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLinks({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname?.includes(children.toLowerCase()) ? "active" : ""}
    >
      {children}
    </Link>
  );
}
