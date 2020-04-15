import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import * as Styled from "./video-popular-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";
import { renderTitle } from "../../helpers/renderTitle";

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
              {renderTitle(params.videoId, title)}
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

VideoPopularItem.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  channelImgUrl: PropTypes.string.isRequired,
  viewsCount: PropTypes.string.isRequired,
};
