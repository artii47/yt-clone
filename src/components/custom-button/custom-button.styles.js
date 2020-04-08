import styled, { css } from "styled-components";

export const CustomButton = styled.a`
  border: none;
  background-color: transparent;
  border: 1px solid #065fd4;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #065fd4;
  font-size: 1.5rem;

  ${(props) =>
    props.wideButton &&
    css`
      width: 100%;
      height: 3.6rem;
    `}
`;
