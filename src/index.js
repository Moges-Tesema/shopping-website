import React from "react";
import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
const HatsPage = () => (
  <div>
    <h1>hats Page</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
