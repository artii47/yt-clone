import React, { useEffect } from "react";
import * as Styled from "./comment-list.styles";
import CommentItem from "../comment-item/comment-item";
import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner";

const CommentList = () => {
  const comments = useSelector(state => state.comments.currentVideoComments);
  const isLoading = useSelector(state => state.comments.isLoading);
  return (
    <Styled.CommentList>
      {comments.items.map(comment => {
        const comm = comment.snippet.topLevelComment.snippet;
        return (
          <CommentItem
            id={comment.id}
            authorName={comm.authorDisplayName}
            authorChannelImage={comm.authorProfileImageUrl}
            text={comm.textOriginal}
            likeCount={comm.likeCount}
          />
        );
      })}
      {isLoading ? <Spinner /> : ""}
    </Styled.CommentList>
  );
};

export default CommentList;
