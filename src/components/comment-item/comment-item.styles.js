import styled, { css } from "styled-components";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Dislike } from "../../assets/icons/dislike.svg";

export const CommentItem = styled.div`
  width: 100%;
  display: flex;
  margin: 1.5rem 0;
`;

export const CommentItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const CommentItemImg = styled.img`
  min-width: ${(props) => (props.reply ? "2.4rem" : "4rem")};
  height: 4rem;
  border-radius: 50%;
`;

export const CommentItemChannelTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const CommentItemText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.9rem;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
`;

export const CommentItemLikeCount = styled.p`
  font-size: 1.3rem;
  color: #707070;
  margin: 0 1.3rem;
`;

export const CommentItemLike = styled(Like)`
  height: 1.4rem;
  width: 1.4rem;
  fill: #909090;
`;
export const CommentItemDislike = styled(Dislike)`
  height: 1.4rem;
  width: 1.4rem;
  fill: #909090;
`;

export const CommentItemFlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentItemPublishDate = styled.p`
  font-size: 1.3rem;
  color: #707070;
  font-weight: 400;
`;

export const CommentItemRepliesText = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: #065fd4;
  font-weight: 500;
  cursor: pointer;
  width: 12.5rem;
  display: flex;
  align-items: center;
  :before {
    display: inline-block;
    content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet' focusable='false' class='style-scope yt-icon' style='fill: rgb(6, 95, 212);'><g class='style-scope yt-icon'><path d='M7 14l5-5 5 5z' class='style-scope yt-icon'/></g></svg>");
    height: 2rem !important;
    width: 2rem !important;
    ${(props) =>
      !props.showReplies &&
      css`
        content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet' focusable='false' class='style-scope yt-icon' style='fill: rgb(6, 95, 212);'><g class='style-scope yt-icon'><path d='M7 10l5 5 5-5z' class='style-scope yt-icon'/></g></svg>");
      `}
  }
`;
