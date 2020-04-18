import { createSelector } from "@reduxjs/toolkit";

const getVideos = (state) => state.searchVideos;

export const selectVideoItems = createSelector(
  [getVideos],
  (data) => data.videos
);

export const selectIsLoading = createSelector(
  [getVideos],
  (data) => data.isLoading
);

export const selectChannelItem = createSelector(
  [getVideos],
  (data) => data.channel
);
