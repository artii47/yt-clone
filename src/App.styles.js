import styled from "styled-components";

export const App = styled.main`
  display: grid;
  grid-template-columns: 24rem repeat(8, 1fr);
  grid-template-rows: 5.6rem;
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
`;
