import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./use-context/flux-example/FluxProvider";
import Layout from "./use-context/flux-example/layout";

// After selecting the element with id = 'root'
// we pass down this element to React so it knows where to start
const htmlRoot = document.getElementById("root");
const root = ReactDOM.createRoot(htmlRoot);

root.render(
  <div>
    <Provider>
      <Layout />
    </Provider>
  </div>
);
