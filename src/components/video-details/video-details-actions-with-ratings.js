import React from "react";
import * as Styled from "./video-details.styles";
import { numberConverter } from "../../helpers/numConverter";

const VideoDetailsActionsWithRatings = ({ video }) => {
  const ratingsSum =
    Number(video.statistics.likeCount) + Number(video.statistics.dislikeCount);
  const likePercentage = Math.floor(
    (video.statistics.likeCount / ratingsSum) * 100
  );
  return (
    <Styled.VideoDetailsFlex>
      <Styled.VideoDetailsLikeBox likePercentage={likePercentage}>
        <Styled.VideoDetailsLikeDislikeBox>
          <Styled.VideoDetailsLike />
          {numberConverter(video.statistics.likeCount)}
        </Styled.VideoDetailsLikeDislikeBox>
        <Styled.VideoDetailsLikeDislikeBox>
          <Styled.VideoDetailsDislike />
          {numberConverter(video.statistics.dislikeCount)}
        </Styled.VideoDetailsLikeDislikeBox>
      </Styled.VideoDetailsLikeBox>
      <Styled.VideoDetailsActionBox>
        <Styled.VideoDetailsShare />
        SHARE
      </Styled.VideoDetailsActionBox>
      <Styled.VideoDetailsActionBox>
        <Styled.VideoDetailsSave />
        SAVE
      </Styled.VideoDetailsActionBox>
      <Styled.VideoDetailsActionBox>
        <Styled.VideoDetailsSettings />
      </Styled.VideoDetailsActionBox>
    </Styled.VideoDetailsFlex>
  );
};

export default VideoDetailsActionsWithRatings;
