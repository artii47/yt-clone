import React from "react";
import CustomButton from "../components/buttons/custom-button/custom-button";

export const renderTextWithShowMoreButton = (
  numbersOfWordsToShorten,
  text,
  showMore,
  setShowMore
) => {
  if (text.split(" ").length > numbersOfWordsToShorten) {
    return (
      <>
        {!showMore
          ? `${text.split(" ").slice(0, numbersOfWordsToShorten).join(" ")}...`
          : text}
        <br />
        <CustomButton showMore onClick={() => setShowMore(!showMore)}>
          {!showMore ? "Read more" : "Show less"}
        </CustomButton>
      </>
    );
  }
  return text;
};
