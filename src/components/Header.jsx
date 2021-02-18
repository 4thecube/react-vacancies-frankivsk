import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import {HeaderContainerStyles, 
    HeaderStyles,
    NavLinkStyles,
    HeaderHomeStyles,
    HeaderOptionsStyles

} from './Header.styles';

const Header = () => {
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
