import { useState } from "react";

function ChildUncontrolledComponent() {
  const [count, setCount] = useState(0);

  const handleCountIncrement = () => {
    setCount((prev) => ++prev);
  };

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      {count}
      <button onClick={handleCountIncrement}>Increment!</button>
    </div>
  );
}

export default ChildUncontrolledComponent;
