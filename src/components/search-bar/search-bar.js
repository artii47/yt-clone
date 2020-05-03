import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Styled from "./search-bar.styles";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      return;
    }
    history.push(`/search_query=${searchTerm}`);
  };
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Styled.SearchBar onSubmit={onSubmit}>
      <Styled.SearchBarInput
        onChange={onChange}
        value={searchTerm}
        placeholder="Search"
        aria-label="search"
      />
      <Styled.SearchBarButton title="Submit">
        <Styled.SearchBarSearchSVG />
      </Styled.SearchBarButton>
    </Styled.SearchBar>
  );
};

export default SearchBar;
