import { getAllNews } from "@/utils/news";
import Image from "next/image";

export default function NewsImagePage({ params }) {
  const news = getAllNews();
  const item = news.find(({ slug }) => slug === params.id);

  return (
    <>
      <h1>Intercepted</h1>
      <div className="image-container">
        <Image src={`/images/news/${item.image}`} fill />
      </div>
    </>
  );
}
