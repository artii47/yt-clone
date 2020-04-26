import React from "react";
import { useMediaQuery } from "react-responsive";
import * as Styled from "./video-details-page.styles";
import VideoDetails from "../../components/video-details/video-details";
import CommentsContainer from "../../components/comments/comments-container";
import VideosRelatedList from "../../components/videos-related-list/videos-related-list";

const VideoDetailsPage = () => {
  const isMediumSize = useMediaQuery({ query: `(max-width: 1000px)` });
  return (
    <Styled.Container>
      <Styled.VideoDetailsAndCommentsWrapper>
        <VideoDetails />
        {isMediumSize && <VideosRelatedList enableScrollEvent={false} />}
        <CommentsContainer />
      </Styled.VideoDetailsAndCommentsWrapper>
      {!isMediumSize ? <VideosRelatedList enableScrollEvent /> : ""}
    </Styled.Container>
  );
};

export default VideoDetailsPage;
