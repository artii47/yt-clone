import { createSelector } from "@reduxjs/toolkit";

const getChannel = (state) => state.channels;
const getChannelFromSearchedVideos = (state) => state.searchVideos.channel;

export const selectChannelItem = createSelector(
  [getChannel],
  (data) => data.currentVideoChannel
);

export const selectChannelFromSearchedVideosStatistics = createSelector(
  [getChannelFromSearchedVideos],
  (data) => data.statistics
);
