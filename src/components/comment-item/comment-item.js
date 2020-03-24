import React from "react";
import * as Styled from "./comment-item.styles";

const CommentItem = () => {
  return (
    <Styled.CommentItem>
      <Styled.CommentItemImg src="https://picsum.photos/200/300" />
      <Styled.CommentItemDescription>
        <Styled.CommentItemFlexWrapper>
          <Styled.CommentItemChannelTitle>
            my channel &nbsp;
          </Styled.CommentItemChannelTitle>
          <Styled.CommentItemPublishDate>
            1 year ago
          </Styled.CommentItemPublishDate>
        </Styled.CommentItemFlexWrapper>
        <Styled.CommentItemText>hi im very polite</Styled.CommentItemText>
        <Styled.CommentItemFlexWrapper>
          <Styled.CommentItemLike />
          <Styled.CommentItemLikeCount>523</Styled.CommentItemLikeCount>
          <Styled.CommentItemDislike />
        </Styled.CommentItemFlexWrapper>
      </Styled.CommentItemDescription>
    </Styled.CommentItem>
  );
};

export default CommentItem;
