import React from "react";
import Button from "../button/button";
import styles from "./todo.module.css";

const Todo = ({ todo }) => {
  console.log("들어와?");
  const { id, title, message, isDone } = todo;
  const btnName = isDone === true ? "DONE" : "CANCLE";

  return (
    <div>
      <li>{title}</li>
      <li>{message}</li>
      <Button name="DELETE" />
      <Button name={btnName} />
    </div>
  );
};

export default Todo;
