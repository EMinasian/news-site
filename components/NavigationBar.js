import Link from "next/link";

export default function NavigationBar({ items }) {
  return (
    <nav>
      <ul>
        {items.map(({ title, link }) => (
          <Link href={`/archive/${link}`}>
            <h2>{title}</h2>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
