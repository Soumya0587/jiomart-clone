import {
  DELIVERY_REQ,
  DELIVERY_SUCCESS,
  DELIVERY_FAIL,
} from "./DeliveryActionTypes";

const initState = { isLoading: false, isError: false, address: [] };
const AddressReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DELIVERY_REQ:
      return { ...state, isLoading: true };
    case DELIVERY_SUCCESS:
      return { ...state, isLoading: false, address: payload };
    case DELIVERY_FAIL:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { AddressReducer };
