import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  HeaderContainerStyles,
  HeaderStyles,
  NavLinkStyles,
  HeaderHomeStyles,
  HeaderOptionsStyles,
  MobileHeaderStyles,
  MenuLinkContainer,
  MobileMenuButtonStyles,
  Ty,
} from "./Header.styles";

const MobileHeader = ({ hidden }) => {
  return (
    <>
      <MobileMenuButtonStyles className={`${hidden ? 'hidden-true' : 'hidden-false'}`}>
        {
          hidden ?
            <h1>&#x02261;</h1>
          : <h1>x</h1>
        }
      </MobileMenuButtonStyles>
      {hidden ? null : (
        <>
          <Ty>
            <MenuLinkContainer>
              <NavLinkStyles className="menu-option" to="/eleks">
                ELEKS
              </NavLinkStyles>
              <NavLinkStyles className="menu-option" to="/softjourn">
                SOFTJOURN
              </NavLinkStyles>
              <NavLinkStyles className="menu-option" to="/softserve">
                SOFTSERVE
              </NavLinkStyles>
              <NavLinkStyles className="menu-option" to="/tenantcloud">
                TENANTCLOUD
              </NavLinkStyles>
              <NavLinkStyles className="menu-option" to="/sombra">
                SOMBRA
              </NavLinkStyles>
            </MenuLinkContainer>
          </Ty>
        </>
      )}
    </>
  );
};

const Header = () => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <HeaderContainerStyles>
      <HeaderStyles>
        <NavLinkStyles className="home-link" to="/">
          <HeaderHomeStyles>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2x"
              className="home-arrow"
            />
            <span className="home-text">HOME</span>
          </HeaderHomeStyles>
        </NavLinkStyles>
        <MobileHeaderStyles onClick={toggleHidden}>
          <MobileHeader hidden={hidden} />
        </MobileHeaderStyles>
        <HeaderOptionsStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/eleks"
          >
            ELEKS
          </NavLinkStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/softjourn"
          >
            SOFTJOURN
          </NavLinkStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/softserve"
          >
            SOFTSERVE
          </NavLinkStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/tenantcloud"
          >
            TENANTCLOUD
          </NavLinkStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/sombra"
          >
            SOMBRA
          </NavLinkStyles>
        </HeaderOptionsStyles>
      </HeaderStyles>
    </HeaderContainerStyles>
  );
};

export default Header;
