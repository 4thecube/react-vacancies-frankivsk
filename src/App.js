import React, { useState, useEffect } from "react";
import {  Route } from "react-router-dom";
import extractingDataFromDou from "./extractingDataFromDou";

import "./App.scss";
import Home from './components/Home'
import Card from './components/Card'
import All from './components/All.page'

import {AppStyles} from './App.styles';

function App() {
  const [vacanciesList, setVacansiesList] = useState({
    softjourn: [],
    tenantcloud: [],
    eleks: [],
    softserve: [],
    sombra: [],
  });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetcher = async () => {
      const softjourn = await extractingDataFromDou("softjourn");
      const tenantcloud = await extractingDataFromDou("tenantcloud");
      const eleks = await extractingDataFromDou("eleks");
      const softserve = await extractingDataFromDou("softserve");
      const sombra = await extractingDataFromDou("sombra");
      setVacansiesList((prev) => {
        return {
          ...prev,
          eleks,
          tenantcloud,
          softjourn,
          softserve,
          sombra,
        };
      });

      setCounter(
        softjourn.length +
          tenantcloud.length +
          eleks.length +
          softserve.length +
          sombra.length
      );
    };
    fetcher();
  }, []);

  return (
    <AppStyles>
      <Route 
        exact
        path='/'
        render={() =>  <Home counter={counter}/> }
      />
      <Route
        exact
        path="/eleks"
        render={() => <Card vacancies={vacanciesList.eleks} />}
      />
      <Route
        exact
        path="/softjourn"
        render={() => <Card vacancies={vacanciesList.softjourn} />}
      />
      <Route
        exact
        path="/softserve"
        render={() => <Card vacancies={vacanciesList.softserve} />}
      />
      <Route
        exact
        path="/tenantcloud"
        render={() => <Card vacancies={vacanciesList.tenantcloud} />}
      />
      <Route
        exact
        path="/sombra"
        render={() => <Card vacancies={vacanciesList.sombra} />}
      />
            <Route
        exact
        path="/all"
        render={() => <All vacancies = {vacanciesList} />}
      />
    </AppStyles>
  );
}
export default App;
