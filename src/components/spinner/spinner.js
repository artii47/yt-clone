import React from "react";
import * as Styled from "./spinner.styles";

const Spinner = () => {
  return (
    <Styled.SpinnerOuter>
      <Styled.SpinnerInner></Styled.SpinnerInner>
    </Styled.SpinnerOuter>
  );
};

export default Spinner;
