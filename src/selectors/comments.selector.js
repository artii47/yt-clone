import { createSelector } from "@reduxjs/toolkit";

const getComments = (state) => state.comments;

export const selectComments = createSelector([getComments], (data) => data);

export const selectCommentsItems = createSelector(
  [getComments],
  (data) => data.currentVideoComments
);

export const selectIsLoading = createSelector(
  [getComments],
  (data) => data.isLoading
);
