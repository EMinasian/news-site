import Link from "next/link";
import { getAvailableNewsMonths, getAvailableNewsYears } from "@/utils/news";

export default async function NavigationBar({ year }) {
  const newsYears = await getAvailableNewsYears();
  const newsMonths = await getAvailableNewsMonths(year);

  const items = newsMonths?.length !== 0 ? newsMonths : newsYears;

  return (
    <nav>
      <ul>
        {items?.map(({ title, link }) => (
          <Link href={`/archive/${link}`}>
            <h2>{title}</h2>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
