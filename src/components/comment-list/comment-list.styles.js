import styled from "styled-components";
import { ReactComponent as SortSvg } from "../../assets/icons/sort.svg";

export const CommentList = styled.div`
  grid-column: 2/12;
  grid-row: 8/9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #e0e0e0;
`;

export const CommentCountAndSortByWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentCount = styled.p`
  font-size: 1.8rem;
`;

export const CommentSortBy = styled.p`
  font-size: 1.5rem;
  color: #6b6b6b;
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-left: 3rem;
  padding: 2.5rem 0;
`;

export const SortIcon = styled(SortSvg)`
  width: 2rem;
  height: 2rem;
  fill: #909090;
  margin-right: 1rem;
`;
