import {
  BLOGS_REQUEST,
  BLOGS_FAILURE,
  GET_BLOGS_SUCCESS,
  POST_BLOGS_SUCCESS,
} from "../actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  errMessage: "",
  blogsList: new Array(),
};

export const blogsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case BLOGS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case BLOGS_FAILURE: {
      return { ...state, isLoading: false, isError: true, errMessage: payload };
    }

    case GET_BLOGS_SUCCESS: {
      return { ...state, isLoading: false, isError: false, blogsList: payload };
    }

    default: {
      return state;
    }
  }
};
