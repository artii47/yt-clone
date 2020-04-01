import styled from "styled-components";
import { SpinnerInner } from "../spinner/spinner.styles";

export const Comments = styled.div`
  padding: 0 2.4rem;
  width: 42.5rem;
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
