import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { searchRobots } from './reducers';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./containers/App";
import 'tachyons';
//we must destructure {robots} because that isn't exported by default! That's multiple exports.

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger)); 

ReactDOM.render( 
                <Provider store={store} >
                    <App />
                </Provider>
                , document.getElementById('root'));

reportWebVitals();
