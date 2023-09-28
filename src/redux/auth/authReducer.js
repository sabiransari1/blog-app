import {
  USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_REQUEST,
} from "../actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  errMessage: "",
  isAuth: false,
  token: "",
  userData: new Object(),
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case USER_FAILURE: {
      return { ...state, isLoading: false, isError: true, errMessage: payload };
    }

    case USER_REGISTER_SUCCESS: {
      return { ...state, isLoading: false, isError: false };
    }

    case USER_LOGIN_SUCCESS: {
      return { ...state, isLoading: false, isError: false, userData: payload };
    }

    default: {
      return state;
    }
  }
};
