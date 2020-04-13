import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoPopularItem = styled(Link)`
  width: 23%;
  min-width: 22rem;
  max-width: 36rem;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  margin-right: 0.8rem;
  margin-left: 0.8rem;
  margin-bottom: 4rem;
  @media only screen and (max-width: 75em) {
    min-width: 24rem;
  }
  @media only screen and (max-width: 62.5em) {
    min-width: 30%;
  }
  @media only screen and (max-width: 43.75em) {
    min-width: 30rem;
  }
  @media only screen and (max-width: 34.375em) {
    min-width: 90%;
  }
`;

export const VideoPopularItemImg = styled.img`
  width: 100%;
  max-height: 20rem;
  min-height: 15rem;
  background-color: ${(props) =>
    !props.isLoaded ? "rgba(0,0,0,0.1)" : "transparent"};
  @media only screen and (max-width: 34.375em) {
    min-height: 25rem;
    max-height: 30rem;
  }
`;

export const VideoPopularItemDescription = styled.div`
  width: 100%;
  padding-right: 1.5rem;
`;

export const VideoPopularItemTitle = styled.p`
  color: #000;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 2.2rem;
  margin-top: 1.3rem;
  margin-bottom: 0.5rem;
`;
export const VideoPopularItemChannelTitle = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.5rem;
`;

export const VideoPopularItemViews = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.5rem;
`;

export const VideoPopularItemFlexWrapper = styled.div`
  display: flex;
`;

export const VideoPopularItemChannelImg = styled.img`
  min-width: 3.6rem;
  height: 3.6rem;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  border-radius: 50%;
`;
