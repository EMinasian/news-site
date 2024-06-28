import { getNewsForYear } from "@/utils/news";
import NewsList from "@/components/NewsList";
import { getAvailableNewsYears } from "@/utils/news";
import Link from "next/link";

export default function YearPage({ params }) {
  const year = params?.filter?.[0];
  const news = getNewsForYear(year);
  const links = getAvailableNewsYears();
  return (
    <>
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
      {params?.filter && (
        <div>
          <h2>Year {year}</h2>
          <NewsList news={news} />
        </div>
      )}
    </>
  );
}
