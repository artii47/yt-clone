import React from "react";
import { render } from "@testing-library/react";
import CommentItem from "../comment-item";

test("dont show likeCount if it equals 0", () => {
  const { getByTestId } = render(
    <CommentItem
      authorChannelImage="https://i.ytimg.com/vi/aE5IEDMXG7k/mqdefault.jpg"
      authorName="jake"
      text="A nice comment"
      likeCount={0}
      publishedAt="2020-04-23T16:00:09.000Z"
    />
  );
  const element = getByTestId("like-count");
  expect(element).toBeEmpty();
});
