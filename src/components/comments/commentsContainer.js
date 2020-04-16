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

const CommentsContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [sortBy, setSortBy] = useState("relevance");
  const comments = useSelector((state) => state.comments);
  const video = useSelector((state) => state.video.currentVideo);
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
    if (
      video &&
      comments.hasError?.data?.error?.errors[0].reason === "commentsDisabled"
    ) {
      return (
        <p
          style={{ textAlign: "center", fontSize: "1.4rem", padding: "3rem 0" }}
        >
          Comments are turned off
        </p>
      );
    }
    return "";
  }

  return <Comments video={video} sortBy={sortBy} setSortBy={setSortBy} />;
};

export default CommentsContainer;
