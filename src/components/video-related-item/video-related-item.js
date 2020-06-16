import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import * as Styled from "./video-related-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";
import { renderTitle } from "../../helpers/renderTitle";
import { VideoPopularItemDurationBox } from "../video-popular-item/video-popular-item.styles";
import { durationConverter } from "../../helpers/durationConverter";

const VideoRelatedItem = ({
  id,
  imgUrl,
  title,
  channelTitle,
  viewsCount,
  publishDate,
  duration,
}) => {
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Styled.VideoRelatedItem to={`/watch/${id.videoId ? id.videoId : id}`}>
      <Styled.VideoRelatedItemImgWrapper>
        <Styled.VideoRelatedItemImg
          onLoad={() => setIsLoaded(true)}
          referrerPolicy="no-referrer"
          isLoaded={isLoaded}
          src={imgUrl}
          alt={channelTitle}
        />
        <VideoPopularItemDurationBox>
          {durationConverter(duration)}
        </VideoPopularItemDurationBox>
      </Styled.VideoRelatedItemImgWrapper>
      <Styled.VideoRelatedItemDescription>
        <Styled.VideoRelatedItemTitle>
          {renderTitle(params.videoId, title)}
        </Styled.VideoRelatedItemTitle>
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

export default VideoRelatedItem;

VideoRelatedItem.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  viewsCount: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
