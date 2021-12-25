import React, { useRef } from "react";
import { forwardRef } from "react";
import { connect } from "react-redux";

import {
  toggleWindowExtended,
  toggleWindowHidden,
  toggleWindowMinimized,
} from "../../redux/actions/modalWindow";

import {
  ModalWindow,
  ButtonContainer,
  ModalWindowTitle,
  ModalWindowHeader,
  ModalWindowButton,
} from "./VacancyList.js";

// This will be ModalWindow component
const VacancyList = forwardRef(
  (
    {
      state,
      toggleWindowHidden,
      toggleWindowMinimized,
      toggleWindowExtended,
      setRef,
    },
    innerRef
  ) => {
    const { isHidden, isExtended, isMinimized } = state.window;
    // this is modal window - opend by button click
    // looks like Windows OS window
    // have 3 buttons on top

    let modalWindow = "";

    return (
      <>
        {!isHidden ? (
          <ModalWindow
            ref={(div) => {
              setRef(div);
            }}
            isExtended={isExtended}
            isMinimized={isMinimized}
          >
            <ModalWindowHeader>
              <ModalWindowTitle>Vacancies List</ModalWindowTitle>
              <ButtonContainer>
                <ModalWindowButton onClick={toggleWindowMinimized}>
                  &#x02A3C;
                </ModalWindowButton>
                <ModalWindowButton onClick={toggleWindowExtended}>
                  &#x029C9;
                </ModalWindowButton>
                <ModalWindowButton onClick={toggleWindowHidden}>
                  &#x02A2F;
                </ModalWindowButton>
              </ButtonContainer>
            </ModalWindowHeader>
          </ModalWindow>
        ) : null}
      </>
    );
  }
);

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => ({
  toggleWindowHidden: () => dispatch(toggleWindowHidden()),
  toggleWindowMinimized: () => dispatch(toggleWindowMinimized()),
  toggleWindowExtended: () => dispatch(toggleWindowExtended()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(VacancyList);
