export const dateConverter = (date) => {
  const theDate = date;
  const month = parseInt(theDate.substring(5, 7)) - 1;
  const day = theDate.substring(8, 10);
  const year = theDate.substring(0, 4);
  const hour = theDate.substring(11, 13);
  const minute = theDate.substring(14, 16);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const elementsDate = new Date(year, month, day, hour, minute);
  const nowDate = new Date(
    currentYear,
    currentMonth,
    currentDay,
    currentHour,
    currentMinute
  );
  const minutesSincePost =
    Math.floor((nowDate - elementsDate) / (1000 * 60)) + 420;
  const minutesInHour = 60;
  const minutesInDay = minutesInHour * 24;
  const lessThanYear = Math.trunc(minutesSincePost / (minutesInDay * 365));
  const lessThanMonth = Math.trunc(minutesSincePost / (minutesInDay * 30));
  const lessThanDay = Math.trunc(minutesSincePost / minutesInDay);
  const lessThanHour = Math.trunc(minutesSincePost / minutesInHour);
  if (lessThanYear > 1) {
    return `${lessThanYear} years ago`;
  }
  if (lessThanYear === 1) {
    return "1 year ago";
  }
  if (lessThanMonth > 1) {
    return `${lessThanMonth} months ago`;
  }
  if (lessThanMonth === 1) {
    return "1 month ago";
  }
  if (lessThanDay > 23) {
    return "4 weeks ago";
  }
  if (lessThanDay > 17) {
    return "3 weeks ago";
  }
  if (lessThanDay > 10) {
    return "2 weeks ago";
  }
  if (lessThanDay > 6) {
    return "1 week ago";
  }
  if (lessThanDay > 1) {
    return `${lessThanDay} days ago`;
  }
  if (lessThanDay === 1) {
    return "1 day ago";
  }
  if (lessThanHour > 1) {
    return `${lessThanHour} hours ago`;
  }
  if (lessThanHour === 1) {
    return "1 hours ago";
  }
  if (minutesSincePost > 1) {
    return `${minutesSincePost} minutes ago`;
  }
  if (minutesSincePost === 1) {
    return "1 minute ago";
  }
  return "Less than a minute ago";
};
