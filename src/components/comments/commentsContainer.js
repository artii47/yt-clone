import React, { useEffect, useState } from "react";
import {
  fetchCommentsAsync,
  fetchCommentsNextPageAsync
} from "../../reducers/commentsReducer";
import Comments from "./comments";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CommentsContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [sortBy, setSortBy] = useState("relevance");
  const comments = useSelector(state => state.comments.currentVideoComments);
  const isLoading = useSelector(state => state.comments.isLoading);
  const video = useSelector(state => state.video.currentVideo);
  useEffect(() => {
    dispatch(fetchCommentsAsync(params.videoId, sortBy));
  }, [sortBy, params.videoId, dispatch]);
  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);

    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [comments]);

  const isBottom = el => {
    if (comments) {
      return el.getBoundingClientRect().bottom <= window.innerHeight + 100;
    }
  };

  const trackScrolling = () => {
    console.log("fds");
    const element = document.getElementById("comments");
    if (isBottom(element)) {
      if (comments.nextPageToken) {
        dispatch(
          fetchCommentsNextPageAsync(
            params.videoId,
            comments.nextPageToken,
            sortBy
          )
        );
      } else {
        document.removeEventListener("scroll", trackScrolling);
      }
      if (!isLoading) {
        document.removeEventListener("scroll", trackScrolling);
      }
    }
  };
  if (!comments) {
    return "";
  }
  return <Comments video={video} sortBy={sortBy} setSortBy={setSortBy} />;
};

export default CommentsContainer;
