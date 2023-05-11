import { WISHLIST_FAIL, WISHLIST_REQ, WISHLIST_SUCCESS } from "./WishlistActionTypes";

const initState = { isLoading: false, isError: false, items: [] };
const WishlistReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case WISHLIST_REQ:
      return { ...state, isLoading: true };
    case WISHLIST_SUCCESS:
      return { ...state, isLoading: false, items: payload };
    case WISHLIST_FAIL:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { WishlistReducer };
