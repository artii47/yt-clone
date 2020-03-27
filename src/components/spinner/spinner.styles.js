import styled, { keyframes } from "styled-components";

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
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
`;

export const SpinnerInner = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 3rem;
  height: 3rem;
  margin: 8px;
  border: 4px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: transparent #b5b5b5 #b5b5b5 #b5b5b5;
`;
