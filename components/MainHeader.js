import Link from "next/link";

export default function MainHeader() {
  return (
    <div id="main-header">
      <Link href="/">Home</Link>
      <Link href="/news">News</Link>
    </div>
  );
}
