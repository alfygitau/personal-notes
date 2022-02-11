import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./includes/bootstrap";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/js/all";
import { Provider} from 'react-redux';
import {store, persistor} from '../src/redux/store/store';
import { PersistGate } from "redux-persist/es/integration/react";

ReactDOM.render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
