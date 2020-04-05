import React from "react";
import { primaryItems } from "./sidebar-small-items.data";
import SidebarSmallItem from "../../sidebar-item/sidebar-item-small/sidebar-item-small";
import { useLocation } from "react-router-dom";

const SidebarSmallItems = () => {
  const location = useLocation();
  return (
    <>
      {primaryItems.map((item) => {
        return (
          <SidebarSmallItem
            active={location.pathname === item.path}
            item={item}
          />
        );
      })}
    </>
  );
};

export default SidebarSmallItems;
