import styled from "styled-components";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Dislike } from "../../assets/icons/dislike.svg";

export const CommentItem = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  margin: 1rem 0;
`;

export const CommentItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const CommentItemImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
`;

export const CommentItemChannelTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CommentItemText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
`;

export const CommentItemLikeCount = styled.p`
  font-size: 1.5rem;
  color: #707070;
  margin: 0 1.3rem;
`;

export const CommentItemLike = styled(Like)`
  height: 1.6rem;
  width: 1.6rem;
  fill: #707070;
`;
export const CommentItemDislike = styled(Dislike)`
  height: 1.6rem;
  width: 1.6rem;
  fill: #707070;
`;

export const CommentItemFlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentItemPublishDate = styled.p`
  font-size: 1.4rem;
  color: #707070;
  font-weight: 400;
`;
