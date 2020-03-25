import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Styled from "./search-bar.styles";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const params = useParams();
  useEffect(() => {
    if (params.searchTerm) {
      setSearchTerm(params.searchTerm);
      return;
    }
  }, []);
  const onSubmit = e => {
    e.preventDefault();
    if (!searchTerm) {
      return;
    }
    history.push(`/search_query=${searchTerm}`);
  };
  const onChange = e => {
    setSearchTerm(e.target.value);
  };
  return (
    <Styled.SearchBar onSubmit={onSubmit}>
      <Styled.SearchBarInput
        onChange={onChange}
        value={searchTerm}
        placeholder="Search"
      />
      <Styled.SearchBarButton>
        <Styled.SearchBarSearchSVG />
      </Styled.SearchBarButton>
    </Styled.SearchBar>
  );
};

export default SearchBar;
