import { createSelector } from "@reduxjs/toolkit";

const getVideos = (state) => state.relatedVideos;

export const selectVideoItems = createSelector(
  [getVideos],
  (data) => data.videos
);

export const selectIsLoading = createSelector(
  [getVideos],
  (data) => data.isLoading
);
