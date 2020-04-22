import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchCommentsAsync,
  fetchCommentsNextPageAsync,
  resetCurrentComments,
} from "../../reducers/commentsReducer";
import Comments from "./comments";
import useScrollEvent from "../../hooks/useScrollEvent";
import { selectCurrentVideo } from "../../selectors/video.selector";
import { selectComments } from "../../selectors/comments.selector";
import * as Styled from "./comments.styles";
import withError from "../../hocs/withError";

const CommentsContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [sortBy, setSortBy] = useState("relevance");
  const comments = useSelector(selectComments);
  const video = useSelector(selectCurrentVideo);
  useEffect(() => {
    dispatch(fetchCommentsAsync(params.videoId, sortBy));
    return () => {
      dispatch(resetCurrentComments());
    };
  }, [sortBy, params.videoId, dispatch]);
  useEffect(() => {
    return () => {
      setSortBy("relevance");
    };
  }, [params.videoId]);
  useScrollEvent(
    true,
    comments.currentVideoComments,
    "comments",
    fetchCommentsNextPageAsync,
    params.videoId,
    sortBy
  );
  if (!comments.currentVideoComments) {
    if (video) {
      if (
        comments.hasError?.data?.error?.errors[0]?.reason === "commentsDisabled"
      ) {
        return (
          <Styled.CommentsDisabledMessage>
            Comments are turned off
          </Styled.CommentsDisabledMessage>
        );
      }
    }
    return "";
  }

  return <Comments video={video} sortBy={sortBy} setSortBy={setSortBy} />;
};

export default withError(CommentsContainer, "comments");
