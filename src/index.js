import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(process.env.REACT_APP_SF_KEY);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
