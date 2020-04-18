import { createSelector } from "@reduxjs/toolkit";

const getVideo = (state) => state.video;

export const selectCurrentVideo = createSelector(
  [getVideo],
  (data) => data.currentVideo
);
