import { useEffect, useContext } from "react";
import { TodosContext } from "./TodosProvider";

function Todos() {
  const { contextTodos, contextFetchForTodos, contextMotivationalPhrase } =
    useContext(TodosContext);

  useEffect(() => {
    contextFetchForTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <h2>{contextMotivationalPhrase}</h2>
      {contextTodos.map((todo) => (
        <div>{todo.title}</div>
      ))}
    </div>
  );
}

export default Todos;
