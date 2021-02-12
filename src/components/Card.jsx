import React from "react";

import "./Card.styles.scss";
import Header from "./Header";
import Loader from "./Loader";

const Card = (props) => {
  const { vacancies } = props;
  return (
    <>
      <Header />
      <div className="card-container">
        {vacancies ? (
          vacancies.length ? (
            vacancies.map((vacancy) => (
              <div className="card">
                <a className="card-href" href={vacancy.href}>
                  <div className="card-title">{vacancy.title}</div>
                  <div className="card-description">{vacancy.description}</div>
                </a>
              </div>
            ))
          ) : (
            <Loader />
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Card;
