import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/utils/news";

export default async function LatestNews() {
  const news = await getLatestNews();
  return <NewsList news={news} />;
}
