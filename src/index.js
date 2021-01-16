import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./components/App/App.jsx";

// Redux
import store from "./store/store";
import { Provider } from "react-redux";

// Assets
import "leaflet/dist/leaflet.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
