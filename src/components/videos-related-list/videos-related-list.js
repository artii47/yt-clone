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
import Spinner from "../spinner/spinner";
import CustomButton from "../custom-button/custom-button";

const VideosRelatedList = (props) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.relatedToVideos);
  const isLoading = useSelector((state) => state.videos.isLoading);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchRelatedToVideosAsync(params.videoId));
    return () => {
      dispatch(resetCurrentRelatedVideos());
    };
  }, [params.videoId, dispatch]);
  useScrollEvent(
    props.enableScrollEvent,
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
      {!props.enableScrollEvent ? (
        <CustomButton
          onClick={() =>
            dispatch(
              fetchRelatedToVideosNextPageAsync(
                videos.nextPageToken,
                params.videoId
              )
            )
          }
          wideButton
        >
          SHOW MORE VIDEOS
        </CustomButton>
      ) : (
        ""
      )}

      {isLoading ? <Spinner /> : ""}
    </Styled.VideosRelated>
  );
};

export default VideosRelatedList;
