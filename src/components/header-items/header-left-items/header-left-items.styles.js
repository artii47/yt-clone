import styled from "styled-components";
import { ReactComponent as SidebarSVG } from "../../../assets/icons/sidebar.svg";
import { ReactComponent as LogoSVG } from "../../../assets/icons/logo.svg";

export const HeaderLeftItems = styled.div`
  display: flex;
  align-items: center;
`;

export const YouTubeLogo = styled(LogoSVG)`
  width: 8rem !important;
  height: 2.4rem !important;
  margin-left: 2rem;
  @media only screen and (max-width: 50em) {
    position: absolute;
    left: 0.1rem;
  }
`;

export const SidebarIcon = styled(SidebarSVG)`
  width: 2.4rem !important;
  fill: #606060;
  margin: 0.8rem;
  @media only screen and (max-width: 50em) {
    display: none !important;
  }
`;
