import React from "react";
import * as Styled from "./search-bar.styles";

const SearchBar = () => {
  return (
    <Styled.SearchBar>
      <Styled.SearchBarInput />
      <Styled.SearchBarButton>search</Styled.SearchBarButton>
    </Styled.SearchBar>
  );
};

export default SearchBar;
