import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_SEARCH,
} from "./userTypes";

const initState = {
  searchText: "",
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        searchText: "",
        loading: false,
        users: action.payload,
        error: "",
      };
    case GET_USER_FAIL:
      return {
        searchText: "",
        loading: false,
        users: [],
        error: action.payload,
      };
    case GET_USER_SEARCH:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};
