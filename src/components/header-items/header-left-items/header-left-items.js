import React from "react";
import * as Styled from "./header-left-items.styles";
import { useHistory } from "react-router-dom";

const HeaderLeftItems = () => {
  const history = useHistory();
  return (
    <Styled.HeaderLeftItems>
      <Styled.SidebarIcon />
      <Styled.YouTubeLogo
        onClick={() => {
          history.push("/");
          window.scrollTo(0, 0);
        }}
      />
    </Styled.HeaderLeftItems>
  );
};

export default HeaderLeftItems;
