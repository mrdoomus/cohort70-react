import React from "react";
import ReactDOM from "react-dom/client";
import RoutesExample from "./react-router/RoutesExample";
import { CountProvider } from "./use-context/CountContext";
import CountA from "./use-context/CountA";
import CountB from "./use-context/CountB";

// After selecting the element with id = 'root'
// we pass down this element to React so it knows where to start
const htmlRoot = document.getElementById("root");
const root = ReactDOM.createRoot(htmlRoot);

root.render(
  <CountProvider>
    <CountA />
    <CountB />
  </CountProvider>
);
