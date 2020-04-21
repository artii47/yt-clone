import React from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./error-page.styles";

const ErrorPage = () => {
  const params = useParams();
  const renderErrorMessage = () => {
    if (
      params.errorMessage === "quotaExceeded" ||
      params.errorMessage === "dailyLimitExceeded"
    ) {
      return (
        <Styled.ErrorMessage>
          Sorry, queries per day exceeded.
          <br />
          Reset at 9:00 AM.
        </Styled.ErrorMessage>
      );
    }
    return <Styled.ErrorMessage>Something went wrong</Styled.ErrorMessage>;
  };
  return (
    <Styled.ErrorWrapper>
      <Styled.ErrorContentWrapper>
        <img
          style={{ width: "40rem", height: "40rem" }}
          alt="error"
          src="https://i.imgur.com/yW2W9SC.png"
        />
        {renderErrorMessage()}
      </Styled.ErrorContentWrapper>
    </Styled.ErrorWrapper>
  );
};

export default ErrorPage;
