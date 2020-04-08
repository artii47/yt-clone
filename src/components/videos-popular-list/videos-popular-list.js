import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularVideosAsync,
  resetCurrentVideos,
  fetchPopularVideosNextPageAsync,
} from "../../reducers/popularVideosReducer";
import * as Styled from "./videos-popular-list.styles";
import VideoPopularItem from "../video-popular-item/video-popular-item";
import useScrollEvent from "../../hooks/useScrollEvent";
import Spinner from "../spinner/spinner";

const VideosPopularList = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.popularVideos.videos);
  const isLoading = useSelector((state) => state.popularVideos.isLoading);
  useEffect(() => {
    dispatch(fetchPopularVideosAsync());
    return () => dispatch(resetCurrentVideos());
  }, [dispatch]);
  useScrollEvent(
    true,
    videos,
    "videos-popular-list",
    fetchPopularVideosNextPageAsync,
    videos.nextPageToken
  );
  const renderVideos = () => {
    if (!videos.items) {
      return "";
    }
    return videos.items.map((video) => {
      return (
        <>
          <VideoPopularItem
            title={video.snippet.title}
            imgUrl={video.snippet.thumbnails.medium.url}
            channelTitle={video.snippet.channelTitle}
            id={video.id}
            viewsCount={video.statistics ? video.statistics.viewCount : ""}
            publishDate={video.snippet.publishedAt}
            channelImgUrl={video.channelImgUrl}
          />
        </>
      );
    });
  };
  return (
    <Styled.VideosPopularListWrapper>
      <Styled.VideosPopularList id="videos-popular-list">
        {renderVideos()}
      </Styled.VideosPopularList>
      {isLoading ? <Spinner /> : ""}
    </Styled.VideosPopularListWrapper>
  );
};

export default VideosPopularList;
