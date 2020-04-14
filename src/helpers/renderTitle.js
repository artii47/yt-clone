export const renderTitle = (videoId, title) => {
  if (videoId) {
    if (title.length > 50) {
      return `${title.slice(0, 50)} ...`;
    }
    return title;
  }
  return title;
};
