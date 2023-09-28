import {
  USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_REQUEST,
} from "../actionTypes";
import axios from "axios";

const URL = "";

export const loginUser = (loginUserData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const res = await axios.post(URL, loginUserData);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: USER_FAILURE, payload: error.message });
  }
};

export const registerUser = (registerUserData) => async (dispatch) => {
  try {
    dispatch({ type: USER_REQUEST });
    const res = await axios.post(URL, registerUserData);
    dispatch({ type: USER_REGISTER_SUCCESS });
  } catch (error) {
    dispatch({ type: USER_FAILURE, payload: error.message });
  }
};
