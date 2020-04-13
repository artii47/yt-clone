import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";
import { getVideoIds } from "../helpers/getVideoIds";

export const relatedVideos = createSlice({
  name: "relatedVideos",
  initialState: {
    isLoading: false,
    videos: [],
    hasError: null,
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
    setErrorMessage: (state, action) => {
      state.hasError = action.payload;
      state.isLoading = false;
    },
  },
});

const {
  fetchRelatedToVideosNextPageStart,
  fetchRelatedToVideosNextPageSuccess,
  fetchRelatedToVideos,
  resetVideos,
  setErrorMessage,
} = relatedVideos.actions;

export const fetchRelatedToVideosAsync = (videoId) => async (dispatch) => {
  try {
    const response = await youtube.get(
      `/search?part=snippet&relatedToVideoId=${videoId}&maxResults=12&&type=video&key=${process.env.REACT_APP_API_KEY}`
    );
    const videoIds = getVideoIds(response.data.items);
    const responseWithStats = await youtube.get(
      `/videos?part=snippet,statistics&id=${videoIds}&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = {
      nextPageToken: response.data.nextPageToken,
      items: responseWithStats.data.items,
    };
    dispatch(fetchRelatedToVideos(result));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err));
  }
};

export const fetchRelatedToVideosNextPageAsync = (
  nextPageToken,
  videoId
) => async (dispatch) => {
  try {
    dispatch(fetchRelatedToVideosNextPageStart());
    const response = await youtube.get(
      `/search?part=snippet&pageToken=${nextPageToken}&relatedToVideoId=${videoId}&maxResults=12&&type=video&key=${process.env.REACT_APP_API_KEY}`
    );
    const videoIds = getVideoIds(response.data.items);
    const responseWithStats = await youtube.get(
      `/videos?part=snippet,statistics&id=${videoIds}&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = {
      nextPageToken: response.data.nextPageToken,
      items: responseWithStats.data.items,
    };
    dispatch(fetchRelatedToVideosNextPageSuccess(result));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err));
  }
};

export const resetCurrentVideos = () => {
  return resetVideos();
};

export default relatedVideos.reducer;
