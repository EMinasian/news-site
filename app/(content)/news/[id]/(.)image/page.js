import { getAllNews } from "@/utils/news";
import Image from "next/image";
import ModalBackdrop from "@/components/ModalBackdrop";

export default async function NewsImagePage({ params }) {
  const news = await getAllNews();
  const item = news.find(({ slug }) => slug === params.id);

  return (
    <>
      <ModalBackdrop>
        <dialoge className="modal" open>
          <div className="image-container">
            <Image src={`/images/news/${item.image}`} fill />
          </div>
        </dialoge>
      </ModalBackdrop>
    </>
  );
}
