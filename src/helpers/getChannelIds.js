export const getChannelIds = videos => {
  let stringIds = "";
  for (let video of videos) {
    stringIds = stringIds + video.snippet.channelId + ",";
  }
  return stringIds;
};
