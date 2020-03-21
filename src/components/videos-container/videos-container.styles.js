import styled, { css } from "styled-components";

export const VideosContainer = styled.div`
  grid-row: 2/-1;
  grid-column: 2/-1;
  margin: 0 3rem;
  ${props =>
    !props.isItemSearched &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `};
`;
