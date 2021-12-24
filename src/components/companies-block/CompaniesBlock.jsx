import React from "react";

import CompanyBlock from "../company-block/CompanyBlock.jsx";

import {
  CompaniesList,
  CompaniesMessage,
  CompaniesMessageButton,
  CompaniesBlockContainer,
} from "./CompaniesBlock";

//TODO:  'Show all' in the future need to be Link which will open window with all (additional) companies.

const CompaniesBlock = ({ companies }) => {
  return (
    <CompaniesBlockContainer>
      <CompaniesMessage>
        Vacancies by company
        <CompaniesMessageButton>Show all</CompaniesMessageButton>
      </CompaniesMessage>
      <CompaniesList>
        {companies.map((company) => (
          <CompanyBlock length={companies.length} company={company} />
        ))}
      </CompaniesList>
    </CompaniesBlockContainer>
  );
};

export default CompaniesBlock;
