import React, { useState } from "react";
import * as Styled from "./video-main-item.styles";
import { useParams } from "react-router-dom";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";

const VideoMainItem = props => {
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const renderVideoItem = () => {
    return (
      <Styled.VideoMainItem
        to={`/watch/${props.id.videoId ? props.id.videoId : props.id}`}
      >
        <Styled.VideoMainItemImg
          onLoad={() => setIsLoaded(true)}
          isLoaded={isLoaded}
          src={props.imgUrl}
        />
        <Styled.VideoMainItemFlexWrapper>
          <Styled.VideoMainItemChannelImg
            referrerPolicy="no-referrer"
            src={props.channelImgUrl}
          />
          <Styled.VideoMainItemDescription>
            <Styled.VideoMainItemTitle>
              {params.videoId
                ? props.title.length > 50
                  ? props.title.slice(0, 50) + "..."
                  : props.title
                : props.title}
            </Styled.VideoMainItemTitle>
            <br />
            <Styled.VideoMainItemChannelTitle>
              {props.channelTitle}
            </Styled.VideoMainItemChannelTitle>
            <Styled.VideoMainItemViews>
              {props.viewsCount
                ? numberConverter(props.viewsCount) + " views "
                : ""}
              &bull; {props.publishDate ? dateConverter(props.publishDate) : ""}
            </Styled.VideoMainItemViews>
          </Styled.VideoMainItemDescription>
        </Styled.VideoMainItemFlexWrapper>
      </Styled.VideoMainItem>
    );
  };
  return renderVideoItem();
};

export default VideoMainItem;
