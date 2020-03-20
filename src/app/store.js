import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../reducers/videosReducer";

export default configureStore({
  reducer: {
    videos: videosReducer
  }
});
