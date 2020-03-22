import React, { useEffect } from "react";
import * as Styled from "./videos-container.styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSearchVideosAsync,
  fetchPopularVideosAsync
} from "../../reducers/videosReducer";
import VideoItem from "../video-item/video-item";

const VideosContainer = ({ children }) => {
  const params = useParams();
  return (
    <Styled.VideosContainer isItemSearched={!!params.searchTerm}>
      {children}
    </Styled.VideosContainer>
  );
};

export default VideosContainer;
