import React from "react";
import * as Styled from "./videos-container.styles";
import { useParams } from "react-router-dom";

const VideosContainer = ({ children }) => {
  const params = useParams();
  return (
    <Styled.VideosContainer
      params={params}
      isItemSearched={!!params.searchTerm}
    >
      {children}
    </Styled.VideosContainer>
  );
};

export default VideosContainer;
