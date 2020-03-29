import React, { useEffect, useState } from "react";
import * as Styled from "./comments.styles";
import CommentList from "../comment-list/comment-list";
import { useSelector, useDispatch } from "react-redux";
import { numberWithCommas } from "../../helpers/numConverter";
import SortOptions from "../sort-options/sort-options";
import {
  fetchCommentsAsync,
  fetchCommentsNextPageAsync,
  resetCurrentComments
} from "../../reducers/commentsReducer";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner";
import { throttle, debounce } from "lodash";
import scrollEvent from "../../helpers/scrollEvent";

const Comments = () => {
  const video = useSelector(state => state.video.currentVideo);
  const comments = useSelector(state => state.comments.currentVideoComments);
  const dispatch = useDispatch();
  const params = useParams();
  const [sortBy, setSortBy] = useState("relevance");
  const isLoading = useSelector(state => state.comments.isLoading);
  useEffect(() => {
    dispatch(fetchCommentsAsync(params.videoId, sortBy));
    return () => {
      dispatch(resetCurrentComments());
    };
  }, [sortBy, params.videoId, dispatch]);
  // window.addEventListener(
  //   "scroll",
  //   throttle(() => {
  //     if (
  //       document.documentElement.offsetHeight +
  //         document.documentElement.scrollTop >=
  //         document.documentElement.scrollHeight + 150 &&
  //       comments &&
  //       !isLoading
  //     ) {
  //       dispatch(
  //         fetchCommentsNextPageAsync(
  //           params.videoId,
  //           comments.nextPageToken,
  //           sortBy
  //         )
  //       );
  //     }
  //   }, 500)
  // );
  const renderComments = () => {
    if (!comments) {
      return <Spinner />;
    }
    return (
      <>
        <Styled.CommentsFlexWrapper>
          <Styled.CommentsCount>
            {video
              ? numberWithCommas(video.statistics.commentCount) + " Comments"
              : ""}
          </Styled.CommentsCount>
          <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
        </Styled.CommentsFlexWrapper>
        <CommentList />
      </>
    );
  };
  return <Styled.Comments>{renderComments()}</Styled.Comments>;
};

export default Comments;
