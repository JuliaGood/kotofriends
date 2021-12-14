import { apiCall } from "./api";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_KOTOS_PENDING,
  REQUEST_KOTOS_SUCCESS,
  REQUEST_KOTOS_FAILED,
} from "./constants.js";

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export const requestKotos = () => (dispatch) => {
  dispatch({ type: REQUEST_KOTOS_PENDING });
  apiCall("https://jsonplaceholder.typicode.com/users")
    .then((data) => dispatch({ type: REQUEST_KOTOS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_KOTOS_FAILED, payload: error }));
};
