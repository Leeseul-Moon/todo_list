import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../button/button";
import styles from "./todo.module.css";
import { deleteTodo, changeIsDone } from "../../redux/modules/todos";
import { useNavigate, Link } from "react-router-dom";

const Todo = ({ todo }) => {
  const { id, title, message, isDone } = todo;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const btnName = isDone === true ? "CANCLE" : "DONE";

  const delTodo = () => {
    dispatch(deleteTodo(id));
  };

  const toggleIsDone = () => {
    todo.isDone = !todo.isDone;
    dispatch(changeIsDone(todo));
  };

  const Detail = () => {
    navigate(`/detail/${todo.id}`, { state: { todoDetail: todo } });
  };

  return (
    <div className={styles.container}>
      <div onClick={Detail}>
        <li className={styles.title}>{title}</li>
        <li className={styles.message}>{message}</li>
      </div>
      <div className={styles.buttons}>
        <Button name="DELETE" onClick={delTodo} />
        <Button name={btnName} onClick={toggleIsDone} />
      </div>
    </div>
  );
};

export default Todo;
