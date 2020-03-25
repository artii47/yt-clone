import React from "react";
import * as Styled from "./sidebar-item.styles";
import styled from "styled-components";

const SidebarItem = ({ item }) => {
  const { Svg } = item;
  const SvgIcon = styled(Svg)`
    width: 1.9rem;
    height: 1.9rem;
    margin-right: 2.4rem;
    fill: red;
  `;
  return (
    <Styled.SidebarItem>
      <SvgIcon />
      <Styled.SidebarItemName>{item.name}</Styled.SidebarItemName>
    </Styled.SidebarItem>
  );
};

export default SidebarItem;
