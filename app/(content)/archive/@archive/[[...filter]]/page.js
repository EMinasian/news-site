import { getNewsForYear, getNewsForYearAndMonth } from "@/utils/news";
import NewsList from "@/components/NewsList";
import NavigationBar from "@/components/NavigationBar";
import { Suspense } from "react";

export default async function YearPage({ params }) {
  const [year, month] = params?.filter ? params?.filter : [];

  const news = month
    ? await getNewsForYearAndMonth(year, month)
    : await getNewsForYear(year);

  return (
    <>
      <header id="archive-header">
        <Suspense fallback={<p>Suspence for navigation bar...</p>}>
          <NavigationBar year={year} />
        </Suspense>
      </header>
      {params?.filter && <NewsList news={news} />}
    </>
  );
}
