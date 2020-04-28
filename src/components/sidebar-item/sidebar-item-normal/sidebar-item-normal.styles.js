import styled from "styled-components";

export const SidebarItemNormal = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 2.4rem;
  background-color: ${(props) => (props.active ? "#e5e5e5" : "transparent")};
  cursor: pointer;
  svg {
    fill: ${(props) => (props.active ? "red" : "#606060")};
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const SidebarItemNormalName = styled.p`
  font-size: 1.4rem;
`;

export const SidebarItemNormalSvg = styled.div`
  width: 3rem;
  height: 3rem;
  fill: red;
`;

export const SidebarItemNormalImg = styled.img`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  margin-right: 2.4rem;
`;
