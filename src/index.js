import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import strategoApp from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
const logger = createLogger({ collapsed: true });
const store = createStore(
  strategoApp,
  composeWithDevTools(applyMiddleware(logger))
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
