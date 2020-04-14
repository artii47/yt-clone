export const getVideoIds = (videos) => {
  let stringIds = "";
  videos.map((video) => {
    stringIds = `${stringIds} ${video.id.videoId} ,`;
    return null;
  });
  return stringIds;
};
