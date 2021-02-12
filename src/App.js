import React, { useState, useEffect } from "react";
import {  Route } from "react-router-dom";
import extractingDataFromDou from "./extractingDataFromDou";

import "./App.scss";
import List from "./components/List";
import Home from './components/Home'
import Card from './components/Card'

function App() {
  const [vacanciesList, setVacansiesList] = useState({
    Softjourn: [],
    Tenantcloud: [],
    Eleks: [],
    Softserve: [],
    Sombra: [],
  });
  const [joinedVacancies, setJoinedVacancies] = useState(
    { tenantcloud: [] },
    { eleks: [] },
    { softjourn: [] },
    { softserve: [] },
    { sombra: [] }
  );

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetcher = async () => {
      const Softjourn = await extractingDataFromDou("softjourn");
      const Tenantcloud = await extractingDataFromDou("tenantcloud");
      const Eleks = await extractingDataFromDou("eleks");
      const Softserve = await extractingDataFromDou("softserve");
      const Sombra = await extractingDataFromDou("sombra");
      setVacansiesList((prev) => {
        return {
          ...prev,
          Eleks,
          Tenantcloud,
          Softjourn,
          Softserve,
          Sombra,
        };
      });

      setCounter(
        Softjourn.length +
          Tenantcloud.length +
          Eleks.length +
          Softserve.length +
          Sombra.length
      );
    };
    fetcher();
  }, []);

  useEffect(() => {
    const joiner = {
      tenantcloud: [...vacanciesList.Tenantcloud],
      eleks: [...vacanciesList.Eleks],
      softserve: [...vacanciesList.Softserve],
      softjourn: [...vacanciesList.Softjourn],
      sombra: [...vacanciesList.Sombra],
    };

    setJoinedVacancies(joiner);
  }, [vacanciesList]);

  // console.log("Divided here: ", vacanciesList);
  return (
    <div className="App">
      <Route 
        exact
        path='/'
        render={() =>  <Home counter={counter}/> }
      />
      <Route
        exact
        path="/eleks"
        render={() => <Card vacancies={joinedVacancies.eleks} />}
      />
      <Route
        exact
        path="/softjourn"
        render={() => <Card vacancies={joinedVacancies.softjourn} />}
      />
      <Route
        exact
        path="/softserve"
        render={() => <Card vacancies={joinedVacancies.softserve} />}
      />
      <Route
        exact
        path="/tenantcloud"
        render={() => <Card vacancies={joinedVacancies.tenantcloud} />}
      />
      <Route
        exact
        path="/sombra"
        render={() => <Card vacancies={joinedVacancies.sombra} />}
      />
    </div>
  );
}
export default App;
