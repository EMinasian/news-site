import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItemById } from "@/utils/news";

export default async function NewsItemPage({ params }) {
  const newsItem = await getNewsItemById (params?.id);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <h2>News Item: {newsItem?.title}</h2>

      <Link href={`/news/${newsItem.slug}/image`}>
        <span>Click here for the image.</span>
      </Link>
    </>
  );
}
