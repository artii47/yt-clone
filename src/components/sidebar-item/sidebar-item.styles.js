import styled from "styled-components";

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: #e5e5e5;
  padding: 0 2.4rem;
  margin-top: 1.2rem;
  :hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const SidebarItemName = styled.p`
  font-size: 1.5rem;
`;

export const SidebarItemSvg = styled.div`
  width: 3rem;
  height: 3rem;
  fill: red;
`;
