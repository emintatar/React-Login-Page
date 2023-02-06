import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input.jsx";
import Button from "./components/Button/Button.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "username") {
      setUser({ ...user, username: e.target.value });
    } else if (e.target.name === "password") {
      setUser({ ...user, password: e.target.value });
    }

    console.log(user);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (user.username === "" && user.password === "") {
      alert("Please enter your username and password");
    } else if (user.username === "") {
      alert("Please enter your username");
    } else if (user.password === "") {
      alert("Please enter your password");
    } else {
      alert("Login successful");
    }
  };

  return (
    <div className="App">
      <h1>Login Form</h1>
      <Form>
        <Input
          name={"username"}
          value={user.username}
          type={"text"}
          placeholder={"Username"}
          onChange={handleChange}
        />
        <Input
          name={"password"}
          value={user.password}
          type={"password"}
          placeholder={"Password"}
          onChange={handleChange}
        />
        <Button onClick={handleClick} />
      </Form>
    </div>
  );
}

export default App;
