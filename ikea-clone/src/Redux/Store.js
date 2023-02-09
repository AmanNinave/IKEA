import { legacy_createStore as createstore, applyMiddleware } from "redux";
import { reducer } from "./Reducers/reducer";
import logger from "redux-logger";
import signupReducer from "./Reducers/signupReducer";
export const myStore = createstore(signupReducer, applyMiddleware(logger));
