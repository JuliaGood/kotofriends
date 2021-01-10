import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./containers/App";
import 'tachyons';
//we must destructure {robots} because that isn't exported by default! That's multiple exports.

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
