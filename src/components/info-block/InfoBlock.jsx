import React from "react";
import CountUp from "react-countup";

import {
  InfoBlockContainer,
  VacanciesCountContainer,
  VacanciesCount,
  VacanciesRole,
  VacanciesRoleText,
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
          <VacanciesRole>
            {role}
            <VacanciesRoleText>
              {" "}
              {vacanciesCount === 1 ? "vacancy" : "vacancies"}
            </VacanciesRoleText>
          </VacanciesRole>
        </VacanciesText>
      </VacanciesCountContainer>
    </InfoBlockContainer>
  );
};

export default InfoBlock;
