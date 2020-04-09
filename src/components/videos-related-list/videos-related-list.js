import React, { useEffect } from "react";
import * as Styled from "./vidoes-related-list.styles";
import VideoRelatedItem from "../video-related-item/video-related-item";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRelatedToVideosAsync,
  resetCurrentVideos,
  fetchRelatedToVideosNextPageAsync,
} from "../../reducers/relatedVideosReducer";
import useScrollEvent from "../../hooks/useScrollEvent";
import Spinner from "../spinner/spinner";
import CustomButton from "../custom-button/custom-button";

const VideosRelatedList = (props) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.relatedVideos.videos);
  const isLoading = useSelector((state) => state.relatedVideos.isLoading);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchRelatedToVideosAsync(params.videoId));
    return () => {
      dispatch(resetCurrentVideos());
    };
  }, [params.videoId, dispatch]);
  useScrollEvent(
    props.enableScrollEvent,
    videos,
    "videos-realted",
    fetchRelatedToVideosNextPageAsync,
    params.videoId
  );
  const renderButton = () => {
    return (
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
    );
  };
  const renderList = () => {
    if (videos.items) {
      return (
        <>
          <Styled.VideosRelatedText>Related videos</Styled.VideosRelatedText>
          {videos.items.map((video) => {
            return (
              <VideoRelatedItem
                isRelated
                key={video.id}
                id={video.id}
                title={video.snippet.title}
                imgUrl={video.snippet.thumbnails.medium.url}
                channelTitle={video.snippet.channelTitle}
                viewsCount={video.statistics.viewCount}
                publishDate={video.snippet.publishedAt}
              />
            );
          })}
        </>
      );
    }
  };
  return (
    <Styled.VideosRelated
      enableScrollEvent={props.enableScrollEvent}
      id="videos-realted"
    >
      {renderList()}
      {!props.enableScrollEvent ? renderButton() : ""}
      {isLoading ? <Spinner /> : ""}
    </Styled.VideosRelated>
  );
};

export default VideosRelatedList;
