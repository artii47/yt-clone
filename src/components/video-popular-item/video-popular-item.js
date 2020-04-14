import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./video-popular-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";

const VideoPopularItem = ({
  id,
  imgUrl,
  channelImgUrl,
  title,
  channelTitle,
  publishDate,
  viewsCount,
}) => {
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const renderVideoItem = () => {
    return (
      <Styled.VideoPopularItem to={`/watch/${id.videoId ? id.videoId : id}`}>
        <Styled.VideoPopularItemImg
          onLoad={() => setIsLoaded(true)}
          isLoaded={isLoaded}
          src={imgUrl}
        />
        <Styled.VideoPopularItemFlexWrapper>
          <Styled.VideoPopularItemChannelImg
            referrerPolicy="no-referrer"
            src={channelImgUrl}
          />
          <Styled.VideoPopularItemDescription>
            <Styled.VideoPopularItemTitle>
              {params.videoId
                ? title.length > 50
                  ? title.slice(0, 50) + "..."
                  : title
                : title}
            </Styled.VideoPopularItemTitle>
            <Styled.VideoPopularItemChannelTitle>
              {channelTitle}
            </Styled.VideoPopularItemChannelTitle>
            <Styled.VideoPopularItemViews>
              {viewsCount ? `${numberConverter(viewsCount)} views ` : ""}
              &bull;
              {publishDate ? ` ${dateConverter(publishDate)}` : ""}
            </Styled.VideoPopularItemViews>
          </Styled.VideoPopularItemDescription>
        </Styled.VideoPopularItemFlexWrapper>
      </Styled.VideoPopularItem>
    );
  };
  return renderVideoItem();
};

export default VideoPopularItem;
