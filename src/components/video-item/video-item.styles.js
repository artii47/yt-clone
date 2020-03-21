import styled, { css } from "styled-components";

export const VideoItem = styled.div`
  width: 35rem;
  height: 30rem;
  background-color: transparent;
  margin: 1rem 2rem;
  ${props =>
    props.isItemSearched &&
    css`
      display: flex;
      width: 60%;
      height: 20rem;
      img {
        width: 60rem;
        height: 100%;
      }
    `}
`;

export const VideoItemImg = styled.img`
  width: 100%;
  height: 70%;
`;

export const VideoItemDescription = styled.div`
  width: 100%;
`;

export const VideoItemTitle = styled.p`
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 2.5rem;
  word-break: break-all;
  margin-top: 0.5rem;
`;
export const VideoItemChannelTitle = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.8rem;
`;
