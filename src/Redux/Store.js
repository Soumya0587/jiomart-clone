import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/Reducer";
import { GroceryReducer } from "./GroceryReducer/GroceryReducer";

const rootReducer = combineReducers({
  AuthReducer,
  GroceryReducer,
});
const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  comp(applyMiddleware(thunk))
);
