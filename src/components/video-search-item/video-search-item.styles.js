import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoSearchItem = styled(Link)`
  display: flex;
  height: 14rem;
  cursor: pointer;
  margin: 1rem 1rem;
  width: 70%;
  height: 100%;
  text-decoration: none;
`;

export const VideoSearchItemImg = styled.img`
  width: 24rem;
  height: 14rem;
`;

export const VideoSearchItemDescription = styled.div`
  width: 100%;
  margin: 0 1.5rem;
  line-height: 0.6rem;
`;

export const VideoSearchItemTitle = styled.p`
  color: #000;
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 2.5rem;
  margin-top: 0.5rem;
  font-weight: 400;
`;
export const VideoSearchItemChannelTitle = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.3rem;
`;

export const VideoSearchItemPublishDate = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.3rem;
`;

export const VideoSearchItemFlexWrapper = styled.p`
  display: flex;
  align-items: center;
`;

export const VideoSearchItemViews = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.3rem;
`;

export const VideoSearchItemDescriptionContent = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.5rem;
`;
