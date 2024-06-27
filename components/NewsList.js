import NewsItem from "./NewsItem";

export default function NewsList({ news }) {
    return (
        <>
          <h2>News Page</h2>
          <ul className="news-list">
            {news.map((item) => (
              <li>
                <NewsItem slug={item.slug} title={item.title} image={item.image} />
              </li>
            ))}
          </ul>
        </>
      );
}