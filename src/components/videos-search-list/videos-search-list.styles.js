import styled from "styled-components";

export const VideosSearchList = styled.div`
  grid-row: 2/-1;
  grid-column: 2/-1;
  width: 100%;
  padding: 1.6rem 2.4rem;
  @media only screen and (max-width: 75em) {
    grid-column: 1/-1;
    margin-left: 7.5rem;
  }
  @media only screen and (max-width: 62.5em) {
    margin-top: 5.6rem;
  }
`;

export const Container = styled.div`
  max-width: 131.5rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
