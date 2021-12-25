import { combineReducers } from "redux";
import { ModalWindowReducer } from "./reducers/modalWindow";

export const rootReducer = combineReducers({ window: ModalWindowReducer });
