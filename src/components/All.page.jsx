import React, { useState } from "react";

import List from "./List";
import Searchbox from "./Searchbox";

import {
  AllPageStyled,
  VacanciesCountStyles,
  VacanciesCountContainerStyles,
} from "./All.page.styles";

import Loader from "./Loader";

import { LoaderContainerStyles } from "./Card.styles";
import Header from "./Header";

const All = ({ vacancies }) => {
  const [search, setSearch] = useState("");

  const joinedVacancies = [
    ...vacancies.eleks,
    ...vacancies.softjourn,
    ...vacancies.softserve,
    ...vacancies.tenantcloud,
    ...vacancies.sombra,
  ];

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredVacancies = joinedVacancies.filter(
    (vacancy) =>
      vacancy.title.toLowerCase().includes(search.toLowerCase()) ||
      vacancy.company.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredVacancies);

  return (
    <>
      <Header/>
      <AllPageStyled>
        <Searchbox handleChange={handleChange} />
        {vacancies.length < 1 && joinedVacancies.length < 1 ? (
          <h2>There is no vacancies with this title</h2>
        ) : joinedVacancies.length < 1 ? (
          <LoaderContainerStyles>
            <Loader className="loader" />
          </LoaderContainerStyles>
        ) : (
          <>
            <VacanciesCountContainerStyles>
              Found
              <VacanciesCountStyles>
                {filteredVacancies.length}
              </VacanciesCountStyles>{" "}
              vacancies
            </VacanciesCountContainerStyles>
            <List vacancies={filteredVacancies} />
          </>
        )}
      </AllPageStyled>
    </>
  );
};

export default All;
