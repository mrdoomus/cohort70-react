import { useContext, useState } from "react";
import { REDUCER_ACTION_TYPES } from "./constants";
import { Context } from "./FluxProvider";
import { useNavigate, useParams } from "react-router-dom";

function TestComponentRoute() {
  const { store, dispatch } = useContext(Context);
  const { mottoIndex } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState(store.mottos[mottoIndex]);

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleOnUpdate() {
    if (text) {
      dispatch({
        type: REDUCER_ACTION_TYPES.UPDATE,
        payload: { index: mottoIndex, text },
      });
      setText("");
      navigate("/");
    }
  }

  return (
    <div>
      <h1>Edit motto phrase</h1>

      <input onChange={handleOnChange} value={text} type="text" />
      <button onClick={handleOnUpdate}>Click me to edit the phrase!</button>
    </div>
  );
}

export default TestComponentRoute;
