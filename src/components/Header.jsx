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
            <span className="home-text">Home</span>
          </HeaderHomeStyles>
        </NavLinkStyles>
        <HeaderOptionsStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/eleks"
          >
            Eleks
          </NavLinkStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/softjourn"
          >
            SoftJourn
          </NavLinkStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/softserve"
          >
            SoftServe
          </NavLinkStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/tenantcloud"
          >
            TenantCloud
          </NavLinkStyles>
          <NavLinkStyles
            className="header-option"
            activeClassName="selected"
            to="/sombra"
          >
            Sombra
          </NavLinkStyles>
        </HeaderOptionsStyles>
      </HeaderStyles>
    </HeaderContainerStyles>
  );
};

export default Header;
