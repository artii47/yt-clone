import React from "react";
import * as Styled from "./custom-button.styles";

const CustomButton = ({ props, children }) => {
  return <Styled.CustomButton {...props}>{children}</Styled.CustomButton>;
};

export default CustomButton;
