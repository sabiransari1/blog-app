import {
  BLOGS_REQUEST,
  BLOGS_FAILURE,
  GET_BLOGS_SUCCESS,
  POST_BLOGS_SUCCESS,
} from "../actionTypes";
import axios from "axios";

const URL = "";

export const getBlogsList = (paramsObj) => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_REQUEST });
    const res = await axios.get(URL, paramsObj);
    dispatch({ type: GET_BLOGS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: BLOGS_FAILURE, payload: error.message });
  }
};

export const addBlog = (newBlog) => async (dispatch) => {
  try {
    dispatch({ type: BLOGS_REQUEST });
    const res = await axios.post(URL, newBlog);
    dispatch({ type: POST_BLOGS_SUCCESS });
  } catch (error) {
    dispatch({ type: BLOGS_FAILURE, payload: error.message });
  }
};
