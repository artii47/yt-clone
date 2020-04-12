import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";

export const SearchedChannelItem = styled.div`
  max-width: 86rem;
  display: block;
  /* height: 14rem; */
  display: flex;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const SearchedChannelItemImg = styled.img`
  min-width: 13.6rem;
  height: 13.6rem;
  margin: 0 5rem;
  border-radius: 50%;
  @media only screen and (max-width: 34.375em) {
    margin: 0 3rem;
  }
  @media only screen and (max-width: 25em) {
    margin-left: 0;
    margin-right: 1.5rem;
  }
`;

export const SearchedChannelItemDescription = styled.div`
  width: 100%;
  color: #606060;
  font-size: 1.3rem;
  padding-right: 1.5rem;
`;

export const SearchedChannelItemTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: #3a3a3a;
`;

export const SearchedChannelItemStats = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.8rem;
`;

export const SearchedChannelItemAbout = styled.p`
  line-height: 1.8rem;
`;

export const SearchedChannelItemButton = styled(CustomButton)`
  @media only screen and (max-width: 34.375em) {
    display: none;
  }
`;
