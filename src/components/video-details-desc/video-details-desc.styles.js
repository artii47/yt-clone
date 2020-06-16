import styled from "styled-components";

export const VideoDetailsDesc = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e0e0e0;
`;

export const VideoDetailsDescFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  width: 50%;
  margin-right: auto;
`;

export const VideoDetailsDescChannelImg = styled.img`
  min-width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
`;

export const VideoDetailsDescChannelTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  width: 50%;
`;

export const VideoDetailsDescChannelSubs = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #606060;
`;

export const VideoDetailsDescChannelBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
`;

export const VideoDetailsDescContent = styled.div`
  width: 50%;
  font-size: 1.4rem;
  margin-left: 6.5rem;
  line-height: 2rem;
  margin-top: 1rem;
  margin-bottom: 1.7rem;
  @media only screen and (max-width: 50em) {
    width: 80%;
    margin-left: 4rem;
  }
`;
