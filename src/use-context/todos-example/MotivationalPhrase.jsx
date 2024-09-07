import { useContext, useState } from "react";
import { TodosContext } from "./TodosProvider";

function MotivationalPhrase() {
  const [text, setText] = useState("");

  const { contextSubmitMotivationalPhrase, contextMotivationalPhrase } =
    useContext(TodosContext);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = () => {
    contextSubmitMotivationalPhrase(text);
  };

  return (
    <div>
      <h1>Motivational Phrase</h1>
      <input value={text} type="text" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Submit motivational phrase</button>

      <h2>{contextMotivationalPhrase}</h2>
    </div>
  );
}

export default MotivationalPhrase;
