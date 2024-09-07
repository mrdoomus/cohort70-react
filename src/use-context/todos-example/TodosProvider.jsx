import { createContext, useState } from "react";

export const TodosContext = createContext({});

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [motivationalPhrase, setMotivationalPhrase] = useState("");

  const fetchForTodos = async () => {
    try {
      const rawResponse = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const transaltedResponse = await rawResponse.json();

      setTodos(transaltedResponse);
    } catch (e) {
      console.error(e);
    }
  };

  const submitMotivationalPhrase = (value) => {
    setMotivationalPhrase(value);
  };

  const contextValue = {
    contextTodos: todos,
    contextFetchForTodos: fetchForTodos,
    contextSubmitMotivationalPhrase: submitMotivationalPhrase,
    contextMotivationalPhrase: motivationalPhrase,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
}
