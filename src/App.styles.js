import styled from "styled-components";

export const App = styled.main`
  display: grid;
  grid-template-columns: 24rem repeat(8, 1fr);
  grid-template-rows: 5.6rem;
  width: 100%;
  height: 100%;
  position: relative;
  @media only screen and (max-width: 62.5em) {
    grid-template-columns: 7.5rem 1fr;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  grid-row: 2/-1;
  grid-column: 1/-1;
`;

export const VideoDetailsAndCommentsWrapper = styled.div`
  width: 130rem;
  padding-right: 2.4rem;
  padding-top: 2.4rem;
  margin-left: 2rem;
  @media only screen and (max-width: 34.375em) {
    padding-right: 2rem;
    padding-top: 2rem;
    margin-left: 2rem;
  }
`;
