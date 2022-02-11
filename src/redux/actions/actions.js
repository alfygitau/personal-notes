import * as types from "../actions/actionTypes";
import axios from "axios";
import jwtDecode from "jwt-decode";

// login details

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (token) => ({
  type: types.LOGIN_SUCCESS,
  payload: token,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    axios
      .post("https://test.topratedprofessors.com/sessions", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.headers);
        const tokenx = response.headers["x-toprated-token"];
        const decoded = jwtDecode(tokenx);
        const user = response.data;
        if (user.id === decoded.user_id) {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", tokenx);
          dispatch(loginSuccess(user));
        }
      })
      .catch((error) => {
        dispatch(loginFail(error.message));
      });
  };
};

//registration details

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (token) => ({
  type: types.REGISTER_SUCCESS,
  payload: token,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const registerInitiate = (
  first_name,
  last_name,
  username,
  email,
  password,
  password_confirmation
) => {
  return function (dispatch) {
    dispatch(registerStart());
    axios
      .post("https://test.topratedprofessors.com/register", {
        first_name,
        last_name,
        username,
        email,
        password,
        password_confirmation,
      })
      .then((response) => {
        dispatch(registerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
};

// logout details

const logout = () => ({
  type: types.LOGOUT,
});

export const Logout = () => {
  return function (dispatch) {
    dispatch(logout());
  };
};
