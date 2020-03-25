import styled from "styled-components";
import { ReactComponent as SearchSVG } from "../../assets/icons/search.svg";

export const SearchBar = styled.form`
  background-color: #fff;
  width: 100%;
  height: 100%;
  grid-column: 1/-1;
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  width: 57rem;
  height: 3.2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
  font-size: 1.7rem;
  padding-left: 1rem;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

export const SearchBarButton = styled.button`
  height: 3.2rem;
  width: 6.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export const SearchBarSearchSVG = styled(SearchSVG)`
  width: 1.5rem;
  height: 1.5rem;
  fill: #707070;
`;
