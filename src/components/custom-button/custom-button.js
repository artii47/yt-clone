import React from "react";
import * as Styled from "./custom-button.styles";

const CustomButton = (props) => {
  return <Styled.CustomButton {...props}>{props.children}</Styled.CustomButton>;
};

export default CustomButton;
