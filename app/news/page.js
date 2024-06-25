import NewsItem from "@/components/NewsItem";
import { DUMMY_NEWS } from "@/utils/dummy-news";

export default function NewsPage() {
  return (
    <>
      <h2>News Page</h2>
      <ul className="news-list">
        {DUMMY_NEWS.map((item) => (
          <li>
            <NewsItem slug={item.slug} title={item.title} image={item.image} />
          </li>
        ))}
      </ul>
    </>
  );
}
