import styled from "styled-components";
import VideoItem from "../video-item/video-item";

export const RelatedVideos = styled.div`
  width: 40rem;
  height: 100%;
  margin-top: 2.5rem;
`;

export const RelatedVideosList = styled.div`
  display: flex;
`;

export const RelatedVideosItem = styled(VideoItem)`
  display: none;
`;
