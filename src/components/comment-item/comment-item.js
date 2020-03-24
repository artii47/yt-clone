import React from "react";
import * as Styled from "./comment-item.styles";

const CommentItem = props => {
  return (
    <Styled.CommentItem>
      <Styled.CommentItemImg src={props.authorChannelImage} />
      <Styled.CommentItemDescription>
        <Styled.CommentItemFlexWrapper>
          <Styled.CommentItemChannelTitle>
            {props.authorName} &nbsp;
          </Styled.CommentItemChannelTitle>
          <Styled.CommentItemPublishDate>
            1 year ago
          </Styled.CommentItemPublishDate>
        </Styled.CommentItemFlexWrapper>
        <Styled.CommentItemText>{props.text}</Styled.CommentItemText>
        <Styled.CommentItemFlexWrapper>
          <Styled.CommentItemLike />
          <Styled.CommentItemLikeCount>
            {props.likeCount}
          </Styled.CommentItemLikeCount>
          <Styled.CommentItemDislike />
        </Styled.CommentItemFlexWrapper>
      </Styled.CommentItemDescription>
    </Styled.CommentItem>
  );
};

export default CommentItem;
