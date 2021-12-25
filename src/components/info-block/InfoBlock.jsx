import React from "react";
import CountUp from "react-countup";

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
        <VacanciesCount role={role}>
          <CountUp start={0} end={16} duration={2}></CountUp>
        </VacanciesCount>
        <VacanciesText>
          {vacanciesCount === 1 ? "vacancy" : "vacancies"} for
          <VacanciesRole>{role}</VacanciesRole>
        </VacanciesText>
      </VacanciesCountContainer>
    </InfoBlockContainer>
  );
};

export default InfoBlock;
