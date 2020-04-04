import React from "react";
import * as Styled from "./sidebar-small.styles";
import SidebarSmallItems from "../sidebar-items/sidebar-small-items/sidebar-small-items";

const SidebarSmall = () => {
  return (
    <Styled.SidebarSmall>
      <SidebarSmallItems />
    </Styled.SidebarSmall>
  );
};

export default SidebarSmall;
