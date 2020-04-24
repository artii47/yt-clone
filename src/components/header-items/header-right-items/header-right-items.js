import React from "react";
import * as Styled from "../header-items.styles";
import { primaryItems } from "./header-right-items.data";
import SignInButton from "../../buttons/sign-in-button/sign-in-button";

const HeaderRightItems = () => {
  return (
    <Styled.HeaderItems>
      {primaryItems.map(({ Svg, name }) => {
        return (
          <Svg
            key={name}
            style={{
              width: "2.4rem",
              height: "2.4rem",
              fill: "#606060",
              margin: "0 1rem",
            }}
          />
        );
      })}
      <SignInButton />
    </Styled.HeaderItems>
  );
};

export default HeaderRightItems;
