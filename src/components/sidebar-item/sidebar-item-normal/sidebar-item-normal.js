import React from "react";
import * as Styled from "./sidebar-item-normal.styles";
import styled from "styled-components";

const SidebarItemNormal = ({ item, active }) => {
  const { img } = item;
  const SvgIcon = styled(item.Svg)`
    width: 2.4rem !important;
    height: 100% !important;
    margin-right: 2.4rem;
  `;
  return (
    <Styled.SidebarItemNormal active={active}>
      {img ? <Styled.SidebarItemNormalImg src={img} /> : <SvgIcon />}
      <Styled.SidebarItemNormalName>{item.name}</Styled.SidebarItemNormalName>
    </Styled.SidebarItemNormal>
  );
};

export default SidebarItemNormal;
