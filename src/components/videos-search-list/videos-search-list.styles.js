import styled from "styled-components";
import { ReactComponent as Filter } from "../../assets/icons/filter.svg";
import { ReactComponent as NotFoundSVG } from "../../assets/icons/not-found.svg";

export const VideosSearchList = styled.div`
  grid-row: 2/-1;
  grid-column: 2/-1;
  width: 100%;
  padding: 2.3rem 2.4rem;
  @media only screen and (max-width: 75em) {
    grid-column: 1/-1;
    margin-left: 7.5rem;
  }
  @media only screen and (max-width: 62.5em) {
    margin-top: 5.6rem;
  }
  @media only screen and (max-width: 50em) {
    margin: 0 0;
  }
`;

export const Container = styled.div`
  max-width: 128rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Filters = styled.div`
  border-bottom: 1px solid #e5e5e5;
  max-width: 86rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: #616161;
  padding-bottom: 0.7rem;
`;

export const FilterSVG = styled(Filter)`
  width: 2.4rem !important;
  height: 2.4rem !important;
  fill: #606060;
  margin-right: 1rem;
`;

export const VideosSearchListNotFound = styled.div`
  max-width: 86rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  font-size: 2.5rem;
`;

export const VideosSearchListNotFoundSvg = styled(NotFoundSVG)`
  width: 100% !important;
  height: 100% !important;
  margin-bottom: 1rem;
`;
