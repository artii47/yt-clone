import styled from "styled-components";

export const VideosPopularListWrapper = styled.div`
  grid-row: 2/-1;
  grid-column: 2/-1;
  margin: 5rem 6rem;
  flex-grow: 1;
  @media only screen and (max-width: 75em) {
    grid-column: 1/-1;
    margin-left: 10.5rem;
    margin-right: 4rem;
  }
  @media only screen and (max-width: 50em) {
    margin-top: 5rem;
    margin: 0 0;
    margin-top: 3rem;
  }
`;
export const VideosPopularList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
