import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const rootElement: any = document.getElementById("root");

createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
