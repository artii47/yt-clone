import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoPopularItem = styled(Link)`
  position: relative;
  width: 23%;
  max-width: 36rem;
  min-width: 13rem;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  margin-right: 0.8rem;
  margin-left: 0.8rem;
  margin-bottom: 4rem;
  :first-of-type {
    ::before {
      content: "Recommended";
      position: absolute;
      top: -4rem;
      left: 0.4rem;
      width: 100%;
      height: 1rem;
      padding-bottom: 1rem;
      font-size: 2rem;
      color: #000;
      font-weight: 500;
      pointer-events: none;
    }
  }
  @media only screen and (max-width: 62.5em) {
    min-width: 30%;
  }
  @media only screen and (max-width: 43.75em) {
    min-width: 30%;
  }
  @media only screen and (max-width: 40.625em) {
    min-width: 45%;
  }
  @media only screen and (max-width: 25em) {
    min-width: 90%;
  }
`;

export const VideoPopularItemImg = styled.img`
  width: 100%;
  max-height: 23rem;
  min-height: 13rem;
`;

export const VideoPopularItemDescription = styled.div`
  width: 100%;
  padding-right: 1.5rem;
`;

export const VideoPopularItemTitle = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.2rem;
  margin-top: 1.3rem;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 87.5em) {
    font-size: 1.5rem;
    line-height: 1.9rem;
  }
`;
export const VideoPopularItemChannelTitle = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.4rem;
  margin-bottom: 2px;
`;

export const VideoPopularItemViews = styled.p`
  font-weight: 400;
  color: #707070;
  font-size: 1.4rem;
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
