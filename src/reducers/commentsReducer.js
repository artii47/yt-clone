import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";

export const comments = createSlice({
  name: "comments",
  initialState: {
    isLoading: false,
    currentVideoComments: null,
    hasError: null,
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
    resetComments: (state) => {
      state.currentVideoComments = null;
    },
    setErrorMessage: (state, action) => {
      state.hasError = action.payload;
    },
  },
});

const {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsNextPageStart,
  fetchCommentsNextPageSuccess,
  resetComments,
  setErrorMessage,
} = comments.actions;

export const fetchCommentsAsync = (videoId, sortBy) => async (dispatch) => {
  try {
    dispatch(fetchCommentsStart());
    const response = await youtube.get(
      `/commentThreads?part=snippet&order=${sortBy}&videoId=${videoId}&maxResults=6&key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(fetchCommentsSuccess(response.data));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err));
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
      `/commentThreads?part=snippet&order=${sortBy}&pageToken=${pageToken}&videoId=${videoId}&maxResults=6&key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(fetchCommentsNextPageSuccess(response.data));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err));
  }
};

export const resetCurrentComments = () => {
  return resetComments();
};

export default comments.reducer;
