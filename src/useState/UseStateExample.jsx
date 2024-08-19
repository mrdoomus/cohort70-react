import { useState } from "react";

function UseStateExample() {
  // by initialazing useState at 0, it returns 2 values
  // count = value of the state
  // setCount = function that changes the value of the sate
  const [count, setCount] = useState(0);

  function handleOnClick() {
    setCount(count + 1);
  }

  //   let count = 0

  //   function handleOnClick() {
  //     count = count + 1
  //   }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleOnClick}>Increment!</button>
    </div>
  );
}

function UseStateUsersExample() {
  const [students, setStudents] = useState([
    "Fidel",
    "Sebastian",
    "Harrison",
    "Mona",
    "Adrian",
    "Hannah",
  ]);

  function handleOnClick() {
    const newStudentsArray = students.slice();
    newStudentsArray.push("Kharis");
    setStudents(newStudentsArray);

    // setStudents([...students, "Kharis"]);
  }

  return (
    <div>
      <ul>
        {students.map((student) => (
          <li>{student}</li>
        ))}
      </ul>

      <button onClick={handleOnClick}>Add Kharis!</button>
    </div>
  );
}

function UseStateLoginExample() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  //   function handleUsernameOnChange(event) {
  //     setUsername(event.target.value);
  //   }

  //   function handlePasswordOnChange(event) {
  //     setPassword(event.target.value);
  //   }

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
  });

  function handleFormInputChange(event, inputName) {
    const newFormValues = Object.assign({}, formValues);
    newFormValues[inputName] = event.target.value;
    setFormValues(newFormValues);

    // setFormValues({...formValues, [inputName]: event.target.value});
  }

  function handleOnLoginClick() {
    alert(
      `Welcome back ${formValues.username} logged in with password: ${formValues.password} and ${formValues.email}`
    );
  }

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={formValues.username}
        onChange={(event) => handleFormInputChange(event, "username")}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        name="password"
        id="password"
        value={formValues.password}
        onChange={(event) => handleFormInputChange(event, "password")}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        id="email"
        value={formValues.email}
        onChange={(event) => handleFormInputChange(event, "email")}
      />

      <button onClick={handleOnLoginClick}>Log in!</button>
    </div>
  );
}

export { UseStateExample, UseStateUsersExample, UseStateLoginExample };
