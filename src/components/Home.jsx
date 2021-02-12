import React from "react";
import {NavLink} from 'react-router-dom';
import Loader from "./Loader";

const Home = ({counter}) => {
  return (
    <div className="home-container">
      <div className="vacancies-total">
        All vacancies:
        {
          counter === 0 ? 
          <Loader/>
          :
          <span className="vacancies-total-count">{counter}</span>
        }

      </div>
      <div className="navlink-container">
        <NavLink className="navlink eleks-link" to="eleks">
          Eleks
        </NavLink>
        <NavLink className="navlink softjourn-link" to="softjourn">
          SoftJourn
        </NavLink>
        <NavLink className="navlink tenantcloud-link" to="tenantcloud">
          TenantCloud
        </NavLink>
        <NavLink className="navlink softserve-link" to="softserve">
          SoftServe
        </NavLink>
        <NavLink className="navlink sombra-link" to="sombra">
          Sombra
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
