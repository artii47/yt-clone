import React from "react";
import styled from "styled-components";
import * as Styled from "./sidebar-small-item.styles";

const SidebarSmallItem = ({ item, active }) => {
  const SvgIcon = styled(item.Svg)`
    width: 2.4rem !important;
    height: 2.4rem !important;
    margin-bottom: 0.6rem;
    fill: ${active ? "red" : "#606060"};
  `;
  return (
    <Styled.SidebarSmallItem active={active}>
      <SvgIcon />
      <Styled.SidebarSmallItemText>{item.name}</Styled.SidebarSmallItemText>
    </Styled.SidebarSmallItem>
  );
};

export default SidebarSmallItem;
