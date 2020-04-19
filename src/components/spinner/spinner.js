import React from "react";
import * as Styled from "./spinner.styles";

const Spinner = (props) => {
  return (
    <Styled.SpinnerOuter {...props}>
      <Styled.SpinnerInner {...props} />
    </Styled.SpinnerOuter>
  );
};

export default Spinner;
