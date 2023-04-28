import axios from "axios";
import { ORDER_ERROR, ORDER_LOADING, ORDER_SUCCESS } from "./OrderActionTypes";
import { BASE_URL } from "../../Util/Constant.js";

const orderSuccess = (payload) => {
  return {
    type: ORDER_SUCCESS,
    payload,
  };
};

const orderError = () => {
  return {
    type: ORDER_ERROR,
  };
};

const orderLoading = () => {
  return {
    type: ORDER_LOADING,
  };
};

const storageData = JSON.parse(localStorage.getItem("UserDetails"));

const addToOrder = (data) => (dispatch) => {
  dispatch(orderLoading());
  return axios
    .post(`${BASE_URL}/order/add`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => dispatch(orderError()));
};

const getOrder = () => (dispatch) => {
  dispatch(orderLoading());
  axios
    .get(`${BASE_URL}/users/order`)
    .then((res) => dispatch(orderSuccess(res.data)))
    .catch((err) => dispatch(orderError()));
};

export { orderError, orderLoading, orderSuccess, addToOrder, getOrder };
