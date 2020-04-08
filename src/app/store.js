import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../reducers/videoReducer";
import commentsReducer from "../reducers/commentsReducer";
import channelsReducer from "../reducers/channelsReducer";
import popularVideosReducer from "../reducers/popularVideosReducer";
import relatedVideosReducer from "../reducers/relatedVideosReducer";
import searchVideosReducer from "../reducers/searchVideosReducer";

export default configureStore({
  reducer: {
    popularVideos: popularVideosReducer,
    relatedVideos: relatedVideosReducer,
    searchVideos: searchVideosReducer,
    video: videoReducer,
    comments: commentsReducer,
    channels: channelsReducer,
  },
});
