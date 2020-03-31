import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const VideoItem = styled(Link)`
  width: 36rem;
  height: 29rem;
  background-color: transparent;
  margin: 3rem 0;
  cursor: pointer;
  text-decoration: none;
  ${props =>
    props.isRelated &&
    css`
      display: flex;
      height: 10rem;
      margin: 0;
      margin: 1.5rem 0;
      width: 100%;
      cursor: pointer;
      img {
        min-width: 16.8rem;
        height: 9.4rem;
      }
    `}
`;

export const VideoItemImg = styled.img`
  width: 100%;
  height: 70%;
  background-color: ${props =>
    props.isLoaded ? "rgba(0,0,0,0.1)" : "transparent"};
`;

export const VideoItemDescription = styled.div`
  width: 100%;
  ${props =>
    props.isRelated &&
    css`
      margin: 0 1rem;
      padding-right: 2.4rem;
    `}
`;

export const VideoItemTitle = styled.p`
  color: #000;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 2.2rem;
  margin-top: 0.5rem;
  ${props =>
    props.isRelated &&
    css`
      font-size: 1.5rem;
      line-height: 1.5rem;
    `};
`;
export const VideoItemChannelTitle = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.5rem;
  ${props =>
    props.isRelated &&
    css`
      font-size: 1.2rem;
    `}
`;

export const VideoItemViews = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.5rem;
  ${props =>
    props.isRelated &&
    css`
      margin-top: 0.4rem;
      font-size: 1.2rem;
    `}
`;
