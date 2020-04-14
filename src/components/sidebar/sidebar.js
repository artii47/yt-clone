import React from "react";
import { useMediaQuery } from "react-responsive";
import * as Styled from "./sidebar.styles";
import SidebarMainItems from "../sidebar-items/sidebar-main-items/sidebar-main-items";
import SidebarBestOfYtItems from "../sidebar-items/sidebar-best-of-yt-items/sidebar-best-of-yt-items";
import SidebarMoreFromYt from "../sidebar-items/sidebar-more-from-yt-items/sidebar-more-from-yt-items";
import SidebarSmall from "./sidebar-small";

const Sidebar = () => {
  const isSmallerSize = useMediaQuery({
    query: "(min-width: 1201px)",
  });
  const isBiggerSize = useMediaQuery({
    query: "(max-width: 1200px)",
  });
  return (
    <>
      {isSmallerSize && (
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
