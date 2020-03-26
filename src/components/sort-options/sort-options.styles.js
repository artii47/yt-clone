import styled from "styled-components";
import { ReactComponent as SortSvg } from "../../assets/icons/sort.svg";

export const SortOptions = styled.div`
  position: relative;
  font-size: 1.5rem;
  color: #6b6b6b;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 500;
  margin-left: 3rem;
  padding: 2.5rem 0;
  /* :after {
    margin-top: 2rem;
    flex-basis: 100%;
    content: "";
    display: block;
    width: 4rem;
    height: 10rem;
    background-color: red;
  } */
`;

export const SortOptionsBox = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  width: 14rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const SortOptionsFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SortIcon = styled(SortSvg)`
  width: 2rem;
  height: 2rem;
  fill: #909090;
  margin-right: 1rem;
`;

export const SortOptionsOption = styled.div`
  height: 5rem;
  color: #000;
  width: 100%;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1.5rem;
  cursor: pointer;
  background-color: ${props => (props.active ? "#EEEEEE" : "")};
  :hover {
    background-color: #eeeeee;
  }
`;
