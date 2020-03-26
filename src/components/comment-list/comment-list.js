import React, { useEffect } from "react";
import * as Styled from "./comment-list.styles";
import CommentItem from "../comment-item/comment-item";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { numberConverter } from "../../helpers/numConverter";

const CommentList = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const comments = useSelector(state => state.comments.currentVideoComments);

  return (
    <Styled.CommentList>
      {comments.map(comment => {
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
    </Styled.CommentList>
  );
};

export default CommentList;
