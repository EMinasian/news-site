import { DUMMY_NEWS } from "./dummy-news";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, news) => {
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

export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
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

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
