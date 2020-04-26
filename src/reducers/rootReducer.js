import { combineReducers } from "@reduxjs/toolkit";
import videoReducer from "./videoReducer";
import commentsReducer from "./commentsReducer";
import channelsReducer from "./channelsReducer";
import popularVideosReducer from "./popularVideosReducer";
import relatedVideosReducer from "./relatedVideosReducer";
import searchVideosReducer from "./searchVideosReducer";

export default combineReducers({
  popularVideos: popularVideosReducer,
  relatedVideos: relatedVideosReducer,
  searchVideos: searchVideosReducer,
  video: videoReducer,
  comments: commentsReducer,
  channels: channelsReducer,
});
