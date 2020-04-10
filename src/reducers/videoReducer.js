import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";

export const currentVideo = createSlice({
  name: "currentVideo",
  initialState: {
    currentVideo: null,
    hasError: null,
  },
  reducers: {
    fetchVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.hasError = action.payload;
    },
  },
});

const { fetchVideo, setErrorMessage } = currentVideo.actions;

export const fetchVideoAsync = (videoId) => async (dispatch) => {
  try {
    const response = await youtube.get(
      `/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(fetchVideo(response.data.items[0]));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err));
  }
};

export default currentVideo.reducer;
