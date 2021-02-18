import React from "react";
import Loader from "./Loader";

import {
  HomeStyles,
  VacanciesTotalStyles,
  VacanciesTotalCountStyles,
  NavLinkContainerStyles,
  NavLinkStyles,
  GoToAllButtonStyles,
} from "./Home.styles";

const Home = ({ counter }) => {
  return (
    <HomeStyles>
      <VacanciesTotalStyles>
        {counter === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="container">
              All vacancies:
              <VacanciesTotalCountStyles>{counter}</VacanciesTotalCountStyles>
            </div>
            <GoToAllButtonStyles to="all">&rang; </GoToAllButtonStyles>
          </>
        )}
      </VacanciesTotalStyles>
      <NavLinkContainerStyles>
        <NavLinkStyles className="eleks-link" to="eleks">
          Eleks
        </NavLinkStyles>
        <NavLinkStyles className="softjourn-link" to="softjourn">
          SoftJourn
        </NavLinkStyles>
        <NavLinkStyles className="tenantcloud-link" to="tenantcloud">
          TenantCloud
        </NavLinkStyles>
        <NavLinkStyles className="softserve-link" to="softserve">
          SoftServe
        </NavLinkStyles>
        <NavLinkStyles className="sombra-link" to="sombra">
          Sombra
        </NavLinkStyles>
      </NavLinkContainerStyles>
    </HomeStyles>
  );
};

export default Home;
