import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import * as Styled from "./searched-channel-item.styles";
import { selectChannelFromSearchedVideosStatistics } from "../../selectors/channel.selector";

const SearchedChannelItem = ({ channelSnippet }) => {
  const channelStatitics = useSelector(
    selectChannelFromSearchedVideosStatistics
  );
  const renderChannelStats = () => {
    if (channelStatitics) {
      return (
        <>
          {`${channelStatitics.subscriberCount} subscribers`}
          &nbsp; &bull; &nbsp;
          {`${channelStatitics.videoCount} videos`}
        </>
      );
    }
  };
  return (
    <Styled.SearchedChannelItem>
      <Styled.SearchedChannelItemImg
        src={channelSnippet.thumbnails.medium.url}
        alt={channelSnippet.title}
      />
      <Styled.SearchedChannelItemDescription>
        <Styled.SearchedChannelItemTitle>
          {channelSnippet.title}
        </Styled.SearchedChannelItemTitle>
        <Styled.SearchedChannelItemStats>
          {renderChannelStats()}
        </Styled.SearchedChannelItemStats>
        <Styled.SearchedChannelItemAbout>
          {channelSnippet.description}
        </Styled.SearchedChannelItemAbout>
      </Styled.SearchedChannelItemDescription>
      <Styled.SearchedChannelItemButton subscribe>
        SUBSCRIBE
      </Styled.SearchedChannelItemButton>
    </Styled.SearchedChannelItem>
  );
};

export default SearchedChannelItem;

SearchedChannelItem.propTypes = {
  channelSnippet: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnails: PropTypes.shape({
      medium: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};
