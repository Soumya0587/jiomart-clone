import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./ActionTypes";
import { BASE_URL } from "../../Util/Constant.js";

export const loginReqAction = () => {
  return { type: LOGIN_REQUEST };
};
export const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const loginFailAction = () => {
  return { type: LOGIN_FAILED };
};

export const login = (data) => (dispatch) => {
  dispatch(loginReqAction());
 return axios
    .post(BASE_URL + `/users/login`, data)
    .then((res) => {
      
      console.log(res.data.user);
      dispatch(loginSuccessAction(res.data.user));
      localStorage.setItem(
        "UserDetails",
        JSON.stringify({ isLoggedIn: true, ...res.data.user })
      );
      return res.data.user
    })
    .catch((err) => {
      dispatch(loginFailAction());
      return err.response.data
   
    
    });
};

export const logout = (dispatch) => {
  localStorage.setItem("UserDetails",null);
  dispatch({ type: LOGOUT_SUCCESS });
};
