import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";

export const comments = createSlice({
  name: "comments",
  initialState: {
    isLoading: false,
    currentVideoComments: null,
    hasError: null,
    areRepliesLoading: false,
  },
  reducers: {
    fetchCommentsStart: (state) => {
      state.isLoading = true;
    },
    fetchCommentsSuccess: (state, action) => {
      state.currentVideoComments = action.payload;
      state.isLoading = false;
    },
    fetchCommentsNextPageStart: (state) => {
      state.isLoading = true;
    },
    fetchCommentsNextPageSuccess: (state, action) => {
      state.currentVideoComments.nextPageToken = action.payload.nextPageToken;
      state.currentVideoComments.items = [
        ...state.currentVideoComments.items,
        ...action.payload.items,
      ];
      state.isLoading = false;
    },
    fetchCommentsRepliesStart: (state) => {
      state.areRepliesLoading = true;
    },
    fetchCommentsRepliesSuccess: (state, action) => {
      state.currentVideoComments.items[action.payload.index].snippet.replies =
        action.payload.items[0].replies.comments;
      state.areRepliesLoading = false;
    },
    resetComments: (state) => {
      state.currentVideoComments = null;
      state.hasError = null;
    },
    setErrorMessage: (state, action) => {
      state.hasError = action.payload;
      state.isLoading = false;
    },
  },
});

const {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsNextPageStart,
  fetchCommentsNextPageSuccess,
  fetchCommentsRepliesStart,
  fetchCommentsRepliesSuccess,
  resetComments,
  setErrorMessage,
} = comments.actions;

export const fetchCommentsAsync = (videoId, sortBy) => async (dispatch) => {
  try {
    dispatch(fetchCommentsStart());
    const response = await youtube.get(
      `/commentThreads?part=snippet&order=${sortBy}&videoId=${videoId}&maxResults=8&key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(fetchCommentsSuccess(response.data));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err.response));
  }
};

export const fetchCommentsNextPageAsync = (
  pageToken,
  videoId,
  sortBy
) => async (dispatch) => {
  try {
    dispatch(fetchCommentsNextPageStart());
    const response = await youtube.get(
      `/commentThreads?part=snippet&order=${sortBy}&pageToken=${pageToken}&videoId=${videoId}&maxResults=8&key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(fetchCommentsNextPageSuccess(response.data));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err.response));
  }
};

export const fetchCommentsRepliesAsync = (commentId, index) => async (
  dispatch
) => {
  dispatch(fetchCommentsRepliesStart());
  const response = await youtube.get(
    `https://www.googleapis.com/youtube/v3/commentThreads?part=replies&maxResults=20&id=${commentId}&key=${process.env.REACT_APP_API_KEY}`
  );
  dispatch(fetchCommentsRepliesSuccess({ ...response.data, index }));
};

export const resetCurrentComments = () => {
  return resetComments();
};

export default comments.reducer;
