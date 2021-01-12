import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./containers/App";
import 'tachyons';
//we must destructure {robots} because that isn't exported by default! That's multiple exports.

const store = createStore(searchRobots); 

ReactDOM.render( 
                <Provider store={store} >
                    <App />
                </Provider>
                , document.getElementById('root'));

reportWebVitals();
