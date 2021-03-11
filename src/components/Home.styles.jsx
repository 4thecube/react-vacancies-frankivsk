import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HomeStyles = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VacanciesTotalStyles = styled.div`
  width: 25vw;
  height: 15vh;
  background-color: #0d1117;
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  z-index: 5;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }

  @media screen and (max-width: 420px) {
    width: 70vw;
    padding: 1rem;
  }

  @media screen and (max-width: 1200px) {
    width: 50vw;
  }

  @media screen and (max-width: 768px) {
    width: 70vw;
  }
`;

export const GoToAllButtonStyles = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 2em;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20%;
  height: 100%;

  border: none;
  background-color: #2ea043;
  z-index: 6;
  margin-top: 0;
  margin-left: 20px;
`;

export const VacanciesTotalCountStyles = styled.span`
  display: flex;
  padding-top: 10px;
  font-size: 2em;
  color: #56d364;
`;

export const NavLinkContainerStyles = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const NavLinkStyles = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #0d1117;
  width: 30vw;
  height: 20vh;
  font-size: 2em;
  padding: 1rem;
  margin: 5px;

  &:hover {
    transform: scale(1.1);
  }

  &.softserve-link {
    width: 30vw;
    height: 20vh;
    color: #5406d9;
    background-size: 200% 100%;
    background-position: bottom right;
    transition: all 0.7s ease-out;
    &:hover {
      color: white;
      background-image: linear-gradient(45deg, #f9ac07, #5406d9);
    }
  }

  &.softjourn-link {
    color: #5406d9;
    background-size: 200% 100%;
    background-position: bottom right;
    transition: all 0.7s ease-out;
    &:hover {
      color: white;
      background: linear-gradient(90deg, #009b67, #6553c0);
      background-position: bottom left;
    }
  }

  &.eleks-link {
    color: #1096de;
    background-size: 200% 100%;
    background-position: bottom right;
    transition: all 0.7s ease-out;
    &:hover {
      color: white;
      background: #1096de;
      background-position: bottom left;
    }
  }

  &.sombra-link {
    color: #53914f;
    background-size: 200% 100%;
    background-position: bottom right;
    transition: all 0.7s ease-out;
    &:hover {
      color: white;
      background: #53914f;
      background-position: bottom left;
    }
  }

  &.tenantcloud-link {
    width: 80%;
    color: #40c463;
    background-size: 200% 100%;
    background-position: bottom right;
    transition: all 0.7s ease-out;
    &:hover {
      color: white;
      background: #40c463;
      background-position: bottom left;
    }
  }

  @media screen and (max-width: 768px) {
    &.tenantcloud-link {
      width: 30vw;
    }
  }

  @media screen and (max-width: 500px) {
    width: 70vw;

    &.softserve-link {
      width: 70vw;
    }

    &.tenantcloud-link {
      width: 70vw;
    }
  }
`;
