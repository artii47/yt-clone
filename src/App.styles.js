import styled from "styled-components";

export const App = styled.main`
  display: grid;
  grid-template-columns: 24rem repeat(8, 1fr);
  grid-template-rows: 5.6rem;
  width: 100vw;
  height: 100%;
  position: relative;
  @media only screen and (max-width: 62.5em) {
    grid-template-columns: 100vw;
  }
`;
