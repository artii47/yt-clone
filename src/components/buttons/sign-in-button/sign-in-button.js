import React from "react";
import * as Styled from "./sign-in-button.styles";

const SignInButton = () => {
  return (
    <Styled.SignInButton>
      <Styled.SignInButtonSVG />
      <Styled.SignInButtonText>SIGN IN</Styled.SignInButtonText>
    </Styled.SignInButton>
  );
};

export default SignInButton;
