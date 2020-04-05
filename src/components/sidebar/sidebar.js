import React from "react";
import * as Styled from "./sidebar.styles";
import SidebarMainItems from "../sidebar-items/sidebar-main-items/sidebar-main-items";
import SidebarBestOfYtItems from "../sidebar-items/sidebar-best-of-yt-items/sidebar-best-of-yt-items";
import SidebarMoreFromYt from "../sidebar-items/sidebar-more-from-yt-items/sidebar-more-from-yt-items";
import { useMediaQuery } from "react-responsive";
import SidebarSmall from "./sidebar-small";

const Sidebar = () => {
  const isSmallerSize = useMediaQuery({
    query: "(min-device-width: 1201px)",
  });
  const isBiggerSize = useMediaQuery({
    query: "(max-device-width: 1200px)",
  });
  const con = true;
  return (
    <>
      {isSmallerSize && con && (
        <Styled.Sidebar>
          <>
            <SidebarMainItems />
            <SidebarBestOfYtItems />
            <SidebarMoreFromYt />
          </>
        </Styled.Sidebar>
      )}
      {isBiggerSize && (
        <>
          <SidebarSmall />
        </>
      )}
    </>
  );
};

export default Sidebar;
