import styled from "styled-components";

export const App = styled.main`
  display: grid;
  grid-template-columns: 24rem repeat(8, 1fr);
  grid-template-rows: 5.6rem;
  width: 100%;
  height: 100%;
  position: relative;
  @media only screen and (max-width: 62.5em) {
    grid-template-columns: 100vw;
  }
`;

export const Container = styled.div`
  grid-row: 2/-1;
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
`;

export const VideoDetailsAndCommentsWrapper = styled.div`
  width: 130rem;
  padding-right: 2.4rem;
  padding-top: 2.4rem;
  margin-left: 2rem;
  @media only screen and (max-width: 25em) {
    padding-right: 1rem;
    padding-top: 1rem;
    margin-left: 1rem;
  }
`;
