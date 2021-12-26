import { ModalWindowTypes } from "../types/modalWindow";

const INITIAL_STATE = {
  isHidden: true,
  isExtended: false,
  isMinimized: false,
};

export const ModalWindowReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalWindowTypes.TOGGLE_WINDOW_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
        isMinimized: false,
        isExtended: false,
      };

    case ModalWindowTypes.TOGGLE_EXTEND:
      return {
        ...state,
        isExtended: !state.isExtended,
        isMinimized: false,
      };

    case ModalWindowTypes.TOGGLE_MINIMIZE:
      return {
        ...state,
        isMinimized: !state.isMinimized,
        isExtended: false,
      };
    default:
      return state;
  }
};
