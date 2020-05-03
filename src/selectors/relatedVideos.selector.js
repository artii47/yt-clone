import { createSelector } from "@reduxjs/toolkit";

const getVideos = (state) => state.relatedVideos;

export const selectVideo = createSelector([getVideos], (data) => {
  return data.videos;
});

export const selectVideoItems = createSelector([getVideos], (data) => {
  // getting rid of duplicates
  if (data.videos.items) {
    return [...new Set(data.videos.items.map((video) => video.id))].map(
      (id) => {
        return data.videos.items.find((video) => video.id === id);
      }
    );
  }
});

export const selectIsLoading = createSelector(
  [getVideos],
  (data) => data.isLoading
);
