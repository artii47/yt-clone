import styled, { css } from "styled-components";

export const VideoList = styled.div`
  grid-row: 2/-1;
  grid-column: 2/-1;
  margin: 5rem 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, min-content));
  grid-template-rows: min-content;
  grid-auto-flow: row;
  grid-gap: 1rem;
  ${props =>
    !props.isItemSearched &&
    css`
      justify-content: space-evenly;
    `}
  ${props =>
    props.isItemSearched &&
    css`
      grid-row: 2/-1;
      grid-column: 3/10;
      display: flex;
      flex-direction: column;
      margin: 3rem -7rem;
      justify-content: flex-start;
    `}
`;
