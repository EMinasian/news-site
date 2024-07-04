"use client";

import { getAllNews } from "@/utils/news";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NewsImagePage({ params }) {
  const news = getAllNews();
  const item = news.find(({ slug }) => slug === params.id);
  const router = useRouter();

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={() => {
          router.back();
        }}
      >
        <dialoge className="modal" open>
          <div className="image-container">
            <Image src={`/images/news/${item.image}`} fill />
          </div>
        </dialoge>
      </div>
    </>
  );
}
