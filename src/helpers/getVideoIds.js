export const getVideoIds = videos => {
  let stringIds = "";
  for (let video of videos) {
    stringIds = stringIds + video.id.videoId + ",";
  }
  return stringIds;
};
