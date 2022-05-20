import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom/client"; //react router dependency
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");

//const root = createRoot(rootElement);

const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
