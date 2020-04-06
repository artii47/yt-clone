import React from "react";
import * as Styled from "./header.styles";
import SearchBar from "../search-bar/search-bar";
import HeaderRightItems from "../header-items/header-right-items/header-right-items";
import HeaderLeftItems from "../header-items/header-left-items/header-left-items";

const Header = () => {
  return (
    <Styled.Header>
      <HeaderLeftItems />
      <SearchBar />
      <HeaderRightItems />
    </Styled.Header>
  );
};

export default Header;
