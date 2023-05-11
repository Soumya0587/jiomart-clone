import axios from "axios";
import { WISHLIST_FAIL, WISHLIST_REQ, WISHLIST_SUCCESS } from "./WishlistActionTypes";
import { BASE_URL } from "../../Util/Constant.js";

export const wishlistReqAction = () => {
  return { type: WISHLIST_REQ };
};
export const wishlistSuccessAction = (payload) => {
  return { type: WISHLIST_SUCCESS, payload };
};

export const wishlistFailAction = () => {
  return { type: WISHLIST_FAIL };
};

export const addToWishlist = (data) => (dispatch) => {
  dispatch(wishlistReqAction());
  return axios
    .post(BASE_URL + `/wishlist/add`, data
    )
    .then((res) => console.log(res.data))
    .catch((err) =>{
      let res=err.response.data
      return res
    });
};

export const getWishlistData =(userId)=> (dispatch) => {
  dispatch(wishlistReqAction());
  axios
    .get(BASE_URL + `/wishlist/${userId}`)
    .then((res) => dispatch(wishlistSuccessAction(res.data)))
    .catch((err) => dispatch(wishlistFailAction()));
};
export const deleteWishlistItem = (id) => (dispatch) => {
  dispatch(wishlistReqAction());
  return axios
    .delete(BASE_URL + `/wishlist/${id}`
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

