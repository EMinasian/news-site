"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <header id="main-header">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href="/news"
              className={pathname?.includes("news") ? "active" : ""}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/archive"
              className={pathname?.includes("archive") ? "active" : ""}
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
