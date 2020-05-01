import styled from "styled-components";

export const CommentItemShowMoreRepliesText = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: #065fd4;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  :before {
    display: inline-block;
    content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet' focusable='false' class='style-scope yt-icon' style='fill: rgb(6, 95, 212);'><g class='style-scope yt-icon'><path fill='none' d='M0 0h24v24H0V0z' class='style-scope yt-icon'/><path d='M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z' class='style-scope yt-icon'/></g></svg>");
    height: 2rem !important;
    width: 2rem !important;
    margin-right: 1.5rem;
  }
`;
