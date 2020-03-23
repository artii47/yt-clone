import React, { useEffect } from "react";
import * as Styled from "./related-videos.styles";
import VideoItem from "../video-item/video-item";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRelatedToVideosAsync,
  fetchRelatedToVideosStatsAsync
} from "../../reducers/videosReducer";
import { getVideoIds } from "../../helpers/getVideoIds";

const RelatedVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.relatedToVideos);
  const params = useParams();
  const videoIds = getVideoIds(videos);
  useEffect(() => {
    dispatch(fetchRelatedToVideosAsync(params.videoId));
    dispatch(fetchRelatedToVideosStatsAsync(videoIds));
  }, [params.videoId, videoIds]);
  return (
    <Styled.RelatedVideos>
      {videos.map(video => {
        return (
          <VideoItem
            id={video.id}
            title={video.snippet.title}
            imgUrl={video.snippet.thumbnails.medium.url}
            channelTitle={video.snippet.channelTitle}
            isRelated
          />
        );
      })}
    </Styled.RelatedVideos>
  );
};

export default RelatedVideos;
