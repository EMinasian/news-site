export default async function getNews() {
    const newsResponse = await fetch('http://localhost:8080/news')
    const newsItems = await newsResponse.json()
    return newsItems
}