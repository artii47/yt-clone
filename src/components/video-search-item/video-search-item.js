import React from "react";
import * as Styled from "./video-search-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { useParams } from "react-router-dom";

const VideoSearchItem = ({
  id,
  title,
  imgUrl,
  channelTitle,
  viewsCount,
  publishDate,
  description
}) => {
  const params = useParams();
  return (
    <Styled.VideoSearchItem to={`/watch/${id.videoId ? id.videoId : id}`}>
      <Styled.VideoSearchItemImg src={imgUrl} />
      <Styled.VideoSearchItemDescription>
        <Styled.VideoSearchItemTitle>
          {params.videoId ? title.slice(0, 50) + "..." : title}
        </Styled.VideoSearchItemTitle>
        <br />
        <Styled.VideoSearchItemFlexWrapper>
          <Styled.VideoSearchItemChannelTitle>
            {channelTitle} &nbsp; &bull; &nbsp;
          </Styled.VideoSearchItemChannelTitle>
          <Styled.VideoSearchItemViews>
            {viewsCount ? numberConverter(viewsCount) + " views" : ""}
            &nbsp; &bull; &nbsp;
          </Styled.VideoSearchItemViews>
          <Styled.VideoSearchItemPublishDate>
            {publishDate ? publishDate.slice(0, 10) : ""}
          </Styled.VideoSearchItemPublishDate>
        </Styled.VideoSearchItemFlexWrapper>
        <Styled.VideoSearchItemDescriptionContent>
          {description.length > 120
            ? description.slice(0, 120) + " ..."
            : description}
        </Styled.VideoSearchItemDescriptionContent>
      </Styled.VideoSearchItemDescription>
    </Styled.VideoSearchItem>
  );
};

export default VideoSearchItem;
