import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CardList from "./CardList";
import 'tachyons';
import {robots} from './robots';
//we must destructure {robots} because that isn't exported by default! That's multiple exports.

ReactDOM.render(
  <CardList robots={robots}/>
, document.getElementById('root'));

reportWebVitals();
