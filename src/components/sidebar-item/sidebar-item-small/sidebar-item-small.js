import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./sidebar-item-small.styles";

const SidebarItemSmall = ({ item: { Svg, name }, active }) => {
  const styles = {
    fill: `${active ? "red" : "#606060"}`,
    marginRight: "0",
    width: "2.4rem",
    height: "2.4rem",
  };
  return (
    <Styled.SidebarItemSmall active={active}>
      <Svg style={styles} />
      <Styled.SidebarItemSmallText>{name}</Styled.SidebarItemSmallText>
    </Styled.SidebarItemSmall>
  );
};

export default SidebarItemSmall;

SidebarItemSmall.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    Svg: PropTypes.elementType,
  }).isRequired,
  active: PropTypes.bool.isRequired,
};
