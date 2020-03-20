import React from "react";
import * as Styled from "./video-item.styles";

const VideoItem = props => {
  return (
    <Styled.VideoItem>
      <Styled.VideoItemImg src={props.imgUrl} />
      <Styled.VideoItemTitle>{props.title}</Styled.VideoItemTitle>
    </Styled.VideoItem>
  );
};

export default VideoItem;
