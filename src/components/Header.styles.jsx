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
`;

export const HeaderOptionsStyles = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
