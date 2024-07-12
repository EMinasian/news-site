export default async function getNews() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3 * 1000)); //for learning purposes
    const newsResponse = await fetch("http://localhost:8080/news");
    const newsItems = await newsResponse.json();
    return newsItems;
  } catch (e) {
    console.log(e);
    return [];
  }
}
