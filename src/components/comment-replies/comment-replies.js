import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../spinner/spinner";
import * as Styled from "./comment-replies.styles";
import { fetchCommentsRepliesNextPageAsync } from "../../reducers/commentsReducer";
import CommentItem from "../comment-item/comment-item";
import {
  selectAreRepliesLoading,
  selectCommentItem,
} from "../../selectors/comments.selector";

const CommentReplies = ({ index }) => {
  const areRepliesLoading = useSelector(selectAreRepliesLoading);
  const commentItem = useSelector(selectCommentItem(index));
  const dispatch = useDispatch();
  if (areRepliesLoading && !commentItem?.snippet?.replies) {
    return <Spinner />;
  }
  return (
    <>
      {commentItem.snippet.replies.items.map((item) => {
        return (
          <CommentItem
            data-testid="comment"
            key={item.id}
            id={item.id}
            authorName={item.snippet.authorDisplayName}
            authorChannelImage={item.snippet.authorProfileImageUrl}
            text={item.snippet.textOriginal}
            likeCount={item.snippet.likeCount}
            publishedAt={item.snippet.publishedAt}
          />
        );
      })}
      {commentItem.snippet.replies.nextPageToken ? (
        <>
          {areRepliesLoading ? (
            <Spinner replies />
          ) : (
            <Styled.CommentItemShowMoreRepliesText
              onClick={() => {
                dispatch(
                  fetchCommentsRepliesNextPageAsync(
                    commentItem.snippet.replies.nextPageToken,
                    commentItem.id,
                    index
                  )
                );
              }}
            >
              Show more Replies
            </Styled.CommentItemShowMoreRepliesText>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CommentReplies;

CommentReplies.propTypes = {
  index: PropTypes.number.isRequired,
};
