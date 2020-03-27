import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";
import { getVideoIds } from "../helpers/getVideoIds";

export const videos = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    relatedToVideos: [],
    relatedToVideosUpdated: []
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
    },
    fetchRelatedToVideosStats: (state, action) => {
      state.relatedToVideosUpdated = action.payload;
    }
  }
});

export const {
  fetchSearchVideos,
  fetchRelatedToVideos,
  fetchRelatedToVideosStats
} = videos.actions;

export const fetchSearchVideosAsync = searchTerm => async dispatch => {
  const response = await youtube.get(
    `/search?part=snippet&maxResults=2&q=${searchTerm}%20&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const videoIds = getVideoIds(response.data.items);
  const responseWithStats = await youtube.get(
    `/videos?part=snippet,statistics&id=${videoIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchSearchVideos(responseWithStats.data.items));
};

export const fetchPopularVideosAsync = () => async dispatch => {
  const response = await youtube.get(
    `/videos?part=snippet,statistics&chart=mostPopular&maxResults=5&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchSearchVideos(response.data.items));
};

export const fetchRelatedToVideosAsync = videoId => async dispatch => {
  const response = await youtube.get(
    `/search?part=snippet&relatedToVideoId=${videoId}&maxResults=20&&type=video&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchRelatedToVideos(response.data.items));
};

export const fetchRelatedToVideosStatsAsync = videoIds => async dispatch => {
  const response = await youtube.get(
    `/videos?part=snippet,statistics&id=${videoIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchRelatedToVideosStats(response.data.items));
};

export default videos.reducer;
