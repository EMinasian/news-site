import HeaderLinks from "./HeaderLinks";

export default function MainHeader() {
  return (
    <header id="main-header">
      <nav>
        <ul>
          <li>
            <HeaderLinks href="/">Home</HeaderLinks>
          </li>
          <li>
            <HeaderLinks href="/news">News</HeaderLinks>
          </li>
          <li>
            <HeaderLinks href="/archive">Archive</HeaderLinks>
          </li>
        </ul>
      </nav>
    </header>
  );
}
