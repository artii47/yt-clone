import React, { useState } from "react";
import * as Styled from "./video-related-item.styles";
import { useParams } from "react-router-dom";
import { numberConverter } from "../../helpers/numConverter";

const VideoRelatedItem = props => {
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const renderVideoItem = () => {
    return (
      <Styled.VideoRelatedItem
        to={`/watch/${props.id.videoId ? props.id.videoId : props.id}`}
        isRelated={props.isRelated}
      >
        <Styled.VideoRelatedItemImg
          onLoad={() => setIsLoaded(true)}
          referrerPolicy="no-referrer"
          isLoaded={isLoaded}
          src={props.imgUrl}
        />
        <Styled.VideoRelatedItemDescription isRelated={props.isRelated}>
          <Styled.VideoRelatedItemTitle isRelated={props.isRelated}>
            {params.videoId
              ? props.title.length > 50
                ? props.title.slice(0, 50) + "..."
                : props.title
              : props.title}
          </Styled.VideoRelatedItemTitle>
          <br />
          <Styled.VideoRelatedItemChannelTitle isRelated={props.isRelated}>
            {props.channelTitle}
          </Styled.VideoRelatedItemChannelTitle>
          <Styled.VideoRelatedItemViews isRelated={props.isRelated}>
            {props.viewsCount
              ? numberConverter(props.viewsCount) + " views "
              : ""}
            &bull; {props.publishDate ? props.publishDate.slice(0, 10) : ""}
          </Styled.VideoRelatedItemViews>
        </Styled.VideoRelatedItemDescription>
      </Styled.VideoRelatedItem>
    );
  };
  return renderVideoItem();
};

export default VideoRelatedItem;
