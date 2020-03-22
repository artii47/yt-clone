import React, { useEffect } from "react";
import VideoItem from "../video-item/video-item";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPopularVideosAsync,
  fetchSearchVideosAsync
} from "../../reducers/videosReducer";
import * as Styled from "./video-list.styles";

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
  }, [params.searchTerm]);
  const renderVideos = () => {
    if (!videos) {
      return <div>LOADING</div>;
    }

    return videos.map(video => {
      return (
        <VideoItem
          isItemSearched={!!params.searchTerm}
          title={video.snippet.title}
          imgUrl={video.snippet.thumbnails.medium.url}
          channelTitle={video.snippet.channelTitle}
          id={video.id}
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
