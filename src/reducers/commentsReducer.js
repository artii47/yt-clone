import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";

export const comments = createSlice({
  name: "comments",
  initialState: {
    isLoading: false,
    currentVideoComments: null
  },
  reducers: {
    fetchCommentsStart: state => {
      state.isLoading = true;
    },
    fetchCommentsSuccess: (state, action) => {
      state.currentVideoComments = action.payload;
      state.isLoading = false;
    },
    fetchCommentsNextPageStart: state => {
      state.isLoading = true;
    },
    fetchCommentsNextPageSuccess: (state, action) => {
      state.currentVideoComments.nextPageToken = action.payload.nextPageToken;
      state.currentVideoComments.items = [
        ...state.currentVideoComments.items,
        ...action.payload.items
      ];
      state.isLoading = false;
    },
    resetComments: state => {
      state.currentVideoComments = null;
    }
  }
});

const {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsNextPageStart,
  fetchCommentsNextPageSuccess,
  resetComments
} = comments.actions;

export const fetchCommentsAsync = (videoId, sortBy) => async dispatch => {
  dispatch(fetchCommentsStart());
  const response = await youtube.get(
    `/commentThreads?part=snippet&order=${sortBy}&videoId=${videoId}&maxResults=2&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchCommentsSuccess(response.data));
};

export const fetchCommentsNextPageAsync = (
  videoId,
  pageToken,
  sortBy
) => async dispatch => {
  dispatch(fetchCommentsNextPageStart());
  const response = await youtube.get(
    `/commentThreads?part=snippet&order=${sortBy}&pageToken=${pageToken}&videoId=${videoId}&maxResults=10&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchCommentsNextPageSuccess(response.data));
};

export const resetCurrentComments = () => {
  return resetComments();
};

export default comments.reducer;
