import React from "react";
import styled from "styled-components";
import * as Styled from "./sidebar-item-small.styles";

const SidebarItemSmall = ({ item, active }) => {
  const SvgIcon = styled(item.Svg)`
    width: 2.4rem !important;
    height: 2.4rem !important;
    margin-bottom: 0.6rem;
    fill: ${active ? "red" : "#606060"};
  `;
  return (
    <Styled.SidebarItemSmall active={active}>
      <SvgIcon />
      <Styled.SidebarItemSmallText>{item.name}</Styled.SidebarItemSmallText>
    </Styled.SidebarItemSmall>
  );
};

export default SidebarItemSmall;
