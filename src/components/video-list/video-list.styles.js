import styled, { css } from "styled-components";

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5rem 10rem;
  ${props =>
    !props.isItemSearched &&
    css`
      margin: 8rem 10rem;
      justify-content: space-evenly;
    `}
`;
