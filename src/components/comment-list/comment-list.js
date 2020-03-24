import React from "react";
import * as Styled from "./comment-list.styles";
import CommentItem from "../comment-item/comment-item";

const CommentList = () => {
  return (
    <Styled.CommentList>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </Styled.CommentList>
  );
};

export default CommentList;
