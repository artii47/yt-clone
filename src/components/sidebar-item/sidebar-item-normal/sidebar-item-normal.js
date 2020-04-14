import React from "react";
import * as Styled from "./sidebar-item-normal.styles";

const SidebarItemNormal = ({ item, active }) => {
  const { img, Svg } = item;
  return (
    <Styled.SidebarItemNormal active={active}>
      {img ? <Styled.SidebarItemNormalImg src={img} /> : <Svg />}
      <Styled.SidebarItemNormalName>{item.name}</Styled.SidebarItemNormalName>
    </Styled.SidebarItemNormal>
  );
};

export default SidebarItemNormal;
