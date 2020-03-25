import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../reducers/videosReducer";
import videoReducer from "../reducers/videoReducer";
import commentsReducer from "../reducers/commentsReducer";
import channelsReducer from "../reducers/channelsReducer";

export default configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    comments: commentsReducer,
    channels: channelsReducer
  }
});
