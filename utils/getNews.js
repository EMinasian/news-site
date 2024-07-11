export default async function getNews() {
  try {
    const newsResponse = await fetch("http://localhost:8080/news");
    const newsItems = await newsResponse.json();
    return newsItems;
  } catch (e) {
    console.log(e);
    return [];
  }
}
