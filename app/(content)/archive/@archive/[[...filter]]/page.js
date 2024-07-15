import { getNewsForYear, getNewsForYearAndMonth } from "@/utils/news";
import NewsList from "@/components/NewsList";
import NavigationBar from "@/components/NavigationBar";
import { Suspense } from "react";

async function News({ year, month }) {
  const news = month
    ? await getNewsForYearAndMonth(year, month)
    : await getNewsForYear(year);

  return <NewsList news={news} />;
}

export default async function YearPage({ params }) {
  const [year, month] = params?.filter ? params?.filter : [];

  return (
    <>
      <header id="archive-header">
        <Suspense fallback={<p>Suspence for navigation bar...</p>}>
          <NavigationBar year={year} />
        </Suspense>
      </header>
      <Suspense fallback={<p>Suspence for news section...</p>}>
        <News year={year} month={month} />
      </Suspense>
    </>
  );
}
