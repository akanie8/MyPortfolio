import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    {" "}
    {/* Wrap App in BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
