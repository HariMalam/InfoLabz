import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { Practice } from "./App";
import First, { Second, Third } from "./extra";
import Notification, { Login, Logout } from "./practice";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Practice />
    <First />
    <Second />
    <Third />
    <Notification/>
    <Login/>
    <Logout/>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();