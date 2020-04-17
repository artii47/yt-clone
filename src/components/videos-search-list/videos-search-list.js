import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSearchVideosAsync,
  resetCurrentVideos,
  fetchSearchVideosNextPageAsync,
  resetChannel,
} from "../../reducers/searchVideosReducer";
import * as Styled from "./videos-search-list.styles";
import VideoSearchItem from "../video-search-item/video-search-item";
import useScrollEvent from "../../hooks/useScrollEvent";
import Spinner from "../spinner/spinner";
import SearchedChannelItem from "../searched-channel-item/searched-channel-item";
import withError from "../../hocs/withError";

const VideosSearchList = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.searchVideos.videos);
  const isLoading = useSelector((state) => state.searchVideos.isLoading);
  const channel = useSelector((state) => state.searchVideos.channel);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSearchVideosAsync(params.searchTerm));
    return () => {
      dispatch(resetCurrentVideos());
      dispatch(resetChannel());
    };
  }, [params.searchTerm, dispatch]);
  useScrollEvent(
    true,
    videos,
    "video-list",
    fetchSearchVideosNextPageAsync,
    params.searchTerm
  );
  const renderNotFound = () => {
    return (
      <Styled.VideosSearchListNotFound>
        <Styled.VideosSearchListNotFoundSvg />
        No Results found
      </Styled.VideosSearchListNotFound>
    );
  };
  const renderVideos = () => {
    if (!videos.items) {
      return "";
    }

    return videos.items.map((video) => {
      return (
        <VideoSearchItem
          key={video.id}
          title={video.snippet.title}
          imgUrl={video.snippet.thumbnails.medium.url}
          channelTitle={video.snippet.channelTitle}
          id={video.id}
          viewsCount={video.statistics ? video.statistics.viewCount : ""}
          publishDate={video.snippet.publishedAt}
          description={video.snippet.description}
        />
      );
    });
  };
  return (
    <>
      <Styled.VideosSearchList id="video-list">
        <Styled.Container>
          <Styled.Filters>
            <Styled.FilterSVG />
            FILTER
          </Styled.Filters>
          {channel ? (
            <SearchedChannelItem channelSnippet={channel.snippet} />
          ) : (
            ""
          )}
          {renderVideos()}
          {isLoading ? <Spinner /> : ""}
          {!isLoading && !videos.items?.length ? renderNotFound() : ""}
        </Styled.Container>
      </Styled.VideosSearchList>
    </>
  );
};

export default withError(VideosSearchList, "searchVideos");
