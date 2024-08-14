import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";

// After selecting the element with id = 'root'
// we pass down this element to React so it knows where to start
const htmlRoot = document.getElementById("root");
const root = ReactDOM.createRoot(htmlRoot);

// After telling React where to start, now we have
// to tell it which component to render, this case <App />
root.render(<Card />);
