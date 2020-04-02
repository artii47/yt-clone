import React, { useState } from "react";
import * as Styled from "./video-popular-item.styles";
import { useParams } from "react-router-dom";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";

const VideoPopularItem = props => {
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const renderVideoItem = () => {
    return (
      <Styled.VideoPopularItem
        to={`/watch/${props.id.videoId ? props.id.videoId : props.id}`}
      >
        <Styled.VideoPopularItemImg
          onLoad={() => setIsLoaded(true)}
          isLoaded={isLoaded}
          src={props.imgUrl}
        />
        <Styled.VideoPopularItemFlexWrapper>
          <Styled.VideoPopularItemChannelImg
            referrerPolicy="no-referrer"
            src={props.channelImgUrl}
          />
          <Styled.VideoPopularItemDescription>
            <Styled.VideoPopularItemTitle>
              {params.videoId
                ? props.title.length > 50
                  ? props.title.slice(0, 50) + "..."
                  : props.title
                : props.title}
            </Styled.VideoPopularItemTitle>
            <br />
            <Styled.VideoPopularItemChannelTitle>
              {props.channelTitle}
            </Styled.VideoPopularItemChannelTitle>
            <Styled.VideoPopularItemViews>
              {props.viewsCount
                ? numberConverter(props.viewsCount) + " views "
                : ""}
              &bull; {props.publishDate ? dateConverter(props.publishDate) : ""}
            </Styled.VideoPopularItemViews>
          </Styled.VideoPopularItemDescription>
        </Styled.VideoPopularItemFlexWrapper>
      </Styled.VideoPopularItem>
    );
  };
  return renderVideoItem();
};

export default VideoPopularItem;
