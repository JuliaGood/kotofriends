import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'; // Middleware
import { searchRobots, requestRobots } from './reducers';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./containers/App";
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ requestRobots, searchRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); 
// store - its just a 'store of all states' (хранилище стейтов) IN our Application (web-site)
// createStore - its a function of Redux, that takes/uses 'rootReducer'
// reducer - its our own-created function ( it doesn`t belong neither to React nor Redux)
// using this 'reducer' function we create a STORE (Neagoie)?
// this STORE can be accesses and passed down into <Provider/> component AS A PROPS!!!
// Provider - its a component from react-redux! we use it 
// in order to DON`t pass down the STORE as a props from parent to children components!
// <Provider/> component provides an access to all states in the STORE  (for smart components) ???-me
// instead of passing down the store as a props to the <App/> component - we just include it into the <Provider/> component (Neagoie)
// <Provider/> component will takes care of passing down the store as a props to ALL smart-components down.

ReactDOM.render( 
                <Provider store={store} >
                    <App />
                </Provider>
                , document.getElementById('root'));

reportWebVitals();
