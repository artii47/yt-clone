import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import * as Styled from "./video-details-desc.styles";
import { numberConverter } from "../../helpers/numConverter";
import { renderVideoDetailsDescContent } from "./helpers/renderVideoDetailsDescription";
import { renderButton } from "./helpers/renderButton";
import { selectChannelItem } from "../../selectors/channel.selector";
import CustomButton from "../buttons/custom-button/custom-button";

const VideoDetailsDesc = ({ videoDesc }) => {
  const [showMore, setShowMore] = useState(false);
  const channel = useSelector(selectChannelItem);
  if (!channel) {
    return "";
  }

  return (
    <Styled.VideoDetailsDesc>
      <Styled.VideoDetailsDescChannelBox>
        <Styled.VideoDetailsDescChannelImg
          referrerPolicy="no-referrer"
          src={channel.snippet.thumbnails.medium.url}
        />
        <Styled.VideoDetailsDescFlexWrapper>
          <Styled.VideoDetailsDescChannelTitle>
            {channel.snippet.title}
          </Styled.VideoDetailsDescChannelTitle>
          <Styled.VideoDetailsDescChannelSubs>
            {`${numberConverter(
              channel.statistics.subscriberCount
            )} subscribers`}
          </Styled.VideoDetailsDescChannelSubs>
        </Styled.VideoDetailsDescFlexWrapper>
        <CustomButton subscribe>SUBSCRIBE</CustomButton>
      </Styled.VideoDetailsDescChannelBox>
      <Styled.VideoDetailsDescContent>
        {!showMore ? renderVideoDetailsDescContent(videoDesc) : videoDesc}
        <br />
        {renderButton(videoDesc, showMore, setShowMore)}
      </Styled.VideoDetailsDescContent>
    </Styled.VideoDetailsDesc>
  );
};

export default VideoDetailsDesc;

VideoDetailsDesc.propTypes = {
  videoDesc: PropTypes.string.isRequired,
};
