import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../reducers/videosReducer";
import videoReducer from "../reducers/videoReducer";

export default configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer
  }
});
