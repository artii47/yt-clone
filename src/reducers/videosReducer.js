import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { youtube } from "../api/youtube";

export const videos = createSlice({
  name: "videos",
  initialState: {
    videos: []
  },
  reducers: {
    fetchSearchVideos: (state, action) => {
      state.videos = action.payload;
    }
  }
});

export const { fetchSearchVideos } = videos.actions;

export const fetchSearchVideosAsync = searchTerm => async dispatch => {
  const response = await youtube.get(
    `/search?part=snippet&maxResults=20&q=${searchTerm}%20&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchSearchVideos(response.data.items));
};

export default videos.reducer;
