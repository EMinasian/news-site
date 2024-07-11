import NewsList from "@/components/NewsList";
import { getAllNews } from "@/utils/news";

export default async function NewsPage() {
  const newsItems = await getAllNews()

  return (
    <>
      <h2>News Page</h2>
      <NewsList news={newsItems} />
    </>
  );
}
