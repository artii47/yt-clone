import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";
import { getVideoIds } from "../helpers/getVideoIds";

export const searchVideos = createSlice({
  name: "searchVideos",
  initialState: {
    isLoading: false,
    videos: [],
  },
  reducers: {
    fetchSearchVideos: (state, action) => {
      state.videos = action.payload;
    },
    fetchSearchVideosNextPageStart: (state) => {
      state.isLoading = true;
    },
    fetchSearchVideosNextPageSuccess: (state, action) => {
      state.videos.nextPageToken = action.payload.nextPageToken;
      state.videos.items = [...state.videos.items, ...action.payload.items];
      state.isLoading = false;
    },
    resetVideos: (state) => {
      state.videos = [];
    },
  },
});

export const {
  fetchSearchVideos,
  fetchSearchVideosNextPageStart,
  fetchSearchVideosNextPageSuccess,
  resetVideos,
} = searchVideos.actions;

export const fetchSearchVideosAsync = (searchTerm) => async (dispatch) => {
  const response = await youtube.get(
    `/search?part=snippet&maxResults=8&q=${searchTerm}%20&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const videoIds = getVideoIds(response.data.items);
  const responseWithStats = await youtube.get(
    `/videos?part=snippet,statistics&id=${videoIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const result = {
    nextPageToken: response.data.nextPageToken,
    items: responseWithStats.data.items,
  };
  dispatch(fetchSearchVideos(result));
};

export const fetchSearchVideosNextPageAsync = (
  nextPageToken,
  searchTerm
) => async (dispatch) => {
  dispatch(fetchSearchVideosNextPageStart());
  const response = await youtube.get(
    `/search?part=snippet&pageToken=${nextPageToken}&maxResults=8&q=${searchTerm}%20&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const videoIds = getVideoIds(response.data.items);
  const responseWithStats = await youtube.get(
    `/videos?part=snippet,statistics&id=${videoIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const result = {
    nextPageToken: response.data.nextPageToken,
    items: responseWithStats.data.items,
  };
  dispatch(fetchSearchVideosNextPageSuccess(result));
};

export const resetCurrentVideos = () => {
  return resetVideos();
};

export default searchVideos.reducer;
