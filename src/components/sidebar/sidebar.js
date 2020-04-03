import React from "react";
import * as Styled from "./sidebar.styles";
import SidebarMainItems from "../sidebar-items/sidebar-main-items/sidebar-main-items";
import SidebarBestOfYtItems from "../sidebar-items/sidebar-best-of-yt-items/sidebar-best-of-yt-items";
import SidebarMoreFromYt from "../sidebar-items/sidebar-more-from-yt-items/sidebar-more-from-yt-items";

const Sidebar = () => {
  return (
    <Styled.Sidebar>
      <SidebarMainItems />
      <SidebarBestOfYtItems />
      <SidebarMoreFromYt />
    </Styled.Sidebar>
  );
};

export default Sidebar;
