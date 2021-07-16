import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_SEARCH,
} from "./userTypes";
import axios from "axios";

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const getUserSuccess = (users) => {
  return {
    type: GET_USER_SUCCESS,
    payload: users,
  };
};

export const getUserFail = (error) => {
  return {
    type: GET_USER_FAIL,
    payload: error,
  };
};

export const getUserSearch = (word) => {
  return {
    type: GET_USER_SEARCH,
    payload: word,
  };
};

export const axiosUser = () => {
  return async (dispatch) => {
    dispatch(getUser());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(getUserSuccess(response.data));
    } catch (error) {
      dispatch(getUserFail(error));
    }
  };
};
