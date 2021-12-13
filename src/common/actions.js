import { apiCall } from './api';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_KOTOS_PENDING,
    REQUEST_KOTOS_SUCCESS,
    REQUEST_KOTOS_FAILED
 } from './constants.js';
// we will send this 'setSearchField' action to the dispatch() redux-method
export const setSearchField = (text) => ({ 
    type: CHANGE_SEARCH_FIELD,
    payload: text //save this data to the store? (Vital)
    //payload - send data to reducer? (Neagoie)
})

export const requestKotos = () => (dispatch) => {
    dispatch({ type: REQUEST_KOTOS_PENDING });
    apiCall('https://jsonplaceholder.typicode.com/users')
        .then(data => dispatch({ type: REQUEST_KOTOS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_KOTOS_FAILED, payload: error}))
}
