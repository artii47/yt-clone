import styled, { css } from "styled-components";

export const VideosContainer = styled.div`
  grid-row: 2/-1;
  grid-column: 2/-1;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(7, min-content) min-content;
  ${props =>
    props.isItemSearched &&
    css`
      grid-row: 2/-1;
      grid-column: 7 / span 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `};
  ${props =>
    props.params.videoId &&
    css`
      grid-column: 1/-1;
    `};
`;
