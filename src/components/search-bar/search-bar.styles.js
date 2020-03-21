import styled from "styled-components";

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
  width: 80rem;
  height: 4.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0rem 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
  font-size: 2.5rem;
`;

export const SearchBarButton = styled.button`
  height: 4.5rem;
  width: 10rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
`;
