import React from "react";

import "./List.styles.scss";

const List = ({ vacancies }) => {
  console.log(vacancies);
  return (
    <div className="vacancies-container">
      {vacancies.length ? (
        vacancies.map((vacancy, idx) => (
          <div key={idx} title={vacancy.title} className="vacancy-container">
            <a href={vacancy.href} className="vacancy-link">
              <div className="vacancy-title">{vacancy.title}</div>
            </a>
            <div className="vacancy-company">{vacancy.company}</div>
            <div className="vacancy-description">{vacancy.description}</div>
          </div>
        ))
      ) : (
        <h2>Sorry, but I didn't find any vacancies requested by your searches word(s)</h2>
      )}
    </div>
  );
};

export default List;
