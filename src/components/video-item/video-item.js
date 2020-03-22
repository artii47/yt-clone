import React from "react";
import * as Styled from "./video-item.styles";
import { useParams } from "react-router-dom";

const VideoItem = props => {
  const params = useParams();
  const renderVideoItem = () => {
    return (
      <Styled.VideoItem
        onClick={() => console.log("props", props)}
        to={`/watch/${props.id.videoId ? props.id.videoId : props.id}`}
        isItemSearched={props.isItemSearched}
        isRelated={props.isRelated}
      >
        <Styled.VideoItemImg src={props.imgUrl} />
        <Styled.VideoItemDescription
          isRelated={props.isRelated}
          isItemSearched={props.isItemSearched}
        >
          <Styled.VideoItemTitle isRelated={props.isRelated}>
            {params.videoId ? props.title.slice(0, 50) + "..." : props.title}
          </Styled.VideoItemTitle>
          <br />
          <Styled.VideoItemChannelTitle isRelated={props.isRelated}>
            {props.channelTitle}
          </Styled.VideoItemChannelTitle>
        </Styled.VideoItemDescription>
      </Styled.VideoItem>
    );
  };
  return renderVideoItem();
};

export default VideoItem;
