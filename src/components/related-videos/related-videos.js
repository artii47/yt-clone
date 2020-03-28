import React, { useEffect } from "react";
import * as Styled from "./related-videos.styles";
import VideoItem from "../video-item/video-item";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRelatedToVideosAsync,
  resetRelatedVideosAsync
} from "../../reducers/videosReducer";

const RelatedVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.relatedToVideos);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchRelatedToVideosAsync(params.videoId));
    return () => {
      dispatch(resetRelatedVideosAsync());
    };
  }, [params.videoId, dispatch]);
  return (
    <Styled.RelatedVideos>
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
