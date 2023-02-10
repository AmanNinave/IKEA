
import { legacy_createStore as createstore, applyMiddleware ,combineReducers } from "redux";

import logger from "redux-logger";
import signupReducer from "./Reducers/signupReducer";
import cartReducer from "./Reducers/cartReducer";
import wishlistReducer from "./Reducers/wishlistReducer";
const combinedRedcers = combineReducers({
    signupReducer,
    cartReducer,
    wishlistReducer

})


export const myStore = createstore( combinedRedcers  , applyMiddleware(logger));
