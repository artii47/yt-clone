import React, { useEffect } from "react";
import { fetchVideoAsync } from "../../reducers/videoReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Styled from "./video-details.styles";

const VideoDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const url = `http://www.youtube.com/embed/${params.videoId}`;
  const video = useSelector(state => state.video.currentVideo);
  console.log("video", video);
  useEffect(() => {
    dispatch(fetchVideoAsync(params.videoId));
  }, [params]);
  return (
    <Styled.VideoDetails>
      <Styled.VideoDetailsIframe
        id="player"
        type="text/html"
        src={url}
        frameBorder="0"
      />
      <Styled.VideoDetailsTitle>
        {video ? video.items[0].snippet.title : ""}
      </Styled.VideoDetailsTitle>
      <Styled.VideoDetailsPublishDate>
        {video ? video.items[0].snippet.publishedAt.slice(0, 10) : ""}
      </Styled.VideoDetailsPublishDate>
    </Styled.VideoDetails>
  );
};

export default VideoDetails;
