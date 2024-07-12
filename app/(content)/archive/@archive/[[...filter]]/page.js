import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/utils/news";
import NewsList from "@/components/NewsList";
import NavigationBar from "@/components/NavigationBar";
import { getAvailableNewsYears } from "@/utils/news";

export default async function YearPage({ params }) {
  const [year, month] = params?.filter ? params?.filter : [];

  const newsYears = await getAvailableNewsYears();
  const newsMonths = await getAvailableNewsMonths(year);
  const news = month
    ? await getNewsForYearAndMonth(year, month)
    : await getNewsForYear(year);

  return (
    <>
      <header id="archive-header">
          <NavigationBar
            items={newsMonths.length !== 0 ? newsMonths : newsYears}
          />
      </header>
        {params?.filter && <NewsList news={news} />}
    </>
  );
}
