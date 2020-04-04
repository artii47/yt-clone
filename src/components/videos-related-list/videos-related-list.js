import React, { useEffect } from "react";
import * as Styled from "./vidoes-related-list.styles";
import VideoRelatedItem from "../video-related-item/video-related-item";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRelatedToVideosAsync,
  resetCurrentRelatedVideos,
  fetchRelatedToVideosNextPageAsync,
} from "../../reducers/videosReducer";
import useScrollEvent from "../../hooks/useScrollEvent";

const VideosRelatedList = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.relatedToVideos);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchRelatedToVideosAsync(params.videoId));
    return () => {
      dispatch(resetCurrentRelatedVideos());
    };
  }, [params.videoId, dispatch]);
  useScrollEvent(
    videos,
    "videos-realted",
    fetchRelatedToVideosNextPageAsync,
    params.videoId
  );
  if (!videos.items) {
    return "";
  }
  return (
    <Styled.VideosRelated id="videos-realted">
      <Styled.VideosRelatedText>Related videos</Styled.VideosRelatedText>
      {videos.items.map((video) => {
        return (
          <VideoRelatedItem
            isRelated
            id={video.id}
            title={video.snippet.title}
            imgUrl={video.snippet.thumbnails.medium.url}
            channelTitle={video.snippet.channelTitle}
            viewsCount={video.statistics.viewCount}
            publishDate={video.snippet.publishedAt}
          />
        );
      })}
    </Styled.VideosRelated>
  );
};

export default VideosRelatedList;
