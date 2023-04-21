import axios from "axios";
import { CART_FAIL, CART_REQ, CART_SUCCESS } from "./CartActionTypes";
import { BASE_URL } from "../../Util/Constant.js";

export const cartReqAction = () => {
  return { type: CART_REQ };
};
export const cartSuccessAction = (payload) => {
  return { type: CART_SUCCESS, payload };
};

export const cartFailAction = () => {
  return { type: CART_FAIL };
};

export const addToCart = (data) => (dispatch) => {
  dispatch(cartReqAction());
  return axios
    .post(BASE_URL + `/users/cart/add`, data
    )
    .then((res) => console.log(res.data))
    .catch((err) =>{
      let res=err.response.data
      return res
    });
};

export const getCartData =(userId)=> (dispatch) => {
  dispatch(cartReqAction());
  axios
    .get(BASE_URL + `/users/cart/${userId}`)
    .then((res) => dispatch(cartSuccessAction(res.data)))
    .catch((err) => dispatch(cartFailAction()));
};
export const deleteCartItem = (id) => (dispatch) => {
  dispatch(cartReqAction());
  return axios
    .delete(BASE_URL + `/users/cart/${id}`
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
export const updateQuantity = (data) => (dispatch) => {
  dispatch(cartReqAction());
  return axios
    .patch(BASE_URL + `/users/cart/${data._id}`, data
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
