import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPopularVideosAsync,
  resetVideos,
  fetchPopularVideosNextPageAsync
} from "../../reducers/videosReducer";
import * as Styled from "./videos-popular-list.styles";
import VideoMainItem from "../video-main-item/video-main-item";
import useScrollEvent from "../../hooks/useScrollEvent";

const VideosPopularList = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.videos);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchPopularVideosAsync());
    return () => dispatch(resetVideos());
  }, [dispatch]);
  const renderVideos = () => {
    if (!videos.items) {
      return "";
    }
    return videos.items.map(video => {
      return (
        <>
          <VideoMainItem
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
    <Styled.VideosPopularList
      id="video-list"
      isItemSearched={!!params.searchTerm}
    >
      {renderVideos()}
      {/* <button
        onClick={() =>
          dispatch(fetchPopularVideosNextPageAsync(videos.nextPageToken))
        }
      >
        render more videos
      </button> */}
    </Styled.VideosPopularList>
  );
};

export default VideosPopularList;
