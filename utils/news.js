import getNews from "./getNews";

export async function getAllNews() {
  const newsItems = await getNews()
  return newsItems;
}

export async function getNewsItemById(id) {
  const newsItems = await getNews()
  const newsItem = newsItems.find((item) => item.slug === id);
  return newsItem
}

export async function getLatestNews() {
  const newsItems = await getNews()
  return newsItems.slice(0, 3);
}

export async function getAvailableNewsYears() {
  const newsItems = await getNews()
  return newsItems.reduce((years, news) => {
    const currentYear = new Date(news.date).getFullYear();

    const includesYear = years.some((year) => year?.title === currentYear);

    if (!includesYear) {
      years.push({
        title: currentYear,
        link: currentYear,
      });
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export async function getAvailableNewsMonths(year) {
  const newsItems = await getNews()
  return newsItems.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    
    if (newsYear === +year) {
      const currentMonth = new Date(news.date).getMonth();
      const includesMonth = months.some((month) => month?.title === currentMonth);
      if (!includesMonth) {
        months.push({
          title: currentMonth + 1,
          link: `${year}/${currentMonth + 1}`
        });
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export async function getNewsForYear(year) {
  const newsItems = await getNews()
  return newsItems.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export async function getNewsForYearAndMonth(year, month) {
  const newsItems = await getNews()
  return newsItems.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
