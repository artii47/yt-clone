import { createSlice } from "@reduxjs/toolkit";
import { youtubeVideo } from "../api/youtube";

export const currentVideo = createSlice({
  name: "currentVideo",
  initialState: {
    currentVideo: null
  },
  reducers: {
    fetchVideo: (state, action) => {
      state.currentVideo = action.payload;
    }
  }
});

const { fetchVideo } = currentVideo.actions;

export const fetchVideoAsync = videoId => async dispatch => {
  const response = await youtubeVideo.get(
    `/videos?part=snippet&id=${videoId}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  console.log(response);
  dispatch(fetchVideo(response.data));
};

export default currentVideo.reducer;
