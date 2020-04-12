import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";
import { getVideoIds } from "../helpers/getVideoIds";

export const searchVideos = createSlice({
  name: "searchVideos",
  initialState: {
    isLoading: false,
    videos: [],
    hasError: null,
    channel: null,
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
    setErrorMessage: (state, action) => {
      state.hasError = action.payload;
    },
    setChannel: (state, action) => {
      state.channel = action.payload;
    },
    resetChannel: (state) => {
      state.channel = null;
    },
  },
});

export const {
  fetchSearchVideos,
  fetchSearchVideosNextPageStart,
  fetchSearchVideosNextPageSuccess,
  resetVideos,
  setErrorMessage,
  setChannel,
  resetChannel,
} = searchVideos.actions;

export const fetchSearchVideosAsync = (searchTerm) => async (dispatch) => {
  try {
    const response = await youtube.get(
      `/search?part=snippet&maxResults=8&q=${searchTerm}%20&key=${process.env.REACT_APP_API_KEY}`
    );
    const videoIds = getVideoIds(response.data.items);
    const responseWithStats = await youtube.get(
      `/videos?part=snippet,statistics&id=${videoIds}&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = {
      nextPageToken: response.data.nextPageToken,
      items: responseWithStats.data.items,
    };
    for (let item of response.data.items) {
      if (item.id.kind === "youtube#channel") {
        dispatch(setChannel(item));
      }
    }
    dispatch(fetchSearchVideos(result));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err));
  }
};

export const fetchSearchVideosNextPageAsync = (
  nextPageToken,
  searchTerm
) => async (dispatch) => {
  try {
    dispatch(fetchSearchVideosNextPageStart());
    const response = await youtube.get(
      `/search?part=snippet&pageToken=${nextPageToken}&maxResults=8&q=${searchTerm}%20&key=${process.env.REACT_APP_API_KEY}`
    );
    const videoIds = getVideoIds(response.data.items);
    const responseWithStats = await youtube.get(
      `/videos?part=snippet,statistics&id=${videoIds}&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = {
      nextPageToken: response.data.nextPageToken,
      items: responseWithStats.data.items,
    };
    dispatch(fetchSearchVideosNextPageSuccess(result));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err));
  }
};

export const resetCurrentVideos = () => {
  return resetVideos();
};

export const resetCurrentChannel = () => {
  return resetChannel();
};

export default searchVideos.reducer;
