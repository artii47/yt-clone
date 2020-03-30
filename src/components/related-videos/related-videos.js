import React, { useEffect } from "react";
import * as Styled from "./related-videos.styles";
import VideoItem from "../video-item/video-item";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRelatedToVideosAsync,
  resetCurrentRelatedVideos
} from "../../reducers/videosReducer";

const RelatedVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.relatedToVideos);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchRelatedToVideosAsync(params.videoId));
    return () => {
      dispatch(resetCurrentRelatedVideos());
    };
  }, [params.videoId, dispatch]);
  if (!videos) {
    return "";
  }
  return (
    <Styled.RelatedVideos>
      <Styled.RelatedVideosText>Related videos</Styled.RelatedVideosText>
      {videos.map(video => {
        return (
          <VideoItem
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
    </Styled.RelatedVideos>
  );
};

export default RelatedVideos;
