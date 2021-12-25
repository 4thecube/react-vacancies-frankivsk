import React from "react";
import { forwardRef } from "react";
import { useRef } from "react";
import CountUp from "react-countup";
import { connect } from "react-redux";
import { toggleWindowHidden } from "../../redux/actions/modalWindow.js";

import InfoBlock from "../info-block/InfoBlock.jsx";
import VacancyList from "../vacancy-list/VacancyList.jsx";
import {
  Anchor,
  CounterContainer,
  CountAllContainer,
  CountAll,
  CoutAllText,
  OpenModalWindowButton,
  CounterPerRoles,
} from "./Counter.js";

const Counter = forwardRef(
  ({ vacanciesCount, vacanciesPerRole, openModalWindow, state }, ref) => {
    console.log(vacanciesCount);
    let modalWindow = "";
    console.log(state);
    let refer = null;
    const takeMe = useRef(null);
    const showVacanciesList = () => {
      openModalWindow();
      // setTimeout(modalWindow.current.scrollIntoView({ behavior: "smooth" }), 500);
      console.log(refer);
      takeMe.current.scrollIntoView();
      if (refer) {
        refer.scrollIntoView();
      }
    };

    function setRef(element) {
      refer = element;
    }

    return (
      <CounterContainer tabIndex={0}>
        <CountAllContainer>
          <CountAll>
            <CountUp start={0} end={44} duration={2} />
          </CountAll>
          <CoutAllText>
            <Anchor isMinimized={state.isMinimized} ref={takeMe}></Anchor>
            vacancies from the 5 biggest companies in the city
            <OpenModalWindowButton onClick={showVacanciesList}>
              open list
            </OpenModalWindowButton>
            <VacancyList setRef={setRef} innerRef={modalWindow}></VacancyList>
          </CoutAllText>
        </CountAllContainer>
        <CounterPerRoles>
          <InfoBlock role="Senior" vacanciesCount={vacanciesPerRole.Senior} />
          <InfoBlock role="Middle" vacanciesCount={vacanciesPerRole.Middle} />
          <InfoBlock role="Junior" vacanciesCount={vacanciesPerRole.Junior} />
        </CounterPerRoles>
      </CounterContainer>
    );
  }
);

const mapStateToProps = (state) => ({
  state: state.window,
});

const mapDispatchToProps = (dispatch) => ({
  openModalWindow: () => dispatch(toggleWindowHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(Counter);
