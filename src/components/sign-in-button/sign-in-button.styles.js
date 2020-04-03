import styled from "styled-components";
import { ReactComponent as SignInSVG } from "../../assets/icons/sign-in.svg";

export const SignInButton = styled.a`
  width: 10.5rem;
  height: 3.6rem;
  border: none;
  background-color: transparent;
  border: 1px solid #065fd4;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SignInButtonSVG = styled(SignInSVG)`
  fill: #065fd4;
  width: 2.4rem;
  height: 2.4rem;
`;

export const SignInButtonText = styled.p`
  color: #065fd4;
  font-weight: 500;
  font-size: 1.5rem;
  margin-left: 0.8rem;
`;
