import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";
import { getVideoIds } from "../helpers/getVideoIds";

export const relatedVideos = createSlice({
  name: "relatedVideos",
  initialState: {
    isLoading: false,
    videos: [],
  },
  reducers: {
    fetchRelatedToVideosNextPageStart: (state) => {
      state.isLoading = true;
    },
    fetchRelatedToVideosNextPageSuccess: (state, action) => {
      state.videos.nextPageToken = action.payload.nextPageToken;
      state.videos.items = [...state.videos.items, ...action.payload.items];
      state.isLoading = false;
    },
    fetchRelatedToVideos: (state, action) => {
      state.videos = action.payload;
    },
    resetVideos: (state) => {
      state.videos = [];
    },
  },
});

const {
  fetchRelatedToVideosNextPageStart,
  fetchRelatedToVideosNextPageSuccess,
  fetchRelatedToVideos,
  resetVideos,
} = relatedVideos.actions;

export const fetchRelatedToVideosAsync = (videoId) => async (dispatch) => {
  const response = await youtube.get(
    `/search?part=snippet&relatedToVideoId=${videoId}&maxResults=12&&type=video&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const videoIds = getVideoIds(response.data.items);
  const responseWithStats = await youtube.get(
    `/videos?part=snippet,statistics&id=${videoIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const result = {
    nextPageToken: response.data.nextPageToken,
    items: responseWithStats.data.items,
  };
  dispatch(fetchRelatedToVideos(result));
};

export const fetchRelatedToVideosNextPageAsync = (
  nextPageToken,
  videoId
) => async (dispatch) => {
  dispatch(fetchRelatedToVideosNextPageStart());
  const response = await youtube.get(
    `/search?part=snippet&pageToken=${nextPageToken}&relatedToVideoId=${videoId}&maxResults=12&&type=video&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const videoIds = getVideoIds(response.data.items);
  const responseWithStats = await youtube.get(
    `/videos?part=snippet,statistics&id=${videoIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const result = {
    nextPageToken: response.data.nextPageToken,
    items: responseWithStats.data.items,
  };
  dispatch(fetchRelatedToVideosNextPageSuccess(result));
};

export const resetCurrentVideos = () => {
  return resetVideos();
};

export default relatedVideos.reducer;
