import React from "react";
import { useSelector } from "react-redux";
import * as Styled from "./comment-list.styles";
import CommentItem from "../comment-item/comment-item";
import Spinner from "../spinner/spinner";
import {
  selectCommentsItems,
  selectIsLoading,
} from "../../selectors/comments.selector";

const CommentList = () => {
  const comments = useSelector(selectCommentsItems);
  const isLoading = useSelector(selectIsLoading);

  if (!comments?.items?.length) {
    if (comments?.items?.length === 0) {
      return "";
    }
    return <Spinner />;
  }
  return (
    <Styled.CommentList>
      {comments.items.map((comment) => {
        const comm = comment.snippet.topLevelComment.snippet;
        return (
          <CommentItem
            data-testid="comment"
            key={comment.id}
            id={comment.id}
            authorName={comm.authorDisplayName}
            authorChannelImage={comm.authorProfileImageUrl}
            text={comm.textOriginal}
            likeCount={comm.likeCount}
            publishedAt={comm.publishedAt}
          />
        );
      })}
      {isLoading && comments.nextPageToken ? <Spinner /> : ""}
      {!comments.nextPageToken ? "" : ""}
    </Styled.CommentList>
  );
};

export default CommentList;
