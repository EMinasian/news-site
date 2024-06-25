import { DUMMY_NEWS } from "@/utils/dummy-news";
import { notFound } from "next/navigation";

export default function NewsItemPage({ params }) {

  const news = DUMMY_NEWS.find(item => item.slug === params?.id)

  if (!news) {
    notFound()
  }


  return <h2>News Item: {news?.title}</h2>;
}
