import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import * as Styled from "./video-related-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";
import { renderTitle } from "../../helpers/renderTitle";

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
            {renderTitle(params.videoId, title)}
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

VideoRelatedItem.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  viewsCount: PropTypes.string.isRequired,
};
