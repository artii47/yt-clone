import styled from "styled-components";

export const VideosContainer = styled.div`
  position: relative;
  background-color: #f6f6f6;
  width: 100%;
  height: 100vh;
  padding: 1rem 2.5rem;
  flex-wrap: wrap;
  align-self: flex-start;
  display: flex;
  overflow-y: hidden;
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  height: 100%;
  width: 100%;
  padding-bottom: 10rem;
`;
