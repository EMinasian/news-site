import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/utils/news";
import NewsList from "@/components/NewsList";
import NavigationBar from "@/components/NavigationBar";
import { getAvailableNewsYears } from "@/utils/news";

export default function YearPage({ params }) {
  const [year, month] = params?.filter;

  const newsYears = getAvailableNewsYears();
  const newsMonths = getAvailableNewsMonths(year);
  const news = month
    ? getNewsForYearAndMonth(year, month)
    : getNewsForYear(year);

  return (
    <>
      <header id="archive-header">
        <NavigationBar items={newsMonths ? newsMonths : newsYears} />
      </header>
      {params?.filter && <NewsList news={news} />}
    </>
  );
}
