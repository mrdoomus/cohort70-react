import { useState, useEffect } from "react";

const HttpMethods = () => {
  // Logic section
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  async function fetchAccountTodos() {
    try {
      const todos = await fetch(
        "https://playground.4geeks.com/todo/users/orbeworld",
        { method: "GET" }
      );
      const translatedTodos = await todos.json();
      console.log(translatedTodos);
      setTodos(translatedTodos.todos);
    } catch {}
  }

  useEffect(fetchAccountTodos, []);

  function handleOnChange(event) {
    setNewTodo(event.target.value);
  }

  async function handleOnClick() {
    try {
      await fetch("https://playground.4geeks.com/todo/todos/orbeworld", {
        method: "POST",
        body: JSON.stringify({
          label: newTodo,
          is_done: false,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      await fetchAccountTodos();
    } catch {}
  }

  // UI section
  return (
    <div>
      <h1>Requesting for Todos</h1>
      {todos.length
        ? todos.map((todo) => <div>{todo.label}</div>)
        : "Loading..."}
      <label htmlFor="todo">Todo Name:</label>
      <input
        onChange={handleOnChange}
        value={newTodo}
        type="text"
        name="todo"
        id="todo"
      />
      <button onClick={handleOnClick}>Create new Todo</button>
    </div>
  );
};

export default HttpMethods;
