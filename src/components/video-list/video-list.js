import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPopularVideosAsync,
  fetchSearchVideosAsync,
  resetVideos
} from "../../reducers/videosReducer";
import * as Styled from "./video-list.styles";
import VideoSearchItem from "../video-search-item/video-search-item";
import VideoMainItem from "../video-main-item/video-main-item";

const VideoList = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.videos);
  const params = useParams();
  useEffect(() => {
    if (params.searchTerm) {
      dispatch(fetchSearchVideosAsync(params.searchTerm));
      return;
    }
    dispatch(fetchPopularVideosAsync());
    return () => dispatch(resetVideos());
  }, [params.searchTerm, dispatch]);
  const renderVideos = () => {
    if (!videos) {
      return "";
    }
    return videos.map(video => {
      if (params.searchTerm) {
        return (
          <VideoSearchItem
            title={video.snippet.title}
            imgUrl={video.snippet.thumbnails.medium.url}
            channelTitle={video.snippet.channelTitle}
            id={video.id}
            viewsCount={video.statistics ? video.statistics.viewCount : ""}
            publishDate={video.snippet.publishedAt}
            description={video.snippet.description}
          />
        );
      }
      return (
        <VideoMainItem
          title={video.snippet.title}
          imgUrl={video.snippet.thumbnails.medium.url}
          channelTitle={video.snippet.channelTitle}
          id={video.id}
          viewsCount={video.statistics ? video.statistics.viewCount : ""}
          publishDate={video.snippet.publishedAt}
          channelImgUrl={video.channelImgUrl}
        />
      );
    });
  };
  return (
    <Styled.VideoList isItemSearched={!!params.searchTerm}>
      {renderVideos()}
    </Styled.VideoList>
  );
};

export default VideoList;
