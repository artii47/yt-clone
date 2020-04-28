import React from "react";
import CustomButton from "../components/buttons/custom-button/custom-button";

export const renderTextWithShowMoreButton = (
  numbersOfWordsToShorten,
  text,
  showMore,
  setShowMore,
  wordsToSubtract
) => {
  const arrOfWords = text.split(" ");
  if (arrOfWords.length - wordsToSubtract > numbersOfWordsToShorten) {
    return (
      <>
        {!showMore
          ? `${arrOfWords.slice(0, numbersOfWordsToShorten).join(" ")}...`
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
