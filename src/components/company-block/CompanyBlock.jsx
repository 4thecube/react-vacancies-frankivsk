import React from "react";

import { CompanyBlockContainer } from "./CompanyBlock";

// TODO: in the future company must be Link which will open vacancies by clicked company
const CompanyBlock = ({ company, length }) => {
  return (
    <CompanyBlockContainer length={length} color={company.color}>
      {company.name}
    </CompanyBlockContainer>
  );
};

export default CompanyBlock;
