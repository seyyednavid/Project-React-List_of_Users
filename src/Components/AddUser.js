import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserInput, setEnteredUserInput] = useState("");
  const [enteredAgeInput, setEnteredAgeInput] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserInput.trim().length === 0 ||
      enteredAgeInput.trim().length === 0
    ) {
      return;
    }
    if (+enteredAgeInput < 1) {
      return;
    }
    props.onAddUser(enteredUserInput, enteredAgeInput);
    setEnteredUserInput("");
    setEnteredAgeInput("");
  };

  const userNameHandler = (event) => {
    setEnteredUserInput(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAgeInput(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUserInput}
          onChange={userNameHandler}
        ></input>
        <label htmlFor="age">َAge (Years)</label>
        <input
          type="number"
          id="age"
          onChange={ageHandler}
          value={enteredAgeInput}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
