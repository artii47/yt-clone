import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const withError = (Comp, data) => (props) => {
  const hasError = useSelector((state) => eval(`state.${data}.hasError`));
  const history = useHistory();
  if (hasError) {
    if (hasError.data.error.errors[0].reason !== "commentsDisabled") {
      history.push(`/error/${hasError.data.error.errors[0].reason}`);
    }
  }
  return <Comp {...props} />;
};

export default withError;
