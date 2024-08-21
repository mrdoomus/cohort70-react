function ChildControlledComponent({ count, incrementCount }) {
  return (
    <div>
      <h1>Controlled Component</h1>
      {count}
      <button onClick={incrementCount}>Increment!</button>
    </div>
  );
}

export default ChildControlledComponent;
