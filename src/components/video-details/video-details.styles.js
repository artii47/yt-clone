import styled, { css } from "styled-components";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Dislike } from "../../assets/icons/dislike.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings-video-details.svg";
import { ReactComponent as Save } from "../../assets/icons/save.svg";
import { ReactComponent as Share } from "../../assets/icons/share-video.svg";

export const VideoDetails = styled.div`
  position: relative;
`;

export const VideoDetailsIframeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 35vw;
  max-height: 72rem;
  @media only screen and (max-width: 62.5em) {
    height: 50vw;
  }
  @media only screen and (max-width: 50em) {
    height: 55vw;
  }
  @media only screen and (max-width: 31.25em) {
    width: 100%;
  }
`;

export const VideoDetailsIframe = styled.iframe`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${(props) => (!props.isIframeLoaded ? "black" : "")};
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
    width: ${(props) => (props.likePercentage ? props.likePercentage : "")}%;
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
  @media only screen and (max-width: 31.25em) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
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

const iconStyles = css`
  height: 2rem !important;
  width: 2rem !important;
  fill: #909090;
  margin-right: 1rem;
`;

export const VideoDetailsActionBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0 1.5rem;
  color: #606060;
  @media only screen and (max-width: 43.75em) {
    margin: 0 1rem;
  }
  @media only screen and (max-width: 31.25em) {
    margin: 0 0.5rem;
    font-size: 1.1rem;
  }
  :last-child {
    margin-right: 0;
  }
`;

export const VideoDetailsShare = styled(Share)`
  ${iconStyles}
`;
export const VideoDetailsSettings = styled(Settings)`
  ${iconStyles}
`;
export const VideoDetailsSave = styled(Save)`
  ${iconStyles}
`;

export const VideoDetailsFlex = styled.div`
  display: flex;
  @media only screen and (max-width: 31.25rem) {
    margin-top: 1.5rem;
    width: 100%;
    justify-content: space-between;
  }
`;
