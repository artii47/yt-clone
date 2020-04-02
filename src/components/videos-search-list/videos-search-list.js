import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSearchVideosAsync,
  resetVideos
} from "../../reducers/videosReducer";
import * as Styled from "./videos-search-list.styles";
import VideoSearchItem from "../video-search-item/video-search-item";

const VideosSearchList = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.videos);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchSearchVideosAsync(params.searchTerm));
    return () => dispatch(resetVideos());
  }, [params.searchTerm, dispatch]);
  const renderVideos = () => {
    if (!videos.items) {
      return "";
    }

    return videos.items.map(video => {
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
    });
  };
  return (
    <Styled.VideosSearchList id="video-list">
      {renderVideos()}
      {/* <button
        onClick={() =>
          dispatch(fetchPopularVideosNextPageAsync(videos.nextPageToken))
        }
      >
        render more videos
      </button> */}
    </Styled.VideosSearchList>
  );
};

export default VideosSearchList;
