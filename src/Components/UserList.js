import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css"

const userList = props => {
  
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.name} - ({user.age} years)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default userList;