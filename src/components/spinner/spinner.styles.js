import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerOuter = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  margin: 0 auto;
  z-index: 10;
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.middle &&
    css`
      width: 100vw;
      height: 100vh;
    `}

  ${(props) =>
    props.iframe &&
    css`
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    `}

    ${(props) =>
      props.replies &&
      css`
        justify-content: left;
        padding: 0;
      `}
`;

export const SpinnerInner = styled.div`
  box-sizing: border-box;
  width: 3rem;
  height: 3rem;
  margin: 8px;
  border: 4px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: transparent #b5b5b5 #b5b5b5 #b5b5b5;
  z-index: 10;
  ${(props) =>
    props.middle &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
    `}
  ${(props) =>
    props.iframe &&
    css`
      width: 8rem;
      height: 8rem;
    `}
`;
