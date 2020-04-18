import { createSelector } from "@reduxjs/toolkit";

const getChannel = (state) => state.channels;

export const selectChannelItem = createSelector(
  [getChannel],
  (data) => data.currentVideoChannel
);
