import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 5.6rem;
  padding: 0 1.6rem;
  background-color: #fff;
  z-index: 999;
  @media only screen and (max-width: 50em) {
    justify-content: space-between;
  }
`;
