import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";
import { getChannelIds } from "../helpers/getChannelIds";

export const popularVideos = createSlice({
  name: "popularVideos",
  initialState: {
    isLoading: false,
    videos: [],
  },
  reducers: {
    fetchPopularVideosStart: (state) => {
      state.isLoading = true;
    },
    fetchPopularVideosSuccess: (state, action) => {
      state.videos = action.payload;
      state.isLoading = false;
    },
    fetchPopularVideosNextPageStart: (state) => {
      state.isLoading = true;
    },
    fetchPopularVideosNextPageSuccess: (state, action) => {
      state.videos.nextPageToken = action.payload.nextPageToken;
      state.videos.items = [...state.videos.items, ...action.payload.items];
      state.isLoading = false;
    },
    resetVideos: (state) => {
      state.videos = [];
    },
  },
});

const {
  fetchPopularVideosStart,
  fetchPopularVideosSuccess,
  fetchPopularVideosNextPageStart,
  fetchPopularVideosNextPageSuccess,
  resetVideos,
} = popularVideos.actions;

export const fetchPopularVideosAsync = () => async (dispatch) => {
  dispatch(fetchPopularVideosStart());
  const response = await youtube.get(
    `/videos?part=snippet,statistics&chart=mostPopular&maxResults=12&key=${process.env.REACT_APP_API_KEY}`
  );
  const channelIds = getChannelIds(response.data.items);
  const reponseWithChannels = await youtube.get(
    `/channels?part=snippet&id=${channelIds}&key=${process.env.REACT_APP_API_KEY}`
  );

  const result = response.data.items.map((item) => {
    let channelImgUrl = "";
    for (let channelItem of reponseWithChannels.data.items) {
      if (channelItem.id === item.snippet.channelId) {
        channelImgUrl = channelItem.snippet.thumbnails.medium.url;
      }
    }
    return {
      ...item,
      channelImgUrl: channelImgUrl,
    };
  });
  const resultFinal = {
    nextPageToken: response.data.nextPageToken,
    items: result,
  };
  dispatch(fetchPopularVideosSuccess(resultFinal));
};

export const fetchPopularVideosNextPageAsync = (nextPageToken) => async (
  dispatch
) => {
  dispatch(fetchPopularVideosNextPageStart());
  const response = await youtube.get(
    `/videos?part=snippet,statistics&chart=mostPopular&maxResults=8&pageToken=${nextPageToken}&key=${process.env.REACT_APP_API_KEY}`
  );
  const channelIds = getChannelIds(response.data.items);
  const reponseWithChannels = await youtube.get(
    `/channels?part=snippet&id=${channelIds}&key=${process.env.REACT_APP_API_KEY}`
  );
  const result = response.data.items.map((item, index) => {
    let channelImgUrl = "";
    for (let channelItem of reponseWithChannels.data.items) {
      if (channelItem.id === item.snippet.channelId) {
        channelImgUrl = channelItem.snippet.thumbnails.medium.url;
      }
    }
    return {
      ...item,
      channelImgUrl: channelImgUrl,
    };
  });
  const resultFinal = {
    nextPageToken: response.data.nextPageToken,
    items: result,
  };
  dispatch(fetchPopularVideosNextPageSuccess(resultFinal));
};

export const resetCurrentVideos = () => {
  return resetVideos();
};

export default popularVideos.reducer;
