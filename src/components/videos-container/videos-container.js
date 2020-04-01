import React from "react";
import * as Styled from "./videos-container.styles";

const VideosContainer = ({ children }) => {
  return <Styled.VideosContainer>{children}</Styled.VideosContainer>;
};

export default VideosContainer;
