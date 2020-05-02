import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import * as Styled from "./video-search-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";

const VideoSearchItem = ({
  id,
  title,
  imgUrl,
  channelTitle,
  viewsCount,
  publishDate,
  description,
}) => {
  const params = useParams();
  return (
    <Styled.VideoSearchItem to={`/watch/${id.videoId ? id.videoId : id}`}>
      <Styled.VideoSearchItemImg src={imgUrl} alt={channelTitle} />
      <Styled.VideoSearchItemDescription>
        <Styled.VideoSearchItemTitle>
          {params.videoId ? `${title.slice(0, 50)} ...` : title}
        </Styled.VideoSearchItemTitle>
        <br />
        <Styled.VideoSearchItemFlexWrapper>
          <Styled.VideoSearchItemChannelTitle>
            {channelTitle}
            &nbsp; &bull; &nbsp;
          </Styled.VideoSearchItemChannelTitle>
          <Styled.VideoSearchItemViews>
            {viewsCount ? `${numberConverter(viewsCount)} views` : ""}
            &nbsp; &bull; &nbsp;
          </Styled.VideoSearchItemViews>
          <Styled.VideoSearchItemPublishDate>
            {publishDate ? dateConverter(publishDate) : ""}
          </Styled.VideoSearchItemPublishDate>
        </Styled.VideoSearchItemFlexWrapper>
        <Styled.VideoSearchItemDescriptionContent>
          {description.length > 120
            ? `${description.slice(0, 120)} ...`
            : description}
        </Styled.VideoSearchItemDescriptionContent>
      </Styled.VideoSearchItemDescription>
    </Styled.VideoSearchItem>
  );
};

export default VideoSearchItem;

VideoSearchItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelTitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  viewsCount: PropTypes.string.isRequired,
};
