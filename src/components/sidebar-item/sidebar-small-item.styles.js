import styled from "styled-components";

export const SidebarSmallItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 0;
  color: ${(props) => (props.active ? "red" : "#646064")};
`;

export const SidebarSmallItemText = styled.p`
  font-size: 1.1rem;
`;
