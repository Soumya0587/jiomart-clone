

import {
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
  } from "./ActionTypes";
  
  const initState = JSON.parse(localStorage.getItem("UserDetails")) || {
    isLoggedIn: false,
    name: "",
    role: "",
    email: "",
    token: "",
    gender: "",
    isLoading: false,
    isError: true,
  };
  
  const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case LOGIN_REQUEST:
        return { ...state, isLoading: true };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          name: payload.name,
          email: payload.email,
          role: payload.role,
          token: payload.token,
          gender: payload.gender,
        };
      case LOGIN_FAILED:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case LOGOUT_SUCCESS: {
        return initState;
      }
  
      default:
        return state;
    }
  };
  
  export { reducer };
  