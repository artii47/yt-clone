import React, { useState } from "react";
import * as Styled from "./video-details-desc.styles";
import { numberConverter } from "../../helpers/numConverter";
import { useSelector } from "react-redux";

const VideoDetailsDesc = props => {
  const [showMore, setShowMore] = useState(false);
  const channel = useSelector(state => state.channels.currentVideoChannel);
  if (!channel) {
    return "";
  }
  const renderVideoDetailsDescContent = desc => {
    const wordsArr = desc.split(" ");
    if (wordsArr.length < 50) {
      return desc;
    } else {
      return wordsArr.slice(0, 50).join(" ");
    }
  };
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
            {numberConverter(channel.statistics.subscriberCount) +
              " subscribers"}
          </Styled.VideoDetailsDescChannelSubs>
        </Styled.VideoDetailsDescFlexWrapper>
      </Styled.VideoDetailsDescChannelBox>
      <Styled.VideoDetailsDescContent>
        {!showMore
          ? renderVideoDetailsDescContent(props.videoDesc)
          : props.videoDesc}
        <br />
        <Styled.VideoDetailsDescButton onClick={() => setShowMore(!showMore)}>
          {!showMore ? "SHOW MORE" : "SHOW LESS"}
        </Styled.VideoDetailsDescButton>
      </Styled.VideoDetailsDescContent>
    </Styled.VideoDetailsDesc>
  );
};

export default VideoDetailsDesc;
