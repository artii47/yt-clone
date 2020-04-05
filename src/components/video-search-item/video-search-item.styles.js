import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoSearchItem = styled(Link)`
  display: flex;
  height: 14rem;
  cursor: pointer;
  margin: 1rem 1rem;
  max-width: 86rem;
  height: 100%;
  text-decoration: none;
  @media only screen and (max-width: 75em) {
    margin: 1rem 0;
  }
`;

export const VideoSearchItemImg = styled.img`
  min-width: 24rem;
  height: 14rem;
`;

export const VideoSearchItemDescription = styled.div`
  width: 60rem;
  margin: 0 1.5rem;
`;

export const VideoSearchItemTitle = styled.p`
  color: #000;
  font-size: 1.9rem;
  font-weight: 500;
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
  margin-top: -0.8rem;
`;

export const VideoSearchItemViews = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.3rem;
`;

export const VideoSearchItemDescriptionContent = styled.p`
  margin-top: 1rem;
  font-weight: 400;
  color: #707070;
  font-size: 1.5rem;
`;
