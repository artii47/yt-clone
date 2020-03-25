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
    // if (!video) {
    dispatch(fetchVideoAsync(params.videoId));
    // }
    // if (video && !channel) {
    //   dispatch(fetchCurrentVideoChannelAsync(video.items[0].snippet.channelId));
    // }
  }, [params.videoId]);
  return (
    <Styled.VideoDetails>
      <Styled.VideoDetailsIframe
        id="player"
        type="text/html"
        src={url}
        frameBorder="0"
      />
      <Styled.VideoDetailsTitle>
        {video ? video.items[0].snippet.title : ""}
      </Styled.VideoDetailsTitle>
      <Styled.VideoDetailsFlexWrapper>
        <Styled.VideoDetailsPublishDate>
          {video
            ? numberWithCommas(video.items[0].statistics.viewCount) + " views "
            : ""}
          &bull; {video ? video.items[0].snippet.publishedAt.slice(0, 10) : ""}
        </Styled.VideoDetailsPublishDate>
        <Styled.VideoDetailsLikeBox>
          <Styled.VideoDetailsLikeDislikeBox>
            <Styled.VideoDetailsLike />
            {video ? numberConverter(video.items[0].statistics.likeCount) : ""}
          </Styled.VideoDetailsLikeDislikeBox>
          <Styled.VideoDetailsLikeDislikeBox>
            <Styled.VideoDetailsDislike />
            {video
              ? numberConverter(video.items[0].statistics.dislikeCount)
              : ""}
          </Styled.VideoDetailsLikeDislikeBox>
        </Styled.VideoDetailsLikeBox>
      </Styled.VideoDetailsFlexWrapper>
      {channel && video ? (
        <VideoDetailsDesc
          videoDesc={video.items[0].snippet.description}
          channel={channel}
        />
      ) : (
        ""
      )}
    </Styled.VideoDetails>
  );
};

export default VideoDetails;
