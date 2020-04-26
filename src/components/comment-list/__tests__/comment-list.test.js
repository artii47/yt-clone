import React from "react";
import { renderWithProvider } from "../../../helpers/renderWithProvider";
import CommentList from "../comment-list";
import "@testing-library/jest-dom/extend-expect";

test("should render spinner when isLoading", () => {
  const data = {
    comments: {
      isLoading: true,
      currentVideoComments: null,
    },
  };
  const { getByTestId } = renderWithProvider(<CommentList />, data);
  const spinner = getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});

test("should render nothing when there is no comments", () => {
  const data = {
    comments: {
      currentVideoComments: {
        items: [],
      },
    },
  };
  const { container } = renderWithProvider(<CommentList />, data);
  expect(container).toBeEmpty();
});

test("should render comments", () => {
  const fakeData = {
    comments: {
      currentVideoComments: {
        items: [
          {
            id: "1",
            snippet: {
              topLevelComment: {
                snippet: {
                  authorDisplayName: "Views Frombelow",
                  authorProfileImageUrl:
                    "https://yt3.ggpht.com/a/AATXAJyT8vtufpCJuTd4Y-m7vlS2d0SO5_b3g1PTJQ=s48-c-k-c0xffffffff-no-rj-mo",
                  videoId: "8Qfy-UvCmHE",
                  textOriginal: "My awesome comment.",
                  likeCount: 1078,
                  publishedAt: "2020-04-24T17:47:06.000Z",
                },
              },
              canReply: true,
              totalReplyCount: 41,
              isPublic: true,
            },
          },
          {
            id: "2",
            snippet: {
              topLevelComment: {
                snippet: {
                  authorDisplayName: "Views Frombelow",
                  authorProfileImageUrl:
                    "https://yt3.ggpht.com/a/AATXAJyT8vtufpCJuTd4Y-m7vlS2d0SO5_b3g1PTJQ=s48-c-k-c0xffffffff-no-rj-mo",
                  videoId: "8Qfy-UvCmHE",
                  textOriginal: "My super comment",
                  likeCount: 1078,
                  publishedAt: "2020-04-24T17:47:06.000Z",
                },
              },
              canReply: true,
              totalReplyCount: 41,
              isPublic: true,
            },
          },
        ],
      },
    },
  };
  const { getAllByTestId } = renderWithProvider(<CommentList />, fakeData);
  const commentTexts = getAllByTestId("comment").map(
    (comment) => comment.textContent
  );
  const fakeCommentTexts = fakeData.comments.currentVideoComments.items.map(
    (item) => item.snippet.topLevelComment.snippet.textOriginal
  );
  expect(commentTexts).toEqual(fakeCommentTexts);
});
