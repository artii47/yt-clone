import React from "react";
import * as Styled from "./video-item.styles";

const VideoItem = props => {
  const renderVideoItem = () => {
    return (
      <Styled.VideoItem
        onClick={() => console.log("props", props)}
        to={`/watch/${props.id.videoId ? props.id.videoId : props.id}`}
        isItemSearched={props.isItemSearched}
      >
        <Styled.VideoItemImg src={props.imgUrl} />
        <Styled.VideoItemDescription isItemSearched={props.isItemSearched}>
          <Styled.VideoItemTitle>{props.title}</Styled.VideoItemTitle>
          <br />
          <Styled.VideoItemChannelTitle>
            {props.channelTitle}
          </Styled.VideoItemChannelTitle>
        </Styled.VideoItemDescription>
      </Styled.VideoItem>
    );
  };
  return renderVideoItem();
};

export default VideoItem;
