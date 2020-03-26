import React, { useEffect } from "react";
import { fetchVideoAsync } from "../../reducers/videoReducer";
import { fetchCurrentVideoChannelAsync } from "../../reducers/channelsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Styled from "./video-details.styles";
import { numberWithCommas, numberConverter } from "../../helpers/numConverter";
import VideoDetailsDesc from "../video-details-desc/video-details-desc";

const VideoDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const url = `http://www.youtube.com/embed/${params.videoId}`;
  const video = useSelector(state => state.video.currentVideo);
  const channel = useSelector(state => state.channels.currentVideoChannel);
  useEffect(() => {
    dispatch(fetchVideoAsync(params.videoId));
    // if (video && !channel) {
    //   dispatch(fetchCurrentVideoChannelAsync(video.items[0].snippet.channelId));
    // }
  }, [params.videoId]);
  useEffect(() => {
    // if (!video) {
    // dispatch(fetchVideoAsync(params.videoId));
    // }
    if (video) {
      dispatch(fetchCurrentVideoChannelAsync(video.snippet.channelId));
    }
  }, [video]);
  if (!video) {
    return "";
  }
  return (
    <Styled.VideoDetails>
      <Styled.VideoDetailsIframe
        id="player"
        type="text/html"
        src={url}
        frameBorder="0"
        allowFullScreen
      />
      <Styled.VideoDetailsTitle>{video.snippet.title}</Styled.VideoDetailsTitle>
      <Styled.VideoDetailsFlexWrapper>
        <Styled.VideoDetailsPublishDate>
          {numberWithCommas(video.statistics.viewCount) + " views "}
          &bull; {video.snippet.publishedAt.slice(0, 10)}
        </Styled.VideoDetailsPublishDate>
        <Styled.VideoDetailsLikeBox>
          <Styled.VideoDetailsLikeDislikeBox>
            <Styled.VideoDetailsLike />
            {numberConverter(video.statistics.likeCount)}
          </Styled.VideoDetailsLikeDislikeBox>
          <Styled.VideoDetailsLikeDislikeBox>
            <Styled.VideoDetailsDislike />
            {numberConverter(video.statistics.dislikeCount)}
          </Styled.VideoDetailsLikeDislikeBox>
        </Styled.VideoDetailsLikeBox>
      </Styled.VideoDetailsFlexWrapper>
      {<VideoDetailsDesc videoDesc={video.snippet.description} />}
    </Styled.VideoDetails>
  );
};

export default VideoDetails;
