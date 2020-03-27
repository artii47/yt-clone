import React from "react";
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
        return (
          <CommentItem
            id={comment.id}
            authorName={
              comment.snippet.topLevelComment.snippet.authorDisplayName
            }
            authorChannelImage={
              comment.snippet.topLevelComment.snippet.authorProfileImageUrl
            }
            text={comment.snippet.topLevelComment.snippet.textOriginal}
            likeCount={comment.snippet.topLevelComment.snippet.likeCount}
          />
        );
      })}
      {isLoading ? <Spinner /> : ""}
    </Styled.CommentList>
  );
};

export default CommentList;
