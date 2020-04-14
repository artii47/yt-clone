import React from "react";
import * as Styled from "./searched-channel-item.styles";

const SearchedChannelItem = ({ channel }) => {
  return (
    <Styled.SearchedChannelItem>
      <Styled.SearchedChannelItemImg
        src={channel.snippet.thumbnails.medium.url}
      />
      <Styled.SearchedChannelItemDescription>
        <Styled.SearchedChannelItemTitle>
          {channel.snippet.title}
        </Styled.SearchedChannelItemTitle>
        <Styled.SearchedChannelItemStats>
          423.3 subs &bull; 523 videos
        </Styled.SearchedChannelItemStats>
        <Styled.SearchedChannelItemAbout>
          {channel.snippet.description}
        </Styled.SearchedChannelItemAbout>
      </Styled.SearchedChannelItemDescription>
      <Styled.SearchedChannelItemButton subscribe>
        SUBSCRIBE
      </Styled.SearchedChannelItemButton>
    </Styled.SearchedChannelItem>
  );
};

export default SearchedChannelItem;
