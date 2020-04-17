import styled from "styled-components";

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
