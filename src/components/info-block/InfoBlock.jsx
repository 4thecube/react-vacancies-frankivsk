import React from "react";

import {
  InfoBlockContainer,
  VacanciesCountContainer,
  VacanciesCount,
  VacanciesRole,
  VacanciesText,
} from "./InfoBlock";

const InfoBlock = ({ role, vacanciesCount }) => {
  return (
    <InfoBlockContainer>
      <VacanciesCountContainer>
        <VacanciesCount role={role}>{vacanciesCount}</VacanciesCount>
        <VacanciesText>
          {vacanciesCount === 1 ? "vacancy" : "vacancies"} for
          <VacanciesRole>{role}</VacanciesRole>
        </VacanciesText>
      </VacanciesCountContainer>
    </InfoBlockContainer>
  );
};

export default InfoBlock;
