import styled, { css } from "styled-components";

export const VideosContainer = styled.div`
  grid-row: 2/-1;
  grid-column: 2/-1;
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
