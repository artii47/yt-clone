import styled, { css } from "styled-components";

export const VideoList = styled.div`
  grid-row: 2/-1;
  grid-column: 2/-1;
  margin: 5rem 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, min-content));
  grid-auto-flow: column;
  grid-auto-flow: row;
  ${props =>
    !props.isItemSearched &&
    css`
      margin: 8rem 10rem;
      justify-content: space-evenly;
    `}
  ${props =>
    props.isItemSearched &&
    css`
      display: flex;
      flex-wrap: wrap;
      margin: 3rem 4rem;
      justify-content: flex-start;
    `}
`;
