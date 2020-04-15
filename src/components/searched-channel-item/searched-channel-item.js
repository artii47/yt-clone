import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./searched-channel-item.styles";

const SearchedChannelItem = ({ snippet }) => {
  return (
    <Styled.SearchedChannelItem>
      <Styled.SearchedChannelItemImg src={snippet.thumbnails.medium.url} />
      <Styled.SearchedChannelItemDescription>
        <Styled.SearchedChannelItemTitle>
          {snippet.title}
        </Styled.SearchedChannelItemTitle>
        <Styled.SearchedChannelItemStats>
          423.3 subs &bull; 523 videos
        </Styled.SearchedChannelItemStats>
        <Styled.SearchedChannelItemAbout>
          {snippet.description}
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
  snippet: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnails: PropTypes.shape({
      medium: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};
