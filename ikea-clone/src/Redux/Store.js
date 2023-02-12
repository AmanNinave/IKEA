
import { legacy_createStore as createstore, applyMiddleware ,combineReducers } from "redux";

import logger from "redux-logger";
import signupReducer from "./Reducers/signupReducer";
import cartReducer from "./Reducers/cartReducer";
import wishReducer from "./Reducers/wishlistReducer";
import wishlistReducer from "./Reducers/wishlistReducer";
import listReducer from "./Reducers/listReducer";

const combinedRedcers = combineReducers({
    signupReducer,
    cartReducer,
    wishlistReducer, 
    listReducer
})


export const myStore = createstore( combinedRedcers  , applyMiddleware(logger));
