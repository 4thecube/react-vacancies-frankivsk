import { ModalWindowTypes } from "../types/modalWindow";

export const toggleWindowHidden = () => ({
  type: ModalWindowTypes.TOGGLE_WINDOW_HIDDEN,
});

export const toggleWindowMinimized = () => ({
  type: ModalWindowTypes.TOGGLE_MINIMIZE,
});

export const toggleWindowExtended = () => ({
  type: ModalWindowTypes.TOGGLE_EXTEND,
});
