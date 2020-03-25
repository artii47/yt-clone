import React from "react";
import * as Styled from "./sidebar.styles";
import SidebarItem from "../sidebar-item/sidebar-item";
import sidebarItems from "./sidebar.data";

const Sidebar = () => {
  return (
    <Styled.Sidebar>
      {sidebarItems.map(item => {
        return <SidebarItem item={item} />;
      })}
    </Styled.Sidebar>
  );
};

export default Sidebar;
