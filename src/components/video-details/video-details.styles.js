import styled from "styled-components";

export const VideoDetails = styled.div`
  /* width: 70%;
  height: 100%;
  margin: 4rem 0; */
  grid-column: 2/12;
  width: 100%;
  margin-top: 2.5rem;
`;

export const VideoDetailsIframe = styled.iframe`
  width: 100%;
  height: 70rem;
`;

export const VideoDetailsTitle = styled.p`
  font-size: 2rem;
  color: #000;
  margin-top: 2rem;
`;

export const VideoDetailsPublishDate = styled.p`
  font-size: 1.5rem;
  color: #707070;
  margin-top: 2rem;
  font-weight: 400;
`;
