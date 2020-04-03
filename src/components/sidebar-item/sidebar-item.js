import React from "react";
import * as Styled from "./sidebar-item.styles";
import styled from "styled-components";

const SidebarItem = ({ item, active }) => {
  const { img } = item;
  const SvgIcon = styled(item.Svg)`
    width: 2.4rem !important;
    height: 100% !important;
    margin-right: 2.4rem;
  `;
  return (
    <Styled.SidebarItem active={active}>
      {img ? <Styled.SidebarItemImg src={img} /> : <SvgIcon />}
      <Styled.SidebarItemName>{item.name}</Styled.SidebarItemName>
    </Styled.SidebarItem>
  );
};

export default SidebarItem;
