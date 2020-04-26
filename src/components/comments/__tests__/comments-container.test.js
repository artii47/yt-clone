import React from "react";
import { renderWithProvider } from "../../../helpers/renderWithProvider";
import CommentsContainer from "../comments-container";
import withError from "../../../hocs/withError";
import { BrowserRouter } from "react-router-dom";

test("should render message when a video has disabled comments", () => {
  const data = {
    comments: {
      hasError: {
        data: {
          error: {
            errors: [{ reason: "commentsDisabled" }],
          },
        },
      },
    },
  };
  const Component = CommentsContainer;
  const ComponentWithHOC = withError(Component, "comments");
  const { getByTestId } = renderWithProvider(
    <BrowserRouter>
      <ComponentWithHOC />
    </BrowserRouter>,
    data
  );
  const errorMessage = getByTestId("comments-off-message");
  expect(errorMessage).toHaveTextContent(/comments are turned off/i);
});
