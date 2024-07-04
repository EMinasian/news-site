import { DUMMY_NEWS } from "@/utils/dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function NewsItemPage({ params }) {
  const news = DUMMY_NEWS.find((item) => item.slug === params?.id);

  if (!news) {
    notFound();
  }

  return (
    <>
      <h2>News Item: {news?.title}</h2>

      <Link href={`/news/${news.slug}/image`}>
        <span>Click here for the image.</span>
      </Link>
    </>
  );
}
