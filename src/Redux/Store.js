import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/Reducer";
import { GroceryReducer } from "./GroceryReducer/GroceryReducer";
import { CartReducer } from "./CartReducer/CartReducer";
import { AddressReducer } from "./DeliveryReducer/DeliveryReducer";
import { OrderReducer } from "./OrderReducer/OrderReducer";
import { AdminReducer } from "./AdminReducer/AdminReducer";
import { WishlistReducer } from "./WishlistReducer/WishlistReducer";


const rootReducer = combineReducers({
  AuthReducer,
  GroceryReducer,
  CartReducer,
  AddressReducer,
  OrderReducer,
  AdminReducer,
  WishlistReducer
});
const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  comp(applyMiddleware(thunk))
);
