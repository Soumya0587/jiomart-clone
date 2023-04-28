import {
  DELIVERY_REQ,
  DELIVERY_SUCCESS,
  DELIVERY_FAIL,
} from "./DeliveryActionTypes";

import axios from "axios";

import { BASE_URL } from "../../Util/Constant.js";

export const DeliveryReqAction = () => {
    return { type: DELIVERY_REQ };
  };
  export const DeliverySuccessAction = (payload) => {
    return { type: DELIVERY_SUCCESS, payload };
  };
  
  export const DeliveryFailAction = () => {
    return { type: DELIVERY_FAIL };
  };

  export const AddAddress=(data)=>(dispatch) => {
    dispatch(DeliveryReqAction())
    return axios.post(BASE_URL + `/address/add`,data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) =>{
      let res=err.response.data
      return res
    });
  }
  export const getAdress =(userId)=> (dispatch) => {
    dispatch(DeliveryReqAction());
    axios
      .get(BASE_URL + `/address/${userId}`)
      .then((res) => dispatch(DeliverySuccessAction(res.data)))
      .catch((err) => dispatch(DeliveryFailAction()));
  };

  export const updateAddress = (data) => (dispatch) => {
    dispatch(DeliveryReqAction());
    return axios
      .patch(BASE_URL + `/address/update/${data._id}`, data
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  