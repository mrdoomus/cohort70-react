import { useEffect, useState } from "react";

function UseEffectExample() {
  const [isItOn, setIsItOn] = useState(false);
  const [count, setCount] = useState(0);

  function effectFunction() {
    console.log("User interacted with the app!");
  }

  const dependencyArray = [isItOn, count];

  // useEffect will keep track of the values inside of its
  // dependency array, if said values change, then the effectFunction will wun
  useEffect(effectFunction, dependencyArray);

  // useEffect will only run once AND ONLY ONCE in your app
  // because itsn ot tracking anything, then it's going to trigger once
  // useEffect(effectFunction, []);

  // useEffect will keep track of EVERYTHING
  // so if anything changes, the effectFunction will be triggered
  // useEffect(effectFunction);

  function changeSwitch() {
    setIsItOn(!isItOn);
    console.log("Lightbulb has been switched");
  }

  function handleOnClick() {
    setCount(count + 1);
    console.log("Count was increased");
  }

  return (
    <div>
      <div>{isItOn ? "ON" : "OFF"}</div>
      <button onClick={changeSwitch}>Switch!</button>

      <div>{count}</div>
      <button onClick={handleOnClick}>Increment!</button>
    </div>
  );
}

export { UseEffectExample };
