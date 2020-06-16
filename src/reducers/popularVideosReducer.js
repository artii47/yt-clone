import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";
import { getChannelIds } from "../helpers/getIds";

export const popularVideos = createSlice({
  name: "popularVideos",
  initialState: {
    isLoading: false,
    videos: [],
    hasError: null,
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
    setErrorMessage: (state, action) => {
      state.hasError = action.payload;
      state.isLoading = false;
    },
  },
});

const {
  fetchPopularVideosStart,
  fetchPopularVideosSuccess,
  fetchPopularVideosNextPageStart,
  fetchPopularVideosNextPageSuccess,
  resetVideos,
  setErrorMessage,
} = popularVideos.actions;

export const fetchPopularVideosAsync = () => async (dispatch) => {
  dispatch(fetchPopularVideosStart());
  let response;
  let responseWithChannels;
  try {
    response = await youtube.get(
      `/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=12&key=${process.env.REACT_APP_API_KEY}`
    );
    const channelIds = getChannelIds(response.data.items);
    responseWithChannels = await youtube.get(
      `/channels?part=snippet&id=${channelIds}&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = response.data.items.map((item) => {
      let channelImgUrl = "";
      responseWithChannels.data.items.map((channelItem) => {
        if (channelItem.id === item.snippet.channelId) {
          channelImgUrl = channelItem.snippet.thumbnails.medium.url;
        }
        return null;
      });
      return {
        ...item,
        channelImgUrl,
      };
    });
    const resultFinal = {
      nextPageToken: response.data.nextPageToken,
      items: result,
    };
    dispatch(fetchPopularVideosSuccess(resultFinal));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err.response));
  }
};

export const fetchPopularVideosNextPageAsync = (nextPageToken) => async (
  dispatch
) => {
  try {
    dispatch(fetchPopularVideosNextPageStart());
    const response = await youtube.get(
      `/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=12&pageToken=${nextPageToken}&key=${process.env.REACT_APP_API_KEY}`
    );
    const channelIds = getChannelIds(response.data.items);
    const responseWithChannels = await youtube.get(
      `/channels?part=snippet&id=${channelIds}&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = response.data.items.map((item) => {
      let channelImgUrl = "";
      responseWithChannels.data.items.map((channelItem) => {
        if (channelItem.id === item.snippet.channelId) {
          channelImgUrl = channelItem.snippet.thumbnails.medium.url;
        }
        return null;
      });
      return {
        ...item,
        channelImgUrl,
      };
    });
    const resultFinal = {
      nextPageToken: response.data.nextPageToken,
      items: result,
    };
    dispatch(fetchPopularVideosNextPageSuccess(resultFinal));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err.response));
  }
};

export const resetCurrentVideos = () => {
  return resetVideos();
};

export default popularVideos.reducer;
