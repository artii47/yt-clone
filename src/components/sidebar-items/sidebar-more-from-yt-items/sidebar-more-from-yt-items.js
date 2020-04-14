import React from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "../sidebar-items.styles";
import {
  primaryItems,
  secondaryItems,
} from "./sidebar-more-from-yt-items.data";
import SidebarItem from "../../sidebar-item/sidebar-item-normal/sidebar-item-normal";

const SidebarMoreFromYtItems = () => {
  const location = useLocation();
  return (
    <>
      <Styled.SidebarItemsPrimaryWrapper>
        <Styled.SidebarItemsText>More from youtube</Styled.SidebarItemsText>
        {primaryItems.map((item) => {
          return (
            <SidebarItem
              key={item.name}
              active={location.pathname === item.path}
              item={item}
            />
          );
        })}
      </Styled.SidebarItemsPrimaryWrapper>
      <Styled.SidebarItemsSecondaryWrapper>
        {secondaryItems.map((item) => {
          return (
            <SidebarItem
              key={item.name}
              active={location.pathname === item.path}
              item={item}
            />
          );
        })}
      </Styled.SidebarItemsSecondaryWrapper>
    </>
  );
};

export default SidebarMoreFromYtItems;
