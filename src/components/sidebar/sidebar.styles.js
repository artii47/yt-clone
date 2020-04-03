import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 5.6rem;
  width: 24rem;
  height: calc(100% - 5.6rem);
  grid-row: 2/-1;
  background-color: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
`;
