import React from "react";

import { VacancyContainer, VacancyTitle } from "./Vacancy.js";

const Vacancy = ({ vacancy }) => {
  const slicedDescription =
    vacancy.description.length > 80
      ? vacancy.description.slice(0, 80) + "..."
      : vacancy.description;

  return (
    <VacancyContainer>
      <VacancyTitle>{vacancy.title}</VacancyTitle>
      <p>{slicedDescription}</p>
    </VacancyContainer>
  );
};

export default Vacancy;
