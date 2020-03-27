import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const VideoItem = styled(Link)`
  width: 33rem;
  height: 29rem;
  background-color: transparent;
  margin: 3rem 0;
  cursor: pointer;
  text-decoration: none;

  ${props =>
    props.isItemSearched &&
    css`
      display: flex;
      width: 60%;
      height: 14rem;
      cursor: pointer;
      margin: 1rem 0;
      img {
        width: 25rem;
        height: 100%;
      }
    `}
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
        width: 50%;
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
  ${props =>
    props.isRelated &&
    css`
      margin: 0 1rem;
    `}
  ${props =>
    props.isItemSearched &&
    css`
      margin: 0 1.5rem;
    `}
`;

export const VideoItemTitle = styled.p`
  color: #000;
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 2.5rem;
  /* word-break: break-all; */
  margin-top: 0.5rem;
  ${props =>
    props.isRelated &&
    css`
      font-size: 1.5rem;
      line-height: 1.5rem;
    `};

  ${props =>
    props.isItemSearched &&
    css`
      font-weight: 400;
    `}
`;
export const VideoItemChannelTitle = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.8rem;
  ${props =>
    props.isRelated &&
    css`
      font-size: 1.2rem;
    `}
`;

export const VideoItemViews = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.8rem;
  ${props =>
    props.isRelated &&
    css`
      margin-top: 0.4rem;
      font-size: 1.2rem;
    `}
`;
