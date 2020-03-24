import styled from "styled-components";
import VideoItem from "../video-item/video-item";

export const RelatedVideos = styled.div`
  height: 100%;
  grid-column: 12/16;
  margin-top: 2.5rem;
  margin-left: 2rem;
  margin-right: 5rem;
`;

export const RelatedVideosList = styled.div`
  display: flex;
`;

export const RelatedVideosItem = styled(VideoItem)`
  display: none;
`;
