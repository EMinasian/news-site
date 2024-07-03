import { getAllNews } from "@/utils/news";
import Image from "next/image";

export default function NewsImagePage({ params }) {
  const news = getAllNews();
  const item = news.find(({ slug }) => slug === params.id);

  return (
    <>
      <div className="modal-backdrop">
        <dialoge className="modal" open>
          <div className="image-container">
            <Image src={`/images/news/${item.image}`} fill />
          </div>
        </dialoge>
      </div>
    </>
  );
}
