import React from "react";

import './List.styles.scss';

const List = (props) => {
  const { vacancies } = props;
  return (
    <div className="vacancies-container">
      {vacancies ? (
        vacancies.map((vacancy) => (
          <div key={vacancy.description} className="vacancy-container">
            <a href={vacancy.href} className="vacancy-link">
              <div className="vacancy-title">{vacancy.title}</div>
            </a>
            <div className="vacancy-company">{vacancy.company}</div>
            <div className="vacancy-description">{vacancy.description}</div>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default List;
