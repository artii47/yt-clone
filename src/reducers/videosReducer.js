import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";
import { getVideoIds } from "../helpers/getVideoIds";
import { getChannelIds } from "../helpers/getChannelIds";

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
    },
    resetRelatedVideos: state => {
      state.relatedToVideos = [];
    },
    resetVideos: state => {
      state.videos = [];
    }
  }
});

export const {
  fetchSearchVideos,
  fetchRelatedToVideos,
  fetchRelatedToVideosStats,
  resetRelatedVideos,
  resetVideos
} = videos.actions;

export const fetchSearchVideosAsync = searchTerm => async dispatch => {
  const response = await youtube.get(
    `/search?part=snippet&maxResults=4&q=${searchTerm}%20&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const videoIds = getVideoIds(response.data.items);
  const responseWithStats = await youtube.get(
    `/videos?part=snippet,statistics&id=${videoIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchSearchVideos(responseWithStats.data.items));
};

export const fetchPopularVideosAsync = () => async dispatch => {
  const response = await youtube.get(
    `/videos?part=snippet,statistics&chart=mostPopular&maxResults=4&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const channelIds = getChannelIds(response.data.items);

  const reponseWithChannels = await youtube.get(
    `/channels?part=snippet&id=${channelIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const result = response.data.items.map((item, index) => {
    return {
      ...item,
      channelImgUrl:
        reponseWithChannels.data.items[index].snippet.thumbnails.medium.url
    };
  });
  dispatch(fetchSearchVideos(result));
};

export const fetchRelatedToVideosAsync = videoId => async dispatch => {
  const response = await youtube.get(
    `/search?part=snippet&relatedToVideoId=${videoId}&maxResults=4&&type=video&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const videoIds = getVideoIds(response.data.items);
  const responseWithStats = await youtube.get(
    `/videos?part=snippet,statistics&id=${videoIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  dispatch(fetchRelatedToVideos(responseWithStats.data.items));
};

export const resetCurrentRelatedVideos = () => {
  return resetRelatedVideos();
};

export const resetCurrentVideos = () => {
  return resetVideos();
};

export default videos.reducer;
