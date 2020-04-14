export const getChannelIds = (videos) => {
  let stringIds = "";
  videos.map((video) => {
    stringIds = `${stringIds}${video.snippet.channelId},`;
    return null;
  });
  return stringIds;
};
