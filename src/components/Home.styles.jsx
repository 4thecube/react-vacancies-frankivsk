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
  height: 20vh;
  background-color: #0d1117;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5em;
  z-index: 5;

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
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

export const GoToAllButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 8vh;
  z-index: 6;
  margin-top: 0;
`;

export const ButtonLinkStyles = styled(Link)`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  width: 30%;
  height:4vh;
  background-color: #1096de;
  color: white;
  margin: 20px 0 20px 0;

  &:hover{
    background-color: white;
    color: #1096de;
  }
`;

export const VacanciesTotalCountStyles = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  font-size: 2em;
  color: #1096de;
  font-weight: 800;
  margin-left: 20px;
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
