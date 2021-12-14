import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger"; // Middleware
import { searchKotos, requestKotos } from "./common/reducers";
import thunkMiddleware from "redux-thunk"; // Middleware
import reportWebVitals from "./reportWebVitals";
import App from "./components/app-container/App";
import "./index.css";
import "tachyons";

const logger = createLogger();
const rootReducer = combineReducers({ requestKotos, searchKotos });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
