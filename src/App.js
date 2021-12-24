import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import extractingDataFromDou from "./extractingDataFromDou";

import "./App.scss";
import InfoBlock from "./components/info-block/InfoBlock";

function App() {
  const companies = ["softjourn", "tenantcloud", "eleks", "softserve", "epam"];
  const [vacancies, setVacansies] = useState({});
  const allVacanciesAsArray = Object.values(vacancies).flat();
  const vacanciesCount = allVacanciesAsArray.length;
  const vacanciesPerRole = {};

  useEffect(() => {
    companies.forEach(async (company) => {
      let res = await extractingDataFromDou(company);
      setVacansies((prevState) => {
        return {
          ...prevState,
          [company]: res,
        };
      });
    });
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

  return (
    <div>
      <InfoBlock role="Senior" vacanciesCount={vacanciesPerRole.Senior} />
      <InfoBlock role="Middle" vacanciesCount={vacanciesPerRole.Middle} />
      <InfoBlock role="Junior" vacanciesCount={vacanciesPerRole.Junior} />
    </div>
  );
}
export default App;
