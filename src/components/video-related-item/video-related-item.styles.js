import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoRelatedItem = styled(Link)`
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  height: 9.4rem;
  margin: 0;
  margin: 0.8rem 0;
  width: 40rem;
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const VideoRelatedItemImg = styled.img`
  width: 16.4rem;
  height: 100%;
  min-width: 16.8rem;
  height: 100%;
  background-color: ${(props) =>
    props.isLoaded ? "rgba(0,0,0,0.1)" : "transparent"};
`;

export const VideoRelatedItemDescription = styled.div`
  width: 100%;
  margin: 0 1rem;
  padding-right: 2.4rem;
`;

export const VideoRelatedItemTitle = styled.p`
  color: #000;
  font-weight: 500;
  margin-top: 0.5rem;
  font-size: 1.4rem;
  line-height: 1.5rem;
  margin-bottom: 0.4rem;
`;
export const VideoRelatedItemChannelTitle = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.3rem;
`;

export const VideoRelatedItemViews = styled.p`
  font-weight: 400;
  color: #707070;
  margin-top: 0.2rem;
  font-size: 1.3rem;
`;
