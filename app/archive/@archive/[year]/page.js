import { getNewsForYear } from "@/utils/news";
import NewsList from "@/components/NewsList";

export default function YearPage({ params }) {
  const news = getNewsForYear(params?.year);
  return (
    <>
      <h2>Year {params?.year}</h2>
      <NewsList news={news} />
    </>
  );
}
