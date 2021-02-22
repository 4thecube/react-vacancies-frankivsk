import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainerStyles = styled.div`
  width: 100vw;
  background-color: #0d1117;
  display: flex;
  justify-content: center;
  z-index: 3;
  box-shadow: 0 6px 19.4px 0.6px black;
`;

export const HeaderStyles = styled.div`
  height: 10vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 3;
`;

export const NavLinkStyles = styled(NavLink)`
font-family: Roboto,sans-serif;
  &.home-link {
    text-decoration: none;
  }

  &.header-option {
    height: 10vh;
    width: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;

    &:hover {
      border-bottom: 3px solid #40c463;
    }
  }

  &.selected {
    background-color: #40c463;
  }

  &.menu-option{ 
    width: 20vw;
    height: 10vh;
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #40c463;

    @media screen and (max-width: 800px) {
      width: 50vw;
    }
  }
`;

export const HeaderHomeStyles = styled.div`
  height: 10vh;
  width: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: white;

  &.home-arrow {
    color: white;
  }

  &:hover {
    border-bottom: 3px solid #40c463;
  }

  .home-text{
    margin-left: 25px;
  }
`;

export const HeaderOptionsStyles = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1300px) {
    visibility: hidden;
    width: 0px;
    z-index: -2;
    position: absolute;

  }
`;

export const MobileHeaderStyles = styled.div`
  visibility: hidden;

  @media screen and (max-width: 1300px) {
    width: 15vw;
    visibility: visible;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
      cursor: pointer;
    }
  }
`;

export const Ty = styled.div`
  position: absolute; 
  top: 10vh;
  background-color: #0d1117;
  border: 1px solid #40c463; 
  z-index: 3;
  width: 20vw;

  @media screen and (max-width: 800px) {
    width: 50vw;
    left: 40vw;
    background-color: #40c463;
  }
`;  

export const MenuLinkContainer = styled.div`
  z-index: 99;
  width: 20vw;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 50vw;
  }
`; 

export const MobileMenuButtonStyles = styled.div`
  &.hidden-false{
    background-color: red;
    width: 100%;
    border: none;
  }

  .hidden-true{
    background-color: green;
  }
`;