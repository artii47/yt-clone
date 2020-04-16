import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./searched-channel-item.styles";

const SearchedChannelItem = ({ channelSnippet }) => {
  return (
    <Styled.SearchedChannelItem>
      <Styled.SearchedChannelItemImg
        src={channelSnippet.thumbnails.medium.url}
      />
      <Styled.SearchedChannelItemDescription>
        <Styled.SearchedChannelItemTitle>
          {channelSnippet.title}
        </Styled.SearchedChannelItemTitle>
        <Styled.SearchedChannelItemStats>
          123.123 subs &bull; 123 videos
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
