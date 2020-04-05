import styled from "styled-components";

export const SidebarItemSmall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 0;
  color: ${(props) => (props.active ? "red" : "#646064")};
  @media only screen and (max-width: 50em) {
    padding: 0;
  }
`;

export const SidebarItemSmallText = styled.p`
  font-size: 1.1rem;
`;
