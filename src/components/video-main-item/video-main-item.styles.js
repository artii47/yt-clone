import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoMainItem = styled(Link)`
  width: 36rem;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  margin-right: 0.8rem;
  margin-left: 0.8rem;
  margin-bottom: 4rem;
`;

export const VideoMainItemImg = styled.img`
  width: 100%;
  height: 20rem;
  background-color: ${props =>
    !props.isLoaded ? "rgba(0,0,0,0.1)" : "transparent"};
`;

export const VideoMainItemDescription = styled.div`
  width: 100%;
  padding-right: 1.5rem;
`;

export const VideoMainItemTitle = styled.p`
  color: #000;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 2.2rem;
  margin-top: 1.3rem;
`;
export const VideoMainItemChannelTitle = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.5rem;
`;

export const VideoMainItemViews = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.5rem;
`;

export const VideoMainItemFlexWrapper = styled.div`
  display: flex;
`;

export const VideoMainItemChannelImg = styled.img`
  min-width: 3.6rem;
  height: 3.6rem;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  border-radius: 50%;
`;
