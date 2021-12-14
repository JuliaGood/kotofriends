import {
  CHANGE_SEARCH_FIELD,
  REQUEST_KOTOS_PENDING,
  REQUEST_KOTOS_SUCCESS,
  REQUEST_KOTOS_FAILED,
} from "./constants.js";

const initialStateSearch = {
  searchField: "",
};

export const searchKotos = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateKotos = {
  isPending: false,
  kotos: [],
  error: "",
};

export const requestKotos = (state = initialStateKotos, action = {}) => {
  switch (action.type) {
    case REQUEST_KOTOS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_KOTOS_SUCCESS:
      return { ...state, kotos: action.payload, isPending: false };
    case REQUEST_KOTOS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
