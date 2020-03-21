import React, { useEffect } from "react";
import * as Styled from "./videos-container.styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSearchVideosAsync,
  fetchPopularVideosAsync
} from "../../reducers/videosReducer";
import VideoItem from "../video-item/video-item";

const VideosContainer = () => {
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
        />
      );
    });
  };
  return (
    <Styled.VideosContainer isItemSearched={!!params.searchTerm}>
      {renderVideos()}
    </Styled.VideosContainer>
  );
};

export default VideosContainer;
