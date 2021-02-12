import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <NavLink className="home-link" to="/">
          <div className="header-home">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2x"
              className="home-arrow"
            />
            <span className="home-text">Home</span>
          </div>
        </NavLink>
        <div className="header-options">
          <NavLink
            className="header-option"
            activeClassName="selected"
            to="/eleks"
          >
            Eleks
          </NavLink>
          <NavLink
            className="header-option"
            activeClassName="selected"
            to="/softjourn"
          >
            SoftJourn
          </NavLink>
          <NavLink
            className="header-option"
            activeClassName="selected"
            to="/softserve"
          >
            SoftServe
          </NavLink>
          <NavLink
            className="header-option"
            activeClassName="selected"
            to="/tenantcloud"
          >
            TenantCloud
          </NavLink>
          <NavLink
            className="header-option"
            activeClassName="selected"
            to="/sombra"
          >
            Sombra
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
