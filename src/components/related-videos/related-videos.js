import React, { useEffect } from "react";
import * as Styled from "./related-videos.styles";
import VideoItem from "../video-item/video-item";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRelatedToVideosAsync } from "../../reducers/videosReducer";

const RelatedVideos = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    console.log("CHUJ KRUWA");
    dispatch(fetchRelatedToVideosAsync(params.videoId));
  }, [params.videoId]);
  const videos = useSelector(state => state.videos.relatedToVideos);
  console.log("videos", videos);
  return (
    <Styled.RelatedVideos>
      {videos.map(video => {
        return (
          <VideoItem
            id={video.id.videoId}
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
