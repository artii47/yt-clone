import React from "react";
import * as Styled from "./video-search-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { useParams } from "react-router-dom";

const VideoSearchItem = props => {
  const params = useParams();
  return (
    <Styled.VideoSearchItem
      to={`/watch/${props.id.videoId ? props.id.videoId : props.id}`}
    >
      <Styled.VideoSearchItemImg src={props.imgUrl} />
      <Styled.VideoSearchItemDescription>
        <Styled.VideoSearchItemTitle>
          {params.videoId ? props.title.slice(0, 50) + "..." : props.title}
        </Styled.VideoSearchItemTitle>
        <br />
        <Styled.VideoSearchItemFlexWrapper>
          <Styled.VideoSearchItemChannelTitle>
            {props.channelTitle} &nbsp; &bull; &nbsp;
          </Styled.VideoSearchItemChannelTitle>
          <Styled.VideoSearchItemViews>
            {props.viewsCount
              ? numberConverter(props.viewsCount) + " views"
              : ""}
            &nbsp; &bull; &nbsp;
          </Styled.VideoSearchItemViews>
          <Styled.VideoSearchItemPublishDate>
            {props.publishDate ? props.publishDate.slice(0, 10) : ""}
          </Styled.VideoSearchItemPublishDate>
        </Styled.VideoSearchItemFlexWrapper>
        <Styled.VideoSearchItemDescriptionContent>
          some description
        </Styled.VideoSearchItemDescriptionContent>
      </Styled.VideoSearchItemDescription>
    </Styled.VideoSearchItem>
  );
};

export default VideoSearchItem;
