import React, { useEffect, useState } from "react";
import {
  fetchCommentsAsync,
  fetchCommentsNextPageAsync,
} from "../../reducers/commentsReducer";
import Comments from "./comments";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useScrollEvent from "../../hooks/useScrollEvent";

const CommentsContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [sortBy, setSortBy] = useState("relevance");
  const comments = useSelector((state) => state.comments.currentVideoComments);
  const video = useSelector((state) => state.video.currentVideo);
  useEffect(() => {
    dispatch(fetchCommentsAsync(params.videoId, sortBy));
  }, [sortBy, params.videoId, dispatch]);
  useScrollEvent(
    true,
    comments,
    "comments",
    fetchCommentsNextPageAsync,
    params.videoId,
    sortBy
  );
  if (!comments) {
    return "";
  }

  return <Comments video={video} sortBy={sortBy} setSortBy={setSortBy} />;
};

export default CommentsContainer;
