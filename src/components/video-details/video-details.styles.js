import styled from "styled-components";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Dislike } from "../../assets/icons/dislike.svg";

export const VideoDetails = styled.div``;

export const VideoDetailsIframe = styled.iframe`
  width: 100%;
  height: 72rem;
  background-color: ${props => (!props.isIframeLoaded ? "black" : "")};
`;

export const VideoDetailsTitle = styled.p`
  font-size: 1.8rem;
  color: #000;
  margin-top: 2rem;
`;

export const VideoDetailsPublishDate = styled.p`
  font-size: 1.5rem;
  color: #707070;
  font-weight: 400;
`;

export const VideoDetailsLikeBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  :after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    height: 2px;
    text-align: center;
    width: ${props => (props.likePercentage ? props.likePercentage : "")}%;
    display: inline-block;
    background-color: #909090;
  }
  :before {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    height: 2px;
    text-align: center;
    width: 100%;
    display: inline-block;
    background-color: #cccccc;
  }
`;

export const VideoDetailsLike = styled(Like)`
  height: 1.8rem;
  width: 1.8rem;
  fill: #909090;
  margin-right: 1rem;
`;

export const VideoDetailsFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const VideoDetailsDislike = styled(Dislike)`
  height: 1.8rem;
  width: 1.8rem;
  fill: #909090;
  margin-right: 1rem;
`;

export const VideoDetailsLikeDislikeBox = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: #707070;
  display: flex;
  align-items: center;
  margin: 0 1.5rem;
`;
