import React from "react";
import * as Styled from "./header.styles";
import SearchBar from "../search-bar/search-bar";

const Header = () => {
  return (
    <Styled.Header>
      <SearchBar />
    </Styled.Header>
  );
};

export default Header;
