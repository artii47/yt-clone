import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSearchVideosAsync,
  resetCurrentVideos,
  fetchSearchVideosNextPageAsync,
} from "../../reducers/searchVideosReducer";
import * as Styled from "./videos-search-list.styles";
import VideoSearchItem from "../video-search-item/video-search-item";
import useScrollEvent from "../../hooks/useScrollEvent";
import Spinner from "../spinner/spinner";

const VideosSearchList = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.searchVideos.videos);
  const isLoading = useSelector((state) => state.searchVideos.isLoading);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSearchVideosAsync(params.searchTerm));
    return () => dispatch(resetCurrentVideos());
  }, [params.searchTerm, dispatch]);
  useScrollEvent(
    true,
    videos,
    "video-list",
    fetchSearchVideosNextPageAsync,
    params.searchTerm
  );
  const renderVideos = () => {
    if (!videos.items) {
      return <Spinner />;
    }

    return videos.items.map((video) => {
      return (
        <VideoSearchItem
          key={video.id}
          title={video.snippet.title}
          imgUrl={video.snippet.thumbnails.medium.url}
          channelTitle={video.snippet.channelTitle}
          id={video.id}
          viewsCount={video.statistics ? video.statistics.viewCount : ""}
          publishDate={video.snippet.publishedAt}
          description={video.snippet.description}
        />
      );
    });
  };
  return (
    <>
      <Styled.VideosSearchList id="video-list">
        <Styled.Container>
          {renderVideos()}
          {isLoading ? <Spinner /> : ""}
        </Styled.Container>
      </Styled.VideosSearchList>
    </>
  );
};

export default VideosSearchList;
