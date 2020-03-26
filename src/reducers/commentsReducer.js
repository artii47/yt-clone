import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";

export const comments = createSlice({
  name: "comments",
  initialState: {
    currentVideoComments: []
  },
  reducers: {
    fetchComments: (state, action) => {
      state.currentVideoComments = action.payload;
    }
  }
});

const { fetchComments } = comments.actions;

export const fetchCommentsAsync = videoId => async dispatch => {
  const response = await youtube.get(
    `/commentThreads?part=snippet&order=relevance&videoId=${videoId}&maxResults=1&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchComments(response.data.items));
};

export default comments.reducer;
