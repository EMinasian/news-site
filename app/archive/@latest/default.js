import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/utils/news";

export default function LatestNews() {
  const news = getLatestNews();
  return <NewsList news={news} />;
}
