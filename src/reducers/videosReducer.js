import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const videos = createSlice({
  name: "videos",
  initialState: {
    videos: []
  },
  reducers: {
    fetchVideos: (state, action) => {
      state.videos.push({ title: action.payload });
    }
  }
});

console.log(videos.actions.fetchVideos());
export const { fetchVideos } = videos.actions;

export const fetchAsync = () => async dispatch => {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=25&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY"
  );
  dispatch(fetchVideos(response.data.items));
};

export default videos.reducer;
