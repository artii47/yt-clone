import React from "react";
import { useLocation } from "react-router-dom";
import { primaryItems } from "./sidebar-small-items.data";
import SidebarSmallItem from "../../sidebar-item/sidebar-item-small/sidebar-item-small";

const SidebarSmallItems = () => {
  const location = useLocation();
  return (
    <>
      {primaryItems.map((item) => {
        return (
          <SidebarSmallItem
            key={item.name}
            active={location.pathname === item.path}
            item={item}
          />
        );
      })}
    </>
  );
};

export default SidebarSmallItems;
