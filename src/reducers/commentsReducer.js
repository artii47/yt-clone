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
      const item = state.currentVideoComments.items[action.payload.index];
      item.snippet.replies = {
        items: action.payload.items.reverse(),
      };
      if (action.payload.nextPageToken) {
        item.snippet.replies.nextPageToken = action.payload.nextPageToken;
      }
      state.areRepliesLoading = false;
    },
    fetchCommentsRepliesNextPageStart: (state) => {
      state.areRepliesLoading = true;
    },
    fetchCommentsRepliesNextPageSuccess: (state, action) => {
      const item = state.currentVideoComments.items[action.payload.index];
      item.snippet.replies.nextPageToken = action.payload.nextPageToken;
      item.snippet.replies.items = [
        ...item.snippet.replies.items,
        ...action.payload.items,
      ];
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
  fetchCommentsRepliesNextPageStart,
  fetchCommentsRepliesNextPageSuccess,
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
  try {
    dispatch(fetchCommentsRepliesStart());
    const response = await youtube.get(
      `https://www.googleapis.com/youtube/v3/comments?part=snippet&maxResults=10&parentId=${commentId}&key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(fetchCommentsRepliesSuccess({ ...response.data, index }));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err.response));
  }
};

export const fetchCommentsRepliesNextPageAsync = (
  nextPageToken,
  commentId,
  index
) => async (dispatch) => {
  try {
    dispatch(fetchCommentsRepliesNextPageStart());
    const response = await youtube.get(
      `https://www.googleapis.com/youtube/v3/comments?part=snippet&pageToken=${nextPageToken}&maxResults=10&parentId=${commentId}&key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(fetchCommentsRepliesNextPageSuccess({ ...response.data, index }));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err.response));
  }
};

export const resetCurrentComments = () => {
  return resetComments();
};

export default comments.reducer;
