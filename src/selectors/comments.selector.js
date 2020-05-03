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

export const selectAreRepliesLoading = createSelector(
  [getComments],
  (data) => data.areRepliesLoading
);

export const selectCommentItem = (index) =>
  createSelector(
    [getComments],
    (data) => data.currentVideoComments.items[index]
  );

export const selectAreMoreRepliesLoading = (index) =>
  createSelector(
    [getComments],
    (data) =>
      data.currentVideoComments.items[index]?.snippet?.replies?.isLoading
  );
