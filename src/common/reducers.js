import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_KOTOS_PENDING,
    REQUEST_KOTOS_SUCCESS,
    REQUEST_KOTOS_FAILED
 } from './constants.js'

const initialStateSearch = {
    searchField: ''
}
// reducer f - (the redux function 'dispatch()' will lanch our own-created reducer function)
// to be exactly: dispatch() redux-method will TAKE this reducer automatically from STORE 
// reducer needs for: which state we need do change and put into the store-object
// Neagoie: reducer F reads the action and spits out state
// reducer takes/gets the input of a state & an action
export const searchKotos = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD :
            return {... state, searchField: action.payload }; //new State
        default:
            return state;
    }
}

const initialStateKotos = {
    isPending: false,
    kotos: [],
    error: ''
}

export const requestKotos = (state = initialStateKotos, action={}) => {
    switch(action.type) {
        case REQUEST_KOTOS_PENDING:
            return {...state, isPending: true}
        case REQUEST_KOTOS_SUCCESS:
            return {...state, kotos: action.payload, isPending: false}
        case REQUEST_KOTOS_FAILED:
            return {...state, error: action.payload, isPending: false}
        default:
            return state
    }
}
  