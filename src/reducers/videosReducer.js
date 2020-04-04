import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";
import { getVideoIds } from "../helpers/getVideoIds";
import { getChannelIds } from "../helpers/getChannelIds";

export const videos = createSlice({
  name: "videos",
  initialState: {
    isLoading: false,
    videos: [],
    relatedToVideos: [],
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
    fetchRelatedToVideosNextPageStart: (state) => {
      state.isLoading = true;
    },
    fetchRelatedToVideosNextPageSuccess: (state, action) => {
      state.relatedToVideos.nextPageToken = action.payload.nextPageToken;
      state.relatedToVideos.items = [
        ...state.relatedToVideos.items,
        ...action.payload.items,
      ];
      state.isLoading = false;
    },
    fetchRelatedToVideos: (state, action) => {
      state.relatedToVideos = action.payload;
    },
    resetRelatedVideos: (state) => {
      state.relatedToVideos = [];
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
  fetchRelatedToVideos,
  fetchRelatedToVideosStats,
  fetchRelatedToVideosNextPageStart,
  fetchRelatedToVideosNextPageSuccess,
  resetRelatedVideos,
  resetVideos,
  fetchPopularVideosSuccess,
  fetchPopularVideosStart,
  fetchPopularVideosNextPageStart,
  fetchPopularVideosNextPageSuccess,
} = videos.actions;

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

export const fetchPopularVideosAsync = () => async (dispatch) => {
  dispatch(fetchPopularVideosStart());
  const response = await youtube.get(
    `/videos?part=snippet,statistics&chart=mostPopular&maxResults=12&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const channelIds = getChannelIds(response.data.items);
  const reponseWithChannels = await youtube.get(
    `/channels?part=snippet&id=${channelIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
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
    `/videos?part=snippet,statistics&chart=mostPopular&maxResults=8&pageToken=${nextPageToken}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
  );
  const channelIds = getChannelIds(response.data.items);
  const reponseWithChannels = await youtube.get(
    `/channels?part=snippet&id=${channelIds}&key=AIzaSyAP9SSWUPchFl90rFMhUupkYYGmxwJqwtY`
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

export const resetCurrentRelatedVideos = () => {
  return resetRelatedVideos();
};

export const resetCurrentVideos = () => {
  return resetVideos();
};

export default videos.reducer;
