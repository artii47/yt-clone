import React, { useEffect } from "react";
import * as Styled from "./videos-container.styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearchVideosAsync } from "../../reducers/videosReducer";
import VideoItem from "../video-item/video-item";

const VideosContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.videos);
  const params = useParams();
  useEffect(() => {
    console.log("");
    if (params.searchTerm) {
      dispatch(fetchSearchVideosAsync(params.searchTerm));
    }
  }, [params.searchTerm]);
  // console.log(params);
  // console.log("videos", videos.title);
  const renderVideos = () => {
    if (!videos) {
      return <div>LOADING</div>;
    }

    return videos.map(video => {
      return (
        <VideoItem
          title={video.snippet.title}
          imgUrl={video.snippet.thumbnails.medium.url}
        />
      );
    });
  };

  return <Styled.VideosContainer>{renderVideos()}</Styled.VideosContainer>;
};

export default VideosContainer;
