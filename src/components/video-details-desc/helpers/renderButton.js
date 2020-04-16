import React from "react";
import * as Styled from "../video-details-desc.styles";

export const renderButton = (videoDesc, showMore, setShowMore) => {
  if (videoDesc.split(" ").length > 40) {
    return (
      <Styled.VideoDetailsDescButton onClick={() => setShowMore(!showMore)}>
        {!showMore ? "SHOW MORE" : "SHOW LESS"}
      </Styled.VideoDetailsDescButton>
    );
  }
  return "";
};
