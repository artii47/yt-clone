import React from "react";
import * as Styled from "./comment-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";

const CommentItem = props => {
  return (
    <Styled.CommentItem>
      <Styled.CommentItemImg
        referrerPolicy="no-referrer"
        src={props.authorChannelImage}
      />
      <Styled.CommentItemDescription>
        <Styled.CommentItemFlexWrapper>
          <Styled.CommentItemChannelTitle>
            {props.authorName} &nbsp;
          </Styled.CommentItemChannelTitle>
          <Styled.CommentItemPublishDate>
            {dateConverter(props.publishedAt)}
          </Styled.CommentItemPublishDate>
        </Styled.CommentItemFlexWrapper>
        <Styled.CommentItemText>{props.text}</Styled.CommentItemText>
        <Styled.CommentItemFlexWrapper>
          <Styled.CommentItemLike />
          <Styled.CommentItemLikeCount>
            {props.likeCount === 0 ? "" : numberConverter(props.likeCount)}
          </Styled.CommentItemLikeCount>
          <Styled.CommentItemDislike />
        </Styled.CommentItemFlexWrapper>
      </Styled.CommentItemDescription>
    </Styled.CommentItem>
  );
};

export default CommentItem;
