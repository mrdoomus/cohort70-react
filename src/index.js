import React from "react";
import ReactDOM from "react-dom/client";
import Camilo from "./use-context/students-example/Camilo";
import { MessageProvider } from "./use-context/students-example/MessageProvider";
import Todos from "./use-context/todos-example/Todos";
import { TodosProvider } from "./use-context/todos-example/TodosProvider";
import MotivationalPhrase from "./use-context/todos-example/MotivationalPhrase";

// After selecting the element with id = 'root'
// we pass down this element to React so it knows where to start
const htmlRoot = document.getElementById("root");
const root = ReactDOM.createRoot(htmlRoot);

root.render(
  <div>
    <TodosProvider>
      <MotivationalPhrase />
      <Todos />
    </TodosProvider>
  </div>
);
