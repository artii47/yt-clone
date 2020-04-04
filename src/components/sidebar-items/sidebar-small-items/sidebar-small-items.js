import React from "react";
import * as Styled from "../sidebar-items.styles";
import { primaryItems } from "./sidebar-small-items.data";
import SidebarSmallItem from "../../sidebar-item/sidebar-item-small/sidebar-item-small";
import { useLocation } from "react-router-dom";

const SidebarSmallItems = () => {
  const location = useLocation();
  return (
    <div>
      <Styled.SidebarItemsPrimaryWrapper>
        {primaryItems.map((item) => {
          return (
            <SidebarSmallItem
              active={location.pathname === item.path}
              item={item}
            />
          );
        })}
      </Styled.SidebarItemsPrimaryWrapper>
    </div>
  );
};

export default SidebarSmallItems;
