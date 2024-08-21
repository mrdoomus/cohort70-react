import { useState } from "react";
import ChildControlledComponent from "./ChildControlledComponent";
import ChildUncontrolledComponent from "./ChildUncontrolledComponent";

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleCountIncrement = () => {
    setCount((prev) => ++prev);
  };

  return (
    <div>
      <ChildControlledComponent
        count={count}
        incrementCount={handleCountIncrement}
      />
      <ChildUncontrolledComponent />
    </div>
  );
}

export default ParentComponent;
