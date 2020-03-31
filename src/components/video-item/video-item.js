import React, { useState } from "react";
import * as Styled from "./video-item.styles";
import { useParams } from "react-router-dom";
import { numberConverter } from "../../helpers/numConverter";

const VideoItem = props => {
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const renderVideoItem = () => {
    return (
      <Styled.VideoItem
        to={`/watch/${props.id.videoId ? props.id.videoId : props.id}`}
        isRelated={props.isRelated}
      >
        <Styled.VideoItemImg
          onLoad={() => setIsLoaded(true)}
          isLoaded={isLoaded}
          src={props.imgUrl}
        />
        <Styled.VideoItemDescription isRelated={props.isRelated}>
          <Styled.VideoItemTitle isRelated={props.isRelated}>
            {params.videoId
              ? props.title.length > 50
                ? props.title.slice(0, 50) + "..."
                : props.title
              : props.title}
          </Styled.VideoItemTitle>
          <br />
          <Styled.VideoItemChannelTitle isRelated={props.isRelated}>
            {props.channelTitle}
          </Styled.VideoItemChannelTitle>
          <Styled.VideoItemViews isRelated={props.isRelated}>
            {props.viewsCount
              ? numberConverter(props.viewsCount) + " views "
              : ""}
            &bull; {props.publishDate ? props.publishDate.slice(0, 10) : ""}
          </Styled.VideoItemViews>
        </Styled.VideoItemDescription>
      </Styled.VideoItem>
    );
  };
  return renderVideoItem();
};

export default VideoItem;
