import React from "react";
import * as Styled from "./video-details-desc.styles";
import { numberConverter } from "../../helpers/numConverter";
import { useSelector } from "react-redux";

const VideoDetailsDesc = props => {
  const channel = useSelector(state => state.channels.currentVideoChannel);
  if (!channel) {
    return "";
  }
  return (
    <Styled.VideoDetailsDesc>
      <Styled.VideoDetailsDescChannelBox>
        <Styled.VideoDetailsDescChannelImg
          src={channel.snippet.thumbnails.medium.url}
        />
        <Styled.VideoDetailsDescFlexWrapper>
          <Styled.VideoDetailsDescChannelTitle>
            {channel.snippet.title}
          </Styled.VideoDetailsDescChannelTitle>
          <Styled.VideoDetailsDescChannelSubs>
            {numberConverter(channel.statistics.subscriberCount)}
          </Styled.VideoDetailsDescChannelSubs>
        </Styled.VideoDetailsDescFlexWrapper>
      </Styled.VideoDetailsDescChannelBox>
      <Styled.VideoDetailsDescContent>
        {props.videoDesc}
      </Styled.VideoDetailsDescContent>
    </Styled.VideoDetailsDesc>
  );
};

export default VideoDetailsDesc;
