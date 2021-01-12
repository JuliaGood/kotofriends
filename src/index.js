import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './reducers';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./containers/App";
import 'tachyons';
//we must destructure {robots} because that isn't exported by default! That's multiple exports.

const logger = createLogger();
const rootReducer = combineReducers({ requestRobots, searchRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); 

ReactDOM.render( 
                <Provider store={store} >
                    <App />
                </Provider>
                , document.getElementById('root'));

reportWebVitals();
