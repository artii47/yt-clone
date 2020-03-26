import React, { useEffect, useState } from "react";
import * as Styled from "./comments.styles";
import CommentList from "../comment-list/comment-list";
import { useSelector, useDispatch } from "react-redux";
import { numberConverter } from "../../helpers/numConverter";
import SortOptions from "../sort-options/sort-options";
import { fetchCommentsAsync } from "../../reducers/commentsReducer";
import { useParams } from "react-router-dom";

const Comments = () => {
  const video = useSelector(state => state.video.currentVideo);
  const dispatch = useDispatch();
  const params = useParams();

  const [sortBy, setSortBy] = useState("relevance");
  useEffect(() => {
    dispatch(fetchCommentsAsync(params.videoId, sortBy));
  }, [sortBy]);
  console.log("sortBy", sortBy);
  return (
    <Styled.Comments>
      <Styled.CommentsFlexWrapper>
        <Styled.CommentsCount>
          {video
            ? numberConverter(video.statistics.commentCount) + " Comments"
            : ""}
        </Styled.CommentsCount>
        <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
      </Styled.CommentsFlexWrapper>
      <CommentList />
    </Styled.Comments>
  );
};

export default Comments;
