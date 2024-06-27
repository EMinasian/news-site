import { getAvailableNewsYears } from "@/utils/news";
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <Link href={`/archive/${link}`}>
              <h2>{link}</h2>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
