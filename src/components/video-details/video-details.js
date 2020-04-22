import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVideoAsync } from "../../reducers/videoReducer";
import { fetchCurrentVideoChannelAsync } from "../../reducers/channelsReducer";
import * as Styled from "./video-details.styles";
import { numberWithCommas } from "../../helpers/numConverter";
import VideoDetailsDesc from "../video-details-desc/video-details-desc";
import { selectCurrentVideo } from "../../selectors/video.selector";
import VideoDetailsActionsWithRatings from "./video-details-actions-with-ratings";
import Spinner from "../spinner/spinner";

const VideoDetails = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const url = `https://www.youtube.com/embed/${params.videoId}`;
  const video = useSelector(selectCurrentVideo);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchVideoAsync(params.videoId));
  }, [params.videoId, dispatch]);
  useEffect(() => {
    if (video) {
      dispatch(fetchCurrentVideoChannelAsync(video.snippet.channelId));
      setIsIframeLoaded(false);
    }
  }, [video, dispatch]);
  if (!video) {
    return "";
  }

  return (
    <Styled.VideoDetails>
      <Styled.VideoDetailsIframeWrapper>
        <Styled.VideoDetailsIframe
          id="player"
          type="text/html"
          src={url}
          frameBorder="0"
          allowFullScreen
          isIframeLoaded={isIframeLoaded}
          onLoad={() => setIsIframeLoaded(true)}
        />
        {!isIframeLoaded ? <Spinner iframe /> : ""}
      </Styled.VideoDetailsIframeWrapper>
      <Styled.VideoDetailsTitle>{video.snippet.title}</Styled.VideoDetailsTitle>
      <Styled.VideoDetailsFlexWrapper>
        <Styled.VideoDetailsPublishDate>
          {`${numberWithCommas(video.statistics.viewCount)} views `}
          &bull;
          {` ${video.snippet.publishedAt.slice(0, 10)}`}
        </Styled.VideoDetailsPublishDate>
        <VideoDetailsActionsWithRatings video={video} />
      </Styled.VideoDetailsFlexWrapper>
      <VideoDetailsDesc videoDesc={video.snippet.description} />
    </Styled.VideoDetails>
  );
};

export default VideoDetails;
