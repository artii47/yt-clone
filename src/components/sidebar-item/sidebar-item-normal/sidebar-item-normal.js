import React from "react";
import PropTypes from "prop-types";
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

SidebarItemNormal.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    Svg: PropTypes.elementType,
  }).isRequired,
  active: PropTypes.bool.isRequired,
};
