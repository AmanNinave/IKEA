
import { legacy_createStore as createstore, applyMiddleware } from "redux";

import logger from "redux-logger";
import signupReducer from "./Reducers/signupReducer";

// import { combineReducers } from "redux";

export const myStore = createstore(signupReducer,   applyMiddleware(logger));
