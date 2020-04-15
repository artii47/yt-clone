import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./video-details.styles";
import { numberConverter } from "../../helpers/numConverter";

const VideoDetailsActionsWithRatings = ({ video: { statistics } }) => {
  const ratingsSum =
    Number(statistics.likeCount) + Number(statistics.dislikeCount);
  const likePercentage = Math.floor((statistics.likeCount / ratingsSum) * 100);
  return (
    <Styled.VideoDetailsFlex>
      <Styled.VideoDetailsLikeBox likePercentage={likePercentage}>
        <Styled.VideoDetailsLikeDislikeBox>
          <Styled.VideoDetailsLike />
          {numberConverter(statistics.likeCount)}
        </Styled.VideoDetailsLikeDislikeBox>
        <Styled.VideoDetailsLikeDislikeBox>
          <Styled.VideoDetailsDislike />
          {numberConverter(statistics.dislikeCount)}
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

VideoDetailsActionsWithRatings.propTypes = {
  video: PropTypes.shape({
    statistics: PropTypes.shape({
      likeCount: PropTypes.string.isRequired,
      dislikeCount: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
