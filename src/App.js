import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import extractingDataFromDou from "./extractingDataFromDou";
import { connect } from "react-redux";
import "./App.scss";
import InfoBlock from "./components/info-block/InfoBlock.jsx";
import CompaniesBlock from "./components/companies-block/CompaniesBlock.jsx";
import Counter from "./components/counter/Counter.jsx";
import About from "./components/about/About.jsx";
import ModalWindow from "./components/modal-window/ModalWindow.jsx";

function App({ window }) {
  // const companies = ["softjourn", "tenantcloud", "eleks", "softserve", "epam"];
  const companies = [
    { name: "softserve", color: "#1f58f2" },
    { name: "softjourn", color: "#6554c0" },
    { name: "tenantcloud", color: "#3e9d3e" },
    { name: "eleks", color: "#0042e6" },
    { name: "epam", color: "#14293e" },
  ];

  const [vacancies, setVacansies] = useState({});
  const allVacanciesAsArray = Object.values(vacancies).flat();
  const vacanciesCount = allVacanciesAsArray.length;
  const vacanciesPerRole = {};

  useEffect(() => {
    // companies.forEach(async (company) => {
    //   let res = await extractingDataFromDou(company.name);
    //   setVacansies((prevState) => {
    //     return {
    //       ...prevState,
    //       [company.name]: res,
    //     };
    //   });
    // });
  }, []);

  const ff = (role) => {
    let countByRole = 0;
    allVacanciesAsArray.forEach((v) => {
      if (v.title.includes(role)) {
        return (vacanciesPerRole[role] = countByRole++ + 1);
      }
    });
  };

  ff("Junior");
  ff("Senior");
  ff("Middle");
  ff("Trainee");

  console.log(vacanciesPerRole);
  return (
    <div>
      {!window.isExtended ? (
        <>
          <About />
          <Counter
            vacanciesPerRole={vacanciesPerRole}
            vacanciesCount={vacanciesCount}
          />
          <CompaniesBlock companies={companies} />
        </>
      ) : null}
      <ModalWindow></ModalWindow>
    </div>
  );
}

const mapStateToProps = (state) => ({
  window: state.window,
});
export default connect(mapStateToProps)(App);
