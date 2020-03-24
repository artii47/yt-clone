import React, { useEffect } from "react";
import * as Styled from "./comment-list.styles";
import CommentItem from "../comment-item/comment-item";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsAsync } from "../../reducers/commentsReducer";
import { useParams } from "react-router-dom";

const CommentList = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchCommentsAsync(params.videoId));
  }, []);
  const comments = useSelector(state => state.comments.currentVideoComments);
  return (
    <Styled.CommentList>
      {/* <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem /> */}
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
