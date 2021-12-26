import React from "react";
import { connect } from "react-redux";

import Vacancy from "../vacancy/Vacancy.jsx";
import { VacancyListContainer, VacancyOverfowBlocker } from "./VacancyList.js";

const VacancyList = ({ window }) => {
  const { isHidden, isExtended } = window;
  const vacancies = [
    { title: "Senior Angular", description: "bla bla bla" },
    {
      title: "Senior React",
      description:
        "bl blareac blareact blareact ta blare a blare blareblare blare blare blare blare blarect vblareactblareactblareac tblareactblareact bla",
    },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
    { title: "Senior Vue", description: "vue vue vue vue  vuebla bla" },
  ];
  return (
    <VacancyListContainer>
      <VacancyOverfowBlocker
        isScrollable={vacancies.lenght > 18}
        isExtended={isExtended}
      >
        {vacancies.map((vacancy) => (
          <Vacancy vacancy={vacancy} />
        ))}
      </VacancyOverfowBlocker>
    </VacancyListContainer>
  );
};

const mapStateToProps = (state) => ({
  window: state.window,
});

export default connect(mapStateToProps)(VacancyList);
