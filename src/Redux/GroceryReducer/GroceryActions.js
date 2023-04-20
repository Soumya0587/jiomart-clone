import {GET_PRODUCTS_REQUEST , GET_PRODUCTS_SUCCESS , GET_PRODUCTS_ERROR , GET_TOTAL_PRODUCTS_ERROR,
    GET_TOTAL_PRODUCTS_REQUEST,
    GET_TOTAL_PRODUCTS_SUCCESS,} from "./GroceryActionTypes"
import axios from "axios";
import {BASE_URL} from "../../Util/Constant"
export const productsGetRequestAction = () => {
    return { type: GET_PRODUCTS_REQUEST };
  };
  
  export const productsGetSuccessAction = (data) => {
    // console.log(data);
    return { type: GET_PRODUCTS_SUCCESS, payload: data };
  };
  
  export const productsGetErrorAction = () => {
    return { type: GET_PRODUCTS_ERROR };
  };

  export const totalProductsGetRequestAction = () => {
    return { type: GET_TOTAL_PRODUCTS_REQUEST };
  };
  
  export const totalProductsGetSuccessAction = (data) => {
    return { type: GET_TOTAL_PRODUCTS_SUCCESS, payload: data };
  };
  
  export const totalProductsGetErrorAction = () => {
    return { type: GET_TOTAL_PRODUCTS_ERROR };
  };
export const getProducts = (Q) => (dispatch) => {
    dispatch(totalProductsGetRequestAction());
    axios
      .get(`${BASE_URL}/grocery?c_value=${Q}&limit=30`)
      .then((res) => {
        dispatch(totalProductsGetSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(totalProductsGetErrorAction());
        console.log(err.message);
      });
  };