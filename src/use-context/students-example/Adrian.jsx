import { useContext } from "react";
import { MessageContext } from "./MessageProvider";

function Adrian() {
  const { contextMessage } = useContext(MessageContext);

  return (
    <div>
      <h1>Adrian</h1>
      <p>{contextMessage}</p>
    </div>
  );
}

export default Adrian;
