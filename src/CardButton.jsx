function CardButton() {
  // OLD WAY - wont work on React
  //const selectedButton = document.getElementById("click-button");
  //selectedButton.addEventListener("click", handleOnClick);

  // NEW WAY - create the function and then assign to the property
  const handleOnClick = () => {
    console.log("Hello, I was clicked!");
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <button id="click-button" onClick={handleOnClick}>
        Click me!
      </button>

      <input type="text" name="" onChange={handleOnChange} />
    </div>
  );
}

export default CardButton;
