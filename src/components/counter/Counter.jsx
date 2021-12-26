import React from "react";
import { forwardRef } from "react";
import { useRef } from "react";
import CountUp from "react-countup";
import { connect } from "react-redux";
import { toggleWindowHidden } from "../../redux/actions/modalWindow.js";

import InfoBlock from "../info-block/InfoBlock.jsx";
import ModalWindow from "../modal-window/ModalWindow.jsx";
import {
  Anchor,
  Tip,
  VacanciesPerRole,
  CounterContainer,
  CountAllContainer,
  CountAll,
  CoutAllText,
  OpenModalWindowButton,
  VacanciesPerRoleText,
  CounterPerRoles,
} from "./Counter.js";

const Counter = forwardRef(
  ({ vacanciesCount, vacanciesPerRole, openModalWindow, state }, ref) => {
    let modalWindow = "";

    const takeMe = useRef(null);
    const showVacanciesList = () => {
      openModalWindow();
      // takeMe.current.scrollIntoView();
    };

    return (
      <CounterContainer tabIndex={0}>
        <CountAllContainer>
          <CountAll>
            <CountUp start={0} end={44} duration={2} />
          </CountAll>
          <CoutAllText>
            {/* <Anchor isMinimized={state.isMinimized} ref={takeMe}></Anchor> */}
            vacancies from the{" "}
            <abbr title="I don't give a fuck who are the biggest companies, just took 5 randoms and put them here.">
              5
            </abbr>{" "}
            biggest companies in the city
            <OpenModalWindowButton onClick={showVacanciesList}>
              open list
            </OpenModalWindowButton>
          </CoutAllText>
        </CountAllContainer>
        <VacanciesPerRole>
          <VacanciesPerRoleText>
            Sorted Developer vacancies per roles{" "}
          </VacanciesPerRoleText>
          <CounterPerRoles>
            <InfoBlock
              role="Trainee"
              vacanciesCount={vacanciesPerRole.Trainee}
            />
            <InfoBlock role="Junior" vacanciesCount={vacanciesPerRole.Junior} />
            <InfoBlock role="Middle" vacanciesCount={vacanciesPerRole.Middle} />
            <InfoBlock role="Senior" vacanciesCount={vacanciesPerRole.Senior} />
          </CounterPerRoles>
        </VacanciesPerRole>
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
