import Link from "next/link";
import Image from "next/image";

export default function NewsItem({ slug, title, image }) {
  return (
    <Link href={`/news/${slug}`}>
      <div className="image-container">
        <Image src={`/images/news/${image}`} fill />
      </div>

      <span>{title}</span>
    </Link>
  );
}
