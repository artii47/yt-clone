import styled from "styled-components";
import { SpinnerInner } from "../spinner/spinner.styles";

export const Comments = styled.div`
  grid-column: 2/12;
  grid-row: 9/-1;
  width: 100%;
  height: 100%;
  border-top: 1px solid #e0e0e0;
`;

export const CommentsFlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentsCount = styled.p`
  font-size: 1.8rem;
`;

export const CommentsSpinner = styled(SpinnerInner)`
  grid-column: 2/12;
  grid-row: 8/9;
`;
