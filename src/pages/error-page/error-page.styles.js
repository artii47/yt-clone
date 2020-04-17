import styled from "styled-components";

export const ErrorWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const ErrorContentWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  font-size: 2.5rem;
  margin-top: 2rem;
  text-align: center;
  line-height: 3rem;
  font-weight: 300;
`;
