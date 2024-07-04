import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/utils/news";
import NewsList from "@/components/NewsList";
import NavigationBar from "@/components/NavigationBar";
import { getAvailableNewsYears } from "@/utils/news";

export default function YearPage({ params }) {
  console.log("params, params", params);
  const [year, month] = params?.filter ? params?.filter : [];

  const newsYears = getAvailableNewsYears();
  const newsMonths = getAvailableNewsMonths(year);
  const news = month
    ? getNewsForYearAndMonth(year, month)
    : getNewsForYear(year);

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
