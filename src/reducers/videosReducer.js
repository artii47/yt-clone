import { createSlice } from "@reduxjs/toolkit";
import { youtubeVideos } from "../api/youtube";

export const videos = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    relatedToVideos: []
  },
  reducers: {
    fetchSearchVideos: (state, action) => {
      state.videos = action.payload;
    },
    fetchPopularVideos: (state, action) => {
      state.videos = action.payload;
    },
    fetchRelatedToVideos: (state, action) => {
      state.relatedToVideos = action.payload;
    }
  }
});

export const { fetchSearchVideos, fetchRelatedToVideos } = videos.actions;

export const fetchSearchVideosAsync = searchTerm => async dispatch => {
  const response = await youtubeVideos.get(
    `/search?part=snippet&maxResults=20&q=${searchTerm}%20&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchSearchVideos(response.data.items));
};

export const fetchPopularVideosAsync = () => async dispatch => {
  const response = await youtubeVideos.get(
    `/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchSearchVideos(response.data.items));
};

export const fetchRelatedToVideosAsync = videoId => async dispatch => {
  const response = await youtubeVideos.get(
    `/search?part=snippet&relatedToVideoId=${videoId}&maxResults=20&&type=video&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchRelatedToVideos(response.data.items));
};

export default videos.reducer;
