import styled from "styled-components";
import VideoItem from "../video-item/video-item";

export const RelatedVideos = styled.div`
  height: 100%;
  justify-content: flex-start;
  padding-right: 2.5rem;
  padding-top: 2.4rem;
  width: 40rem;
`;

export const RelatedVideosList = styled.div`
  display: flex;
`;

export const RelatedVideosItem = styled(VideoItem)`
  display: none;
`;

export const RelatedVideosText = styled.p`
  font-size: 1.8rem;
`;
