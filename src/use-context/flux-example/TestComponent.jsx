import { useContext, useState } from "react";
import { REDUCER_ACTION_TYPES } from "./constants";
import { Context } from "./FluxProvider";

function TestComponent() {
  const [text, setText] = useState();
  const { state, dispatch } = useContext(Context);

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleOnAdd() {
    if (text) {
      dispatch({ type: REDUCER_ACTION_TYPES.ADD, payload: text });
      setText("");
    }
  }

  function handleOnRemove(indexToRemove) {
    dispatch({ type: REDUCER_ACTION_TYPES.REMOVE, payload: indexToRemove });
  }

  return (
    <div>
      <h1>Testing Flux</h1>

      <input onChange={handleOnChange} value={text} type="text" />
      <button onClick={handleOnAdd}>Click me to add new content!</button>

      <ul>
        {state.mottos.map((motto, index) => (
          <div style={{ display: "Flex" }}>
            <li key={motto}>
              <a href={`/${index}`}>{motto}</a>
            </li>
            <div
              style={{ color: "red", marginLeft: "10px" }}
              onClick={() => handleOnRemove(index)}
            >
              x
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TestComponent;
