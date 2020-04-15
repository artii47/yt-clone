import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Styled from "./sort-options.styles";

const SortOptions = ({ sortBy, setSortBy }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <Styled.SortOptions onClick={() => setShowOptions(!showOptions)}>
      <Styled.SortOptionsFlexWrapper>
        <Styled.SortIcon />
        SORT BY
      </Styled.SortOptionsFlexWrapper>
      {showOptions ? (
        <Styled.SortOptionsBox>
          <Styled.SortOptionsOption
            onClick={() => setSortBy("relevance")}
            active={sortBy === "relevance"}
          >
            Top comments
          </Styled.SortOptionsOption>
          <Styled.SortOptionsOption
            onClick={() => setSortBy("time")}
            active={sortBy === "time"}
          >
            Newest first
          </Styled.SortOptionsOption>
        </Styled.SortOptionsBox>
      ) : (
        ""
      )}
    </Styled.SortOptions>
  );
};

export default SortOptions;

SortOptions.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};
