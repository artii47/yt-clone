import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./video-related-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";

const VideoRelatedItem = ({
  id,
  imgUrl,
  title,
  channelTitle,
  viewsCount,
  publishDate,
}) => {
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const renderVideoItem = () => {
    return (
      <Styled.VideoRelatedItem to={`/watch/${id.videoId ? id.videoId : id}`}>
        <Styled.VideoRelatedItemImg
          onLoad={() => setIsLoaded(true)}
          referrerPolicy="no-referrer"
          isLoaded={isLoaded}
          src={imgUrl}
        />
        <Styled.VideoRelatedItemDescription>
          <Styled.VideoRelatedItemTitle>
            {params.videoId
              ? title.length > 50
                ? title.slice(0, 50) + "..."
                : title
              : title}
          </Styled.VideoRelatedItemTitle>
          <br />
          <Styled.VideoRelatedItemChannelTitle>
            {channelTitle}
          </Styled.VideoRelatedItemChannelTitle>
          <Styled.VideoRelatedItemViews>
            {viewsCount ? `${numberConverter(viewsCount)} views ` : ""}
            &bull;
            {publishDate ? ` ${dateConverter(publishDate)}` : ""}
          </Styled.VideoRelatedItemViews>
        </Styled.VideoRelatedItemDescription>
      </Styled.VideoRelatedItem>
    );
  };
  return renderVideoItem();
};

export default VideoRelatedItem;
